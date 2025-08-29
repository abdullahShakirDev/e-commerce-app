import { IoIosSend } from "react-icons/io";

function Subscripe() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Exclusive</h3>
      <p className="font-medium mb-2">Subscribe</p>
      <p className="text-text1 text-sm mb-4">Get 10% off your first order</p>
      <div className="flex items-center border border-text1 rounded-md overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-transparent px-3 py-2 text-sm focus:outline-none"
        />
        <button className="bg-BG text-text2 px-3 py-2">
          <IoIosSend size={18} />
        </button>
      </div>
    </div>
  );
}

export default Subscripe;
