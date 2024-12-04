import { useMutation } from "@tanstack/react-query";
import { forgetPassword as forgetPasswordApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useForgetPassword() {
  const navigate = useNavigate();

  const { mutate: forgetPassword, isLoading } = useMutation({
    mutationFn: forgetPasswordApi,
    onSuccess: () => {
      toast.success(
        "Password reset email sent successfully! Please check your email to reset your password."
      );
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      toast.error(error.message || "Failed to send password reset email.");
    },
  });

  return { forgetPassword, isLoading };
}
