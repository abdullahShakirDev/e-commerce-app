import { MdPhoneIphone } from "react-icons/md";
import { FaLaptop, FaHeadphones, FaGamepad, FaCamera } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";

const categories = [
  { name: "Phones", icon: <MdPhoneIphone size={25} /> },
  { name: "Computers", icon: <FaLaptop size={25} /> },
  { name: "SmartWatch", icon: <BsSmartwatch size={25} /> },
  { name: "Camera", icon: <FaCamera size={25} /> },
  { name: "HeadPhones", icon: <FaHeadphones size={25} /> },
  { name: "Gaming", icon: <FaGamepad size={25} /> },
];

function Categories() {
  return (
    <div className="my-10 max-w-5xl mx-auto border-b border-text2/30 pb-6">
      <div className="flex items-center gap-4">
        <p className="w-3 h-8 bg-secondary2 rounded-sm"></p>
        <span className="text-sm font-bold text-secondary2">Category</span>
      </div>

      <h1 className="font-semibold text-2xl my-3">Browse By Category</h1>

      <ul className="flex flex-wrap items-center justify-center mt-6 space-x-10">
        {categories.map((cat) => (
          <li
            key={cat.name}
            className="flex flex-col items-center justify-center w-24 h-24 border border-text1 rounded-md cursor-pointer hover:shadow-md hover:bg-secondary2 hover:text-text hover:border-text transition-all"
          >
            <div className="mb-2">{cat.icon}</div>
            <span className="text-sm font-medium">{cat.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
