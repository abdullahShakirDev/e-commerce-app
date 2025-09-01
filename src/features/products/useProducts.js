import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productsApi";

export function useProducts() {
  const { data: products, isLoading } = useQuery({
    queryFn: getProducts,
    queryKey: ["products"],
  });

  return { products, isLoading };
}
