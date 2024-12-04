import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { Link } from "react-router-dom"; // For navigation
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import SpinnerMini from "../../ui/SpinnerMini";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState("anuragjha020@gmail.com"); // Using default value for testing
  const [password, setPassword] = useState("Anuragjha@123"); // Using default value for testing
  const { login, isLoading } = useLogin();

  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address" orientation="vertical">
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Password" orientation="vertical">
        <div style={{ position: "relative" }}>
          <Input
            type={passwordVisible ? "text" : "password"} // Toggle between text and password
            id="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          {/* Eye icon to toggle password visibility */}
          <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "1rem", // Adjusted for better alignment
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
              color: "#999", // Optional, to change color of the eye icon
            }}
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}{" "}
            {/* Toggle between eye icons */}
          </span>
        </div>
        {/* Forgot Password Link */}
        <div style={{ position: "relative", margin: "10px 0" }}>
          <span
            style={{
              position: "absolute",
              right: "1rem",
            }}
          >
            <Link
              to="/forgot-password"
              style={{ color: "var(--color-green-500)", fontSize: "1.2rem" }}
            >
              Forgot Password?
            </Link>
          </span>
        </div>
      </FormRow>

      <FormRow orientation="vertical">
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Login" : <SpinnerMini />}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
