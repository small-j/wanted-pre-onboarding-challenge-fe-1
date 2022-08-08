import { ReactNode } from "react";
import styled from "styled-components";

interface PropsI {
  state: boolean;
  handleTab: () => void;
  children: ReactNode;
}

function Tab({ state, children, handleTab }: PropsI) {
  return (
    <Button state={state} onClick={handleTab}>
      {children}
    </Button>
  );
}

export default Tab;

const Button = styled.button<{ state: boolean }>`
  ${(props) => (props.state ? props.theme.common.mainColorComb : props.theme.common.disabled)};
  width: 100%;
  height: 6rem;
  font-size: 2rem;
  padding: 2.1rem 0;
  text-align: center;
  border-radius: 1rem 1rem 0 0;
  cursor: pointer;
`;
