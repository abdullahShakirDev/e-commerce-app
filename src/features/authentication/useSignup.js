import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "Account successfully created! Please verify the new account from user's email address."
      );
      navigate("/", { replace: true });
    },
    onError: () => toast.error("Please provide valid password or email"),
  });

  return { signup, isPending };
}
