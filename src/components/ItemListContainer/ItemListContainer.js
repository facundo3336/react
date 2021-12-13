import "./ItemListContainer.css";
import { ItemList } from "../ItemList/ItemList.js";
import { useEffect, useState } from "react";
import { getItems } from "../../data.js";
import { useParams } from "react-router";

export const ItemListContainer = ({}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getItems(id).then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="loadingContainer">
        <span>Cargando Productos</span>
      </div>
    );
  }

  return <ItemList items={items} />;
};
