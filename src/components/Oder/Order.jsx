import { Link } from "react-router-dom";
import { itemsCountFor } from "../../utils/order";
import "./Order.css";

export const Order = ({ order }) => {
  const itemsCount = itemsCountFor(order);

  return (
    <tr>
      <Link to={`/admin/orders/` + order.id}>
        <td>
          {order.shipping && order.shipping.name}{" "}
          {order.shipping && order.shipping.lastName}
        </td>
        <td>{order.date}</td>
        <td>{itemsCount}</td>
        <td>U$S{order.total}</td>
      </Link>
    </tr>
  );
};
