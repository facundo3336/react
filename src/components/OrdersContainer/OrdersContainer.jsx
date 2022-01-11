import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Order } from "components/Oder/Order";
import "./OrdersContainer.css";

export const OrdersContainer = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, []);

  return (
    <div className="orderTableContainer">
      <table className="ordersTable">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Cantidad</th>
            <th>Total</th>
            <th>Ir a la orden</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => {
            return <Order key={order.id} order={order} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
