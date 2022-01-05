import { useParams } from "react-router";
import { ItemDetail } from "../ItemDetail/ItemDetail";

import { useItem } from "../../hooks/item";

export const ItemDetailsContainer = ({}) => {
  const { id } = useParams();

  const item = useItem(id);

  if (item === null) {
    return (
      <div className="loadingContainer">
        <span>Cargando Detalles</span>
      </div>
    );
  }

  return <ItemDetail item={item} />;
};
