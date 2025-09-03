import { Table } from "antd";
import { HiX } from "react-icons/hi";
import formatCurrency from "../../utils/fromatCurrency";

function CartTable({ cartItems, subTotal }) {
  const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            alt={record.name}
            className="w-16 h-16 object-cover rounded"
          />
          <span className="font-medium">{record.name}</span>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
      render: (price) => (
        <span className="font-medium">{formatCurrency(price)}</span>
      ),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      render: (quantity) => <span className="font-medium">{quantity}</span>, // you can replace with input later
    },
    {
      title: "Subtotal",
      key: "subtotal",
      align: "center",
      render: () => (
        <span className="font-medium">{formatCurrency(subTotal)}</span>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: () => (
        <button className="text-secondary2 cursor-pointer hover:text-hoverButton">
          <HiX size={20} />
        </button>
      ),
    },
  ];
  return (
    <Table
      dataSource={cartItems.map((item) => ({
        key: item.id,
        name: item.products.name,
        price: item.products.price,
        quantity: item.quantity,
        image: item.products.image, // adjust to your actual field
      }))}
      columns={columns}
      pagination={false}
      bordered
      className="w-full"
    />
  );
}

export default CartTable;
