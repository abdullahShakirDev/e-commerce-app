import { Link, useNavigate } from "react-router-dom";
import { useCartItems } from "./useCartItems";
import CartTotalBox from "./CartTotalBox";
import CoponBox from "./CoponBox";
import Spinner from "../../ui/Spinner";
import CartTable from "./CartTable";

function CartOverview() {
  const navigate = useNavigate();

  const { cartItems = [], isLoading } = useCartItems();

  if (isLoading) return <Spinner />;

  const subTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="text-sm mb-6">
        <Link to="/" className="text-text2/40 hover:text-text2 hover:underline">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-text2 font-semibold">Cart</span>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <CartTable cartItems={cartItems} />
      </div>
      <div className=" flex items-center justify-between mt-6">
        <button
          onClick={() => navigate("/")}
          className="border cursor-pointer font-medium px-6 py-3 text border-text2"
        >
          Return To Shop
        </button>
        <button className="border cursor-pointer px-6 py-3 font-medium text border-text2">
          Update Cart
        </button>
      </div>

      <div className="mt-15 flex items-center justify-between">
        <CoponBox />
        <CartTotalBox subTotal={subTotal} />
      </div>
    </div>
  );
}

export default CartOverview;
