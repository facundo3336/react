import { CountButton } from "../itemCount/itemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const ItemDetail = ({ item }) => {
  const cartContext = useContext(CartContext);
  const [count, setCount] = useState(1);
  const [addToCartPressed, setAddToCartPressed] = useState(false);

  function addToCart() {
    setAddToCartPressed(true);
    cartContext.addItem(item, count);
  }

  function increaseCount() {
    if (count < item.stock) {
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
      <div
        className="itemDetailImage"
        style={{ backgroundImage: `url(${item.pictureUrl})` }}
      ></div>
      <div className="detailsInfo">
        <h2>{item.title}</h2>
        <p className="detailsDescription">{item.description}</p>
        <span className="itemPrice">U$S {item.price * count}</span>
        <div className="detailsCountButtonContainer">
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
          <Link to={"/cart"} className="detailsButtonContainer">
            {addToCartPressed && (
              <button className="detailsButton">Terminar compra</button>
            )}
          </Link>
        </div>

        <span className="pinkButton">Quedan {item.stock} unidades</span>
      </div>
    </div>
  );
};
