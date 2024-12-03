import PropTypes from "prop-types"; // Import PropTypes
import { FaGoogle, FaFacebook } from "react-icons/fa"; // Import icons
import Logo from "../ui/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ThirdPartyContainer = styled.div`
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  gap: 12px;
`;

const IconButton = styled.button`
  display: flex;
  align-items: center; /* Vertically center the icons */
  justify-content: center; /* Horizontally center the icons */
  width: 100%; /* Adjust width as needed */
  height: 100%; /* Adjust height as needed */
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px 57px;
  border-radius: 8px;
  background: var(--White, #fefefe);
  box-shadow: 0px 4px 8px -2px rgba(10, 13, 18, 0.1),
    0px 2px 4px -2px rgba(10, 13, 18, 0.06);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--color-green-50);
  }

  & svg {
    font-size: 2rem;
  }
`;
const StyledLink = styled(Link)`
  color: var(--color-green-500); /* Set the link color */
  text-decoration: underline; /* Add underline */
  font-weight: 500; /* Optional: Make it slightly bold */
  transition: color 0.2s ease;
  font-size: 16px;
  font-weight:500;

  &:hover {
    color: var(--color-green-700); /* Optional: Darken the color on hover */
  }
`;

function SignInUpHeader({ heading, action }) {

  const actionPath = action === "Sign in" ? "/login" : "/signup";

  return (
    <>
      <LogoContainer>
        <Logo />
        <h1>{heading}</h1>
        <p>
          Already have an account? {/* Use Link with proper "to" attribute */}
          <StyledLink>
            <Link to={actionPath}>{action}</Link>
          </StyledLink>
        </p>
      </LogoContainer>

      <ThirdPartyContainer>
        {/* Google Button with Icon */}
        <IconButton>
          <FaGoogle style={{ color: "#db4437" }} />
        </IconButton>

        {/* Facebook Button with Icon */}
        <IconButton>
          <FaFacebook style={{ color: "#1877f2" }} />
        </IconButton>
      </ThirdPartyContainer>
    </>
  );
}

// Add PropTypes validation
SignInUpHeader.propTypes = {
  heading: PropTypes.string.isRequired, // heading must be a string and is required
  action: PropTypes.oneOf(["Sign in", "Sign up"]).isRequired, // action must be one of these two strings
};

export default SignInUpHeader;
