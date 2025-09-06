import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteItemCart as deleteItemCartApi } from "../../services/CartItemsApi";
import toast from "react-hot-toast";

export function useDeleteItemCart() {
  const queryClient = useQueryClient();
  const { mutate: deleteItemCart, isPending: isDeleting } = useMutation({
    mutationFn: (id) => deleteItemCartApi(id),
    onSuccess: () => {
      toast.success("Item was successfullt deleted");
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
      queryClient.invalidateQueries({
        queryKey: ["cartCount"],
      });
    },
    onError: () => toast.error("There was a problem while deleting an item"),
  });

  return { deleteItemCart, isDeleting };
}
