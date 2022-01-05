import { useItem } from "../../hooks/item";

export const OrderLine = ({ line }) => {
  const item = useItem(line.productId);

  if (item === null) {
    return null;
  }

  return (
    <tr>
      <td>{item.title}</td>
      <td>{line.quantity}</td>
    </tr>
  );
};
