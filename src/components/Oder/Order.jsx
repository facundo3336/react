import { Link } from "react-router-dom";
import { itemsCountFor } from "utils/order";
import "./Order.css";

export const Order = ({ order }) => {
  const itemsCount = itemsCountFor(order);

  return (
    <tr>
      <Link to={`/admin/orders/` + order.id}>
        <td>
          {order.buyer && order.buyer.name}{" "}
          {order.buyer && order.buyer.lastName}
        </td>
        <td>{order.date.toDate().toISOString()}</td>
        <td>{itemsCount}</td>
        <td>U$S{order.total}</td>
      </Link>
    </tr>
  );
};
