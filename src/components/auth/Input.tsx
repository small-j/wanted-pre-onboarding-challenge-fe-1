import { ReactElement } from "react";
import styled from "styled-components";

interface PropI {
  children?: ReactElement;
  value: string;
  type: string;
  handleChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  textPlaceholder?: string;
}

function Input({ children, value, handleChange, textPlaceholder = "" }: PropI) {
  return (
    <Wrapper>
      <TextInput value={value} placeholder={textPlaceholder} onChange={handleChange} />
      {children}
    </Wrapper>
  );
}

export default Input;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  width: 100%;
  outline: none;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.black};
  background-color: ${(props) => props.theme.colors.white};
  border: 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.textColor};
  margin-bottom: 0.4rem;
`;
