import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const queryClient = useQueryClient();
  const navgatie = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      toast.success("Log in was done successfully");
      queryClient.setQueryData(["user"], user);
      navgatie("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err.message);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isPending };
}
