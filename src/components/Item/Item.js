import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="itemContainer">
      <img className="itemImg" src={item.pictureUrl} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <span>{item.price}</span>
      <a className="viewDetails">
        <Link className="viewDetailsLink" to={"/item/" + item.id}>
          Ver detalles
        </Link>
      </a>
    </div>
  );
};
