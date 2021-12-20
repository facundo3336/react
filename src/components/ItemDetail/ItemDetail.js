import { CountButton } from "../itemCount/itemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ item }) => {
  const cartContext = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [addToCartPressed, setAddToCartPressed] = useState(false);
  const stock = 5;

  function addToCart() {
    setAddToCartPressed(true);
    cartContext.addItem(item, count);
  }

  function increaseCount() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function decreaseCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="itemDetailContainer">
      <img className="detailsImg" src={item.pictureUrl} />
      <div className="detailsInfo">
        <h2>{item.title}</h2>
        <p className="detailsDescription">{item.description}</p>
        <Link className="itemPrice" to={"/"}>
          <span>{item.price * count}</span>
        </Link>
        {!addToCartPressed && (
          <CountButton
            increase={increaseCount}
            decrease={decreaseCount}
            count={count}
          />
        )}
        {!addToCartPressed && (
          <button onClick={addToCart} className="detailsButton">
            Agregar al carrito
          </button>
        )}
        <Link to={"/cart"}>
          {addToCartPressed && (
            <button className="detailsButton">Terminar compra</button>
          )}
        </Link>
      </div>
    </div>
  );
};
