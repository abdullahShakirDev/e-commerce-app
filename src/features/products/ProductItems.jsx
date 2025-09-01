import { useProducts } from "./useProducts";
import Product from "./Product";
import Spinner from "../../ui/Spinner";

function ProductItems() {
  const { products, isLoading } = useProducts();
  console.log(products);
  if (isLoading) return <Spinner />;

  return (
    <div className="max-w-5xl mx-auto my-10 border-b border-text1/30 pb-8">
      <div className="flex items-center gap-4">
        <p className="w-3 h-8 bg-secondary2 rounded-sm"></p>
        <span className="text-sm font-bold text-secondary2 bg-BG">
          Products
        </span>
      </div>
      <h1 className="font-semibold text-2xl my-3">Explore Our Products</h1>
      <div className="mt-6">
        <ul className="flex flex-wrap items-center gap-11">
          {products.map((pro) => (
            <Product item={pro} key={pro.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductItems;
