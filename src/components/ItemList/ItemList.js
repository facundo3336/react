import "./ItemList.css";
import { Item } from "../Item/Item.js";

export const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((i) => {
        return <Item key={i.id} item={i} />;
      })}
    </div>
  );
};
