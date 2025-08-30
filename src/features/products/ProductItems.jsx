import Product from "./Product";

const mockProducts = [
  // Phones
  {
    id: 1,
    name: "iPhone 14 Pro",
    description: "6.1-inch Super Retina XDR display, A16 Bionic chip.",
    price: 999.99,
    stock: 15,
    image_url: "https://via.placeholder.com/300x200?text=iPhone+14+Pro",
    category: "Phones",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    description: "High-performance Android smartphone with amazing camera.",
    price: 899.99,
    stock: 20,
    image_url: "https://via.placeholder.com/300x200?text=Galaxy+S23",
    category: "Phones",
  },

  // Computers
  {
    id: 3,
    name: "MacBook Air M2",
    description: "Lightweight laptop powered by Apple silicon.",
    price: 1199.99,
    stock: 10,
    image_url: "https://via.placeholder.com/300x200?text=MacBook+Air+M2",
    category: "Computers",
  },
  {
    id: 4,
    name: "Dell XPS 13",
    description: "Compact Windows laptop with 13-inch InfinityEdge display.",
    price: 1099.99,
    stock: 12,
    image_url: "https://via.placeholder.com/300x200?text=Dell+XPS+13",
    category: "Computers",
  },

  // SmartWatch
  {
    id: 5,
    name: "Apple Watch Series 8",
    description: "Smartwatch with health and fitness tracking.",
    price: 399.99,
    stock: 30,
    image_url: "https://via.placeholder.com/300x200?text=Apple+Watch+8",
    category: "SmartWatch",
  },
  {
    id: 6,
    name: "Samsung Galaxy Watch 5",
    description: "Fitness-focused smartwatch with AMOLED display.",
    price: 299.99,
    stock: 25,
    image_url: "https://via.placeholder.com/300x200?text=Galaxy+Watch+5",
    category: "SmartWatch",
  },

  // Camera
  {
    id: 7,
    name: "Canon EOS R7",
    description: "Mirrorless camera with 32MP APS-C sensor.",
    price: 1499.99,
    stock: 8,
    image_url: "https://via.placeholder.com/300x200?text=Canon+EOS+R7",
    category: "Camera",
  },
  {
    id: 8,
    name: "Sony Alpha a7 IV",
    description: "Full-frame mirrorless camera with 4K video recording.",
    price: 2499.99,
    stock: 6,
    image_url: "https://via.placeholder.com/300x200?text=Sony+a7+IV",
    category: "Camera",
  },

  // HeadPhones
  {
    id: 9,
    name: "Sony WH-1000XM5",
    description: "Noise-cancelling over-ear headphones.",
    price: 349.99,
    stock: 40,
    image_url: "https://via.placeholder.com/300x200?text=Sony+XM5",
    category: "HeadPhones",
  },
  {
    id: 10,
    name: "Apple AirPods Pro 2",
    description: "Wireless earbuds with active noise cancellation.",
    price: 249.99,
    stock: 60,
    image_url: "https://via.placeholder.com/300x200?text=AirPods+Pro+2",
    category: "HeadPhones",
  },

  // Gaming
  {
    id: 11,
    name: "PlayStation 5",
    description: "Next-gen gaming console with fast SSD and ray tracing.",
    price: 499.99,
    stock: 5,
    image_url: "https://via.placeholder.com/300x200?text=PS5",
    category: "Gaming",
  },
  {
    id: 12,
    name: "Xbox Series X",
    description: "Microsoft's flagship gaming console with Game Pass support.",
    price: 499.99,
    stock: 7,
    image_url: "https://via.placeholder.com/300x200?text=Xbox+Series+X",
    category: "Gaming",
  },
];

function ProductItems() {
  return (
    <div className="max-w-5xl mx-auto my-10 border-b border-text1/30 pb-8">
      <div className="flex items-center gap-4">
        <p className="w-3 h-8 bg-secondary2 rounded-sm"></p>
        <span className="text-sm font-bold text-secondary2 bg-BG">
          Products
        </span>
      </div>
      <h1 className="font-semibold text-2xl my-3">Explore Our Products</h1>
      <div className="mt-6">
        <ul className="flex flex-wrap items-center gap-11">
          {mockProducts.map((pro) => (
            <Product item={pro} key={pro.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductItems;
