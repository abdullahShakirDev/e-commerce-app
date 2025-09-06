import { InputNumber, Table } from "antd";
import { HiX } from "react-icons/hi";
import formatCurrency from "../../utils/fromatCurrency";
import { useDeleteItemCart } from "./useDeleteItemCart";
import { useUpdateCartItem } from "./useUpdateItemQuantity";

function CartTable({ cartItems }) {
  const { deleteItemCart } = useDeleteItemCart();
  const { updateCartItem } = useUpdateCartItem();

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
      render: (quantity, record) => {
        return (
          <InputNumber
            type="number"
            className="font-medium"
            min={1}
            value={quantity}
            onChange={(newQuantity) => {
              updateCartItem({
                cartItemId: record.key,
                newQuantity,
                productPrice: record.price,
                userId: record.userId, // important for invalidateQueries
              });
            }}
          />
        );
      },
    },
    {
      title: "Subtotal",
      key: "subtotal",
      align: "center",
      render: (_, record) => (
        <span className="font-medium w-40">
          {formatCurrency(record.totalPrice)}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <button className="text-secondary2 cursor-pointer hover:text-hoverButton">
          <HiX size={20} onClick={() => deleteItemCart(record.key)} />
        </button>
      ),
    },
  ];
  return (
    <Table
      dataSource={cartItems?.map((item) => ({
        key: item?.id,
        name: item?.products?.name,
        price: item?.products?.price,
        quantity: item?.quantity,
        image: item?.products?.image, // adjust to your actual field
        totalPrice: item?.totalPrice,
      }))}
      columns={columns}
      pagination={false}
      bordered
      className="w-full"
    />
  );
}

export default CartTable;
