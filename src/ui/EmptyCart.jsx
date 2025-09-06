import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <Link className="hover:underline hover:text-hoverButton1" to="/">
        &larr; Back to Shopping
      </Link>
      <p className="mt-7 font-semibold text-text2 text-center">
        Your cart is still empty. Start adding item :)
      </p>
    </div>
  );
}

export default EmptyCart;
