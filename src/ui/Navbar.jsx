import { HiOutlineHeart, HiOutlineMagnifyingGlass } from "react-icons/hi2";

import { NavLink } from "react-router-dom";
import CartIcon from "../features/cart/CartIcon";

function Navbar() {
  return (
    <nav>
      <div className="flex justify-start items-center pt-8 pb-3 px-3 border-b border-button/30">
        <h1 className="text-text2 font-extrabold text-lg ml-18 mr-40">
          Exclusive
        </h1>

        <ul className="flex items-center justify-center gap-30">
          <li>
            <NavLink to="/" className="active:text-text1/35 hover:underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="active:text-text1/35 hover:underline">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="active:text-text1/35 hover:underline">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className="active:text-text1/35 hover:underline"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>

        <div className="relative w-64 ml-24">
          <input
            className="w-full pr-10 pl-3 py-2 rounded-md bg-secondary focus:outline-none focus:ring-2 focus:ring-button"
            type="text"
            name="search"
            id="search"
            placeholder="What are you looking for?"
          />
          <HiOutlineMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        </div>
        <button className="ml-3 cursor-pointer p-1 rounded-sm hover:bg-text1/10">
          <HiOutlineHeart size={25} />
        </button>
        <CartIcon />
      </div>
    </nav>
  );
}

export default Navbar;
