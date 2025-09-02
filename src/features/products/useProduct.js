import { useQuery } from "@tanstack/react-query";
import { getProduct } from "../../services/productsApi";
import { useParams } from "react-router-dom";

export function useProduct() {
  const { productId } = useParams();
  const { data: product, isLoading } = useQuery({
    queryFn: () => getProduct(productId),
    queryKey: ["product", productId],
    retry: false,
  });

  return { product, isLoading };
}
