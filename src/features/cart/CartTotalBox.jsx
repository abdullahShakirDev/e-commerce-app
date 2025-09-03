import formatCurrency from "../../utils/fromatCurrency";

function CartTotalBox({ subTotal }) {
  return (
    <div className="border border-text2 rounded-lg p-6 w-full max-w-sm bg-white shadow-sm">
      <h1 className="text-2xl font-semibold mb-4">Cart Total</h1>

      <div className="flex justify-between border-b border-text2 py-2 text-sm">
        <span>Subtotal:</span>
        <span className="font-medium">{formatCurrency(subTotal)}</span>
      </div>

      <div className="flex justify-between border-b border-text2 py-2 text-sm">
        <span>Shipping:</span>
        <span className="font-medium">Free</span>
      </div>

      <div className="flex justify-between pt-3 text-base">
        <span className="font-semibold">Total:</span>
        <span className="font-bold text-secondary2">
          {formatCurrency(subTotal)}
        </span>
      </div>
    </div>
  );
}

export default CartTotalBox;
