import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);

      toast.success(
        "Account successfully created! Please verify the new account from the user's email address."
      );
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      // Show the error to the user, e.g., email already in use
      toast.error(error.message || "An error occurred during signup.");
    },
  });

  return { signup, isLoading };
}
