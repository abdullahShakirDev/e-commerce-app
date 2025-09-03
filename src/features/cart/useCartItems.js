import { useQuery } from "@tanstack/react-query";
import { getCartItems } from "../../services/CartItemsApi";
import { useUser } from "../authentication/useUser";

export function useCartItems() {
  const { user } = useUser();
  const { data: cartItems, isLoading } = useQuery({
    queryFn: () => getCartItems(user.id),
    queryKey: ["cart", user?.id],
    enabled: !!user,
  });

  return { cartItems, isLoading };
}
