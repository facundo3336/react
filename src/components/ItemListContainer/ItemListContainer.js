import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList.js";
import { useEffect, useState } from "react";
import { getItems } from "../../data.js";

export const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      setItems(data);
    });
  }, []);

  return <ItemList items={items} />;
};
