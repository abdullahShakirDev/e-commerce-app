import { useNavigate } from "react-router-dom";
import { useGetCartCount } from "./useGetCountCart";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function CartIcon() {
  const { cartCount } = useGetCartCount();
  const navigate = useNavigate();
  return (
    <button
      className="relative mx-3 cursor-pointer p-1 rounded-sm hover:bg-text1/10"
      onClick={() => navigate("/cart")}
    >
      <HiOutlineShoppingCart size={28} className="text-gray-700" />

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </button>
  );
}

export default CartIcon;
