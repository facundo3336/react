import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItem } from "../../data";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailsContainer = ({}) => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem(id).then((response) => {
      setItem(response);
    });
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
