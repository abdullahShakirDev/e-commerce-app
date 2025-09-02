import { HiOutlineHeart } from "react-icons/hi";
import formatCurrency from "../../utils/fromatCurrency";
import { HiOutlineEye } from "react-icons/hi2";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

function Product({ item }) {
  const navigate = useNavigate();
  return (
    <li className="relative bg-gray-100 rounded-md shadow-sm p-4 group hover:shadow-lg transition-shadow">
      <div className="relative flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-40 w-40 object-contain"
        />

        <div className="absolute top-0 right-0 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all">
          <button className="w-9 h-9 flex cursor-pointer items-center justify-center bg-white rounded-full shadow hover:bg-gray-100">
            <HiOutlineHeart className="w-4 h-4" />
          </button>
          <button
            onClick={() => navigate(`/product/${item.id}`)}
            className="w-9 h-9 flex cursor-pointer items-center justify-center bg-white rounded-full shadow hover:bg-gray-100"
          >
            <HiOutlineEye className="w-4 h-4" />
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
        <Button type="small">Add to Cart</Button>
      </div>
    </li>
  );
}

export default Product;
