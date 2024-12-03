import styled from "styled-components";
import SignupForm from "../features/authentication/SignupForm";
import SignInUpHeader from "../ui/SignInUpHeader";

const SignupLayoutContainer = styled.section`
  background: #f3f4f7;
  padding: 107px 0;
  min-height: 100vh;
`;

const SignupLayout = styled.main`
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


function Signup() {
  return (
    <SignupLayoutContainer>
      <SignupLayout>
        <SignInUpHeader heading="Get started" action="Sign in" />
        <SignupForm />
      </SignupLayout>
    </SignupLayoutContainer>
  );
}

export default Signup;
