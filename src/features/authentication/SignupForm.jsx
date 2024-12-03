import { useState } from "react"; // Import useState hook
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import { useSignup } from "./useSignup";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  // State to toggle password visibility
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  function onSubmit({ userName, email, password }) {
    signup(
      { userName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Email"
        error={errors?.email?.message}
        orientation="vertical"
      >
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="User Name"
        error={errors?.userName?.message}
        orientation="vertical"
      >
        <Input
          type="text"
          id="userName"
          placeholder="Enter your username"
          disabled={isLoading}
          {...register("userName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow
        label="Password"
        error={errors?.password?.message}
        orientation="vertical"
      >
        <div style={{ position: "relative" }}>
          <Input
            type={passwordVisible ? "text" : "password"} // Toggle between text and password
            id="password"
            placeholder="Enter your password"
            disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/,
                message:
                  "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            })}
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
      </FormRow>

      <FormRow
        error={errors?.agreement?.message}
        orientation="vertical"
      >
        <Checkbox
          {...register("agreement", {
            required: "You must agree to the privacy policy.",
          })}
        >
          You agree to our friendly privacy policy.
        </Checkbox>
      </FormRow>

      <FormRow orientation="vertical">
        <Button disabled={isLoading}>SignUp</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
