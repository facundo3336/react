import "./Item.css";

export const Item = ({ item }) => {
  return (
    <div className="itemContainer">
      <img className="itemImg" src={item.pictureUrl} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <span>{item.price}</span>
      <a className="viewDetails">Ver detalles</a>
    </div>
  );
};
