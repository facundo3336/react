import { useEffect, useState } from "react";
import { doc, getFirestore, getDoc } from "firebase/firestore";

export function useItem(id) {
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore();
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      setItem({
        ...docSnap.data(),
        id: docSnap.id,
      });
    }

    fetchData();
  }, [id]);

  return item;
}
