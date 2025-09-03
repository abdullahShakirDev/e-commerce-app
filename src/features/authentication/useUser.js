import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/authApi";

export function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
