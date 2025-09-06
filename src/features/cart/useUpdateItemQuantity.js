import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItemQuantity } from "../../services/CartItemsApi";
import { useUser } from "../authentication/useUser";

export function useUpdateCartItem() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate: updateCartItem, isPending } = useMutation({
    mutationFn: ({ cartItemId, newQuantity, productPrice }) =>
      updateCartItemQuantity({ cartItemId, newQuantity, productPrice }),
    onSuccess: () =>
      // Refresh cart data after update
      queryClient.invalidateQueries(["cart", user?.id]),
  });

  return { updateCartItem, isPending };
}
