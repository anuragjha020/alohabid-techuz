import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForgetPassword } from "./useForgetPassword";

function ForgetPasswordForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const { forgetPassword, isLoading } = useForgetPassword();

  function onSubmit({ email }) {
    forgetPassword(
      { email },
      {
        onSuccess: () => {
          reset(); // Reset the form after a successful submission
        },
      }
    );
  }

  function handleReset() {
    reset(); // Clear the form fields
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
          autoComplete="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow>
      <FormRow orientation="vertical">
        <Button onClick={handleReset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isLoading}>
          {isLoading ? "Sending..." : "Reset password"}
        </Button>
        <div
          style={{
            marginTop: "0.5rem",
            textAlign: "center",
          }}
        >
          <Link
            to="/login"
            style={{
              color: "var(--color-green-500)",
              fontSize: "1.2rem",
            }}
          >
            <span>
              <FaArrowLeft />
            </span>{" "}
            back to login
          </Link>
        </div>
      </FormRow>
    </Form>
  );
}

export default ForgetPasswordForm;
