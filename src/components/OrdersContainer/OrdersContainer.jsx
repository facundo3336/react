import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Order } from "../Oder/Order";
import "./OrdersContainer.css";

export const OrdersContainer = ({}) => {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const db = getFirestore();

    const orderCollection = collection(db, "orders");
    const querySnapshot = await getDocs(orderCollection);
    const items = querySnapshot.docs.map((item) => {
      return {
        ...item.data(),
        id: item.id,
      };
    });

    setOrders(items);
  }, []);

  return (
    <table className="ordersTable">
      <tr>
        <th>Nombre</th>
        <th>Fecha</th>
        <th>Cantidad</th>
        <th>Total</th>
      </tr>
      {orders.map((order) => {
        return <Order key={order.id} order={order} />;
      })}
    </table>
  );
};
