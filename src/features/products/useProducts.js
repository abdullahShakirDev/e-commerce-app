import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productsApi";
import { useSearchParams } from "react-router-dom";

export function useProducts() {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("category");

  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "category", value: filterValue, method: "eq" };

  const { data: products, isLoading } = useQuery({
    queryFn: () => getProducts({ filter }),
    queryKey: ["products", filter],
  });

  return { products, isLoading };
}
