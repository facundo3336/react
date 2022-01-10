import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="itemContainer">
      <div>
        <img alt="itemImage" className="itemImg" src={item.pictureUrl} />
        <h2>{item.title}</h2>
      </div>
      <p>{item.description}</p>
      <div className="itemDescription">
        <span>U$S {item.price}</span>
        <Link className="viewDetails" to={"/item/" + item.id}>
          Ver detalles
        </Link>
      </div>
    </div>
  );
};
