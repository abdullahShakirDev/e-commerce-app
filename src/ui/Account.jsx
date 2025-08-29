import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Account</h3>
      <ul className="space-y-2 text-text text-sm">
        <li>
          <Link to="#">My Account</Link>
        </li>
        <li>
          <Link to="/login">Login / Register</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="#">Wishlist</Link>
        </li>
        <li>
          <Link to="#">Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default Account;
