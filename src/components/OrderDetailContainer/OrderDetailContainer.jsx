import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { OrderDetail } from "components/OrderDetail/OrderDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const OrderDetailContainer = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore();
      const docRef = doc(db, "orders", id);
      const docSnap = await getDoc(docRef);
      const item = {
        ...docSnap.data(),
        id: docSnap.id,
      };
      setOrder(item);
    }

    fetchData();
  }, [id]);

  if (order === null) {
    return (
      <div className="loadingContainer">
        <span>Cargando Detalles</span>
      </div>
    );
  }

  return (
    <div>
      <OrderDetail order={order} />
    </div>
  );
};
