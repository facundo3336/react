import "./Item.css";

export const Item = ({ item }) => {
  return (
    <div className="itemContainer">
      <img className="itemImg" src={item.img} />
      <h2>{item.title}</h2>
      <span>{item.price}</span>
    </div>
  );
};
