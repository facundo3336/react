import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList.js";
import { useEffect, useState } from "react";

import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({}) => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    const db = getFirestore();

    let itemsCollection = collection(db, "items");
    if (categoryId !== undefined) {
      itemsCollection = query(
        itemsCollection,
        where("categoryId", "==", categoryId)
      );
    }

    const querySnapshot = await getDocs(itemsCollection);
    const items = querySnapshot.docs.map((document) => {
      return {
        ...document.data(),
        id: document.id,
      };
    });
    setItems(items);
    setLoading(false);
  }, [categoryId]);

  if (loading) {
    return (
      <div className="loadingContainer">
        <span>Cargando Productos</span>
      </div>
    );
  }

  return <ItemList items={items} />;
};
