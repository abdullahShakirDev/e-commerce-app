import { Link } from "react-router-dom";
import { HiMiniArrowPath, HiOutlineHeart } from "react-icons/hi2";
import { TbTruckDelivery } from "react-icons/tb";
import { useAddToCart } from "../cart/useAddToCart";
import { useProduct } from "./useProduct";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import formatCurrency from "../../utils/fromatCurrency";
import { useState } from "react";

function ItemDetails() {
  const { product, isLoading } = useProduct();
  const { addToCart } = useAddToCart();
  const [quantityValue, setQuantityValue] = useState(1);

  if (isLoading) return <Spinner />;

  const { id, name, price, category, description, stock, image } = product;

  const inStoke = stock > 0;

  function handleAddToCart() {
    addToCart({ productId: id, quantity: quantityValue, productPrice: price });
  }

  return (
    <div className="px-4 py-6">
      <div className="text-sm mb-4">
        <Link to="/" className="text-text2/40 hover:text-text2 hover:underline">
          Home
        </Link>
        <span className="mx-1">/</span>
        <span className="text-text2/60">{category}</span>
        <span className="mx-1">/</span>
        <span className="text-text2 font-medium">{name}</span>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center">
          <img
            src={image}
            className="h-[350px] w-[550px] object-contain rounded-md shadow-sm"
            alt={`Image of ${name}`}
          />
        </div>

        <div className="flex flex-col gap-6 max-w-99">
          <div className="border-b border-text2/30 pb-4">
            <h1 className="text-3xl font-semibold text-text2">{name}</h1>
            <p
              className={`${
                inStoke ? "text-green-600" : "text-secondary2"
              } font-medium mt-2 text-sm`}
            >
              {inStoke ? "In Stock" : "Sold Out"}
            </p>
            <p className="text-2xl font-semibold mt-2">
              {formatCurrency(price)}
            </p>
            <p className="text-sm mt-3 leading-relaxed text-text2/80">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-md overflow-hidden">
              <input
                type="number"
                className="w-20 h-11 text-center focus:outline-none"
                defaultValue={quantityValue}
                min={1}
                onChange={(e) => setQuantityValue(Number(e.target.value))}
                disabled={!inStoke}
              />
            </div>

            <Button
              type="primary"
              onClick={handleAddToCart}
              disabled={!inStoke}
            >
              Add to cart
            </Button>

            <button className="ml-2 p-2 cursor-pointer border border-text2 hover:bg-gray-100">
              <HiOutlineHeart size={24} />
            </button>
          </div>
          <button className="border border-text2 h-11 flex items-center justify-center gap-3 cursor-pointer hover:bg-text1/10 transition-all">
            <TbTruckDelivery size={30} /> <span>Free Delivery</span>
          </button>
          <button className="border border-text2 h-11 flex items-center justify-center gap-3 cursor-pointer hover:bg-text1/10 transition-all">
            <HiMiniArrowPath size={30} />
            <span>Return Delivery</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
