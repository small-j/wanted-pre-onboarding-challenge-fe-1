import { useEffect, useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import useRegex from "../../hooks/useRegex";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

function SignupTab() {
  const { checkEmail, checkPassword } = useRegex();
  const { authSignUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [disabled, setDisabled] = useState(true);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("hih");
    authSignUp(email, password);
  };

  const checkEmailRegex = () => {
    if (email === "") return;
    checkEmail(email) ? setEmailValid(true) : setEmailValid(false);
  };

  const checkPasswordRegex = () => {
    if (password === "") return;
    checkPassword(password) ? setPasswordValid(true) : setPasswordValid(false);
  };

  const isDisabled = () => {
    if (email !== "" && password !== "" && emailValid && passwordValid) setDisabled(false);
    else setDisabled(true);
  };

  useEffect(() => {
    checkEmailRegex();
  }, [email]);

  useEffect(() => {
    checkPasswordRegex();
  }, [password]);

  useEffect(() => {
    isDisabled();
  }, [emailValid, passwordValid]);

  return (
    <StyledSignupTab>
      <InputWrapper>
        <Input type="text" value={email} textPlaceholder={"이메일"} handleChange={handleEmail}>
          {!emailValid ? <Error>이메일형식은 @, .을 포함해야합니다.</Error> : <></>}
        </Input>
        <Input type="password" value={password} textPlaceholder="비밀번호" handleChange={handlePassword}>
          {!passwordValid ? <Error>비밀번호는 8자리 이상이어야합니다.</Error> : <></>}
        </Input>
      </InputWrapper>
      <SubmitButton isDisabled={disabled} text="회원가입" handleSubmit={handleSubmit} />
    </StyledSignupTab>
  );
}

export default SignupTab;

const StyledSignupTab = styled.section`
  width: 50rem;
  height: 30.4rem;
  padding: 5rem;
  border: solid 1px ${(props) => props.theme.colors.textColor};
  border-top: 0;
  border-radius: 0 0 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

const Error = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.warning};
`;
