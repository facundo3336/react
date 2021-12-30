import "./ItemList.css";
import { Item } from "../Item/Item.js";

export const ItemList = ({ items }) => {
  return (
    <div className="itemsContainer">
      {items.map((i) => {
        return <Item key={i.id} item={i} />;
      })}
    </div>
  );
};
