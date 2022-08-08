import styled from "styled-components";

interface PropsI {
  isDisabled: boolean;
  text: string;
  handleSubmit: () => void;
}

function SubmitButton({ isDisabled, text, handleSubmit }: PropsI) {
  const handleClick = () => {
    !isDisabled && handleSubmit();
  };

  return (
    <ButtonWrapper>
      <Button isDisabled={isDisabled} onClick={handleClick}>
        {text}
      </Button>
    </ButtonWrapper>
  );
}

export default SubmitButton;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ isDisabled: boolean }>`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
  ${(props) => (!props.isDisabled ? props.theme.common.mainColorComb : props.theme.common.disabled)};
`;
