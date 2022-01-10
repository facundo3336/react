import { useEffect, useState } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";

export function useOrder(id) {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore();
      const docRef = doc(db, "orders", id);
      const docSnap = await getDoc(docRef);
      setOrder({
        ...docSnap.data(),
        id: docSnap.id,
      });
    }

    fetchData();
  }, [id]);

  return order;
}
