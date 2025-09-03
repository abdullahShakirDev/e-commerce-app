import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUser } from "../authentication/useUser";
import { addToCart as addToCartApi } from "../../services/CartItemsApi";

export function useAddToCart() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate: addToCart, isPending } = useMutation({
    mutationFn: ({ productId, quantity, productPrice }) =>
      addToCartApi({ userId: user?.id, productId, quantity, productPrice }),
    onSuccess: () => queryClient.invalidateQueries(["cart", user?.id]),
  });

  return { addToCart, isPending };
}
