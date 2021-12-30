import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { doc, getFirestore, getDoc } from "firebase/firestore";

export const ItemDetailsContainer = ({}) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(async () => {
    const db = getFirestore();
    const docRef = doc(db, "items", id);
    const docSnap = await getDoc(docRef);
    const item = {
      ...docSnap.data(),
      id: docSnap.id,
    };
    setItem(item);
  }, []);

  if (item === null) {
    return (
      <div className="loadingContainer">
        <span>Cargando Detalles</span>
      </div>
    );
  }

  return <ItemDetail item={item} />;
};
