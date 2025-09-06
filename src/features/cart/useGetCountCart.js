import { useQuery } from "@tanstack/react-query";
import { getCountCart } from "../../services/CartItemsApi";
import { useUser } from "../authentication/useUser";

export function useGetCartCount() {
  const { user } = useUser();
  const { data: cartCount, isLoading } = useQuery({
    queryFn: () => getCountCart(user?.id),
    queryKey: ["cartCount", user?.id],
    enabled: !!user,
  });

  return { cartCount, isLoading };
}
