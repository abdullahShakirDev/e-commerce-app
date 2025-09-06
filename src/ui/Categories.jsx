import { MdPhoneIphone } from "react-icons/md";
import { FaLaptop, FaHeadphones, FaGamepad, FaCamera } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";

const categories = [
  { name: "All", icon: null },
  { name: "phones", icon: <MdPhoneIphone size={25} /> },
  { name: "computers", icon: <FaLaptop size={25} /> },
  { name: "smartwatch", icon: <BsSmartwatch size={25} /> },
  { name: "camera", icon: <FaCamera size={25} /> },
  { name: "headphones", icon: <FaHeadphones size={25} /> },
  { name: "gaming", icon: <FaGamepad size={25} /> },
];

function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  function handleCategoryClick(category) {
    if (category === "All") {
      searchParams.delete("category"); // reset filter
      setSearchParams(searchParams);
    } else {
      searchParams.set("category", category);
      setSearchParams(searchParams);
    }
  }

  return (
    <div className="my-10 max-w-6xl mx-auto border-b border-text2/30 pb-6">
      <div className="flex items-center gap-4">
        <p className="w-3 h-8 bg-secondary2 rounded-sm"></p>
        <span className="text-sm font-bold text-secondary2 bg-BG">
          Category
        </span>
      </div>

      <h1 className="font-semibold text-2xl my-3">Browse By Category</h1>

      <ul className="flex flex-wrap items-center justify-center mt-6 space-x-10">
        {categories.map((cat) => (
          <li
            key={cat.name}
            onClick={() => handleCategoryClick(cat.name)}
            className={`flex flex-col items-center justify-center w-24 h-24 border rounded-md cursor-pointer transition-all 
              ${
                activeCategory === cat.name
                  ? "bg-secondary2 text-white border-secondary2 shadow-md"
                  : "border-text1 hover:shadow-md hover:bg-secondary2 hover:text-white hover:border-secondary2"
              }`}
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
