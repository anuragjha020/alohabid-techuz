import styled from "styled-components";
import ForgetPasswordForm from "../features/authentication/ForgetPasswordForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
const ForgetPassLayoutContainer = styled.section`
  background: #f3f4f7;
  padding: 107px 0;
  min-height: 100vh;
`;

const ForgetPassLayout = styled.main`
  display: flex;
  width: 442px;
  margin: 0 auto;
  padding: 32px;
  flex-direction: column;
  /* align-items: center; */
  gap: 30px;
  flex-shrink: 0;
  background-color: #fefefe;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 22px;
  box-shadow: 0px 1px 2px 0px rgba(10, 13, 18, 0.05);
`;

function ForgetPassword() {
  return (
    <ForgetPassLayoutContainer>
      <ForgetPassLayout>
        <Logo />
        <Heading as="h1">Forgot password</Heading>
        <ForgetPasswordForm />
      </ForgetPassLayout>
    </ForgetPassLayoutContainer>
  );
}

export default ForgetPassword;
