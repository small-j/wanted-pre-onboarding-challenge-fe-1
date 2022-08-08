import { useState } from "react";
import styled from "styled-components";
import LoginTab from "../components/auth/LoginTab";
import SignupTab from "../components/auth/SignupTab";
import Tab from "../components/auth/Tab";

function Auth() {
  const [tab, setTab] = useState(true);

  const handleTab = () => {
    setTab(!tab);
  };

  return (
    <StyledRoot>
      <TabWrapper>
        <Tab state={tab} handleTab={handleTab}>
          로그인
        </Tab>
        <Tab state={!tab} handleTab={handleTab}>
          회원가입
        </Tab>
      </TabWrapper>
      {tab ? <LoginTab /> : <SignupTab />}
    </StyledRoot>
  );
}

export default Auth;

const StyledRoot = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TabWrapper = styled.section`
  width: 50rem;
  display: flex;
`;
