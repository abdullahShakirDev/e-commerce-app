import { HiOutlineHeart } from "react-icons/hi";
import formatCurrency from "../../utils/fromatCurrency";

function Product({ item }) {
  return (
    <li className="relative bg-gray-100 rounded-md shadow-sm p-4 group hover:shadow-lg transition-shadow">
      <div className="relative flex items-center justify-center">
        <img
          src="/public/signup-logo.png"
          alt={item.name}
          className="h-40 object-contain"
        />

        <div className="absolute top-2 right-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
          <button className="w-9 h-9 flex cursor-pointer items-center justify-center bg-white rounded-full shadow hover:bg-gray-100">
            <HiOutlineHeart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-text2 text-sm font-medium py-1 line-clamp-1">
          {item.name}
        </h3>
        <p className="text-secondary2 text-sm font-bold py-1">
          {formatCurrency(item.price)}
        </p>
        <button className="bg-secondary2 w-full rounded-lg py-1.5 hover:shadow-lg cursor-pointer text-text text-sm font-medium my-1.5 hover:bg-red-500 transition-all">
          Add to Cart
        </button>
      </div>
    </li>
  );
}

export default Product;
