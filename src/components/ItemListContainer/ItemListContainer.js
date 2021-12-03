import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList.js";
import { useEffect, useState } from "react";

export const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {});

  return <ItemList items={items} />;
};
