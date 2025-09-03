function CoponBox() {
  return (
    <div className="flex items-center gap-3">
      <input
        className=" rounded-md w-[200px] h-[40px] py-2 px-4 border border-text2"
        type="text"
        placeholder="Coupon Code"
      />
      <button className="cursor-pointer hover:bg-hoverButton px-6 py-2 text-text font-medium rounded-md bg-secondary2">
        Apply Coupon
      </button>
    </div>
  );
}

export default CoponBox;
