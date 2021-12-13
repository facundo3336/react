import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
  return (
    <div className="itemDetailContainer">
      <img className="detailsImg" src={item.pictureUrl} />
      <div className="detailsInfo">
        <h2>{item.title}</h2>
        <p className="detailsDescription">{item.description}</p>
        <span>{item.price}</span>
      </div>
    </div>
  );
};
