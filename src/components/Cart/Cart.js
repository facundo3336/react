import "./Cart.css";

import { useContext } from "react";
import { CartContext } from "Context/CartContext";
import { Link } from "react-router-dom";
import { CartPricing } from "components/CartPricing/CartPricing";

export const Cart = () => {
  const cartContext = useContext(CartContext);

  if (cartContext.lines.length === 0) {
    return (
      <div className="continueShoppingPage">
        <Link className="continueShoppingContainer" to={"/"}>
          <button className="continueShopping">Seguir comprando</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cartContainer">
      <div>
        {cartContext.lines.map((line) => {
          function handleClick() {
            cartContext.removeItem(line.item.id);
          }
          return (
            <div key={line.item.id} className="product">
              <img
                alt="itemImage"
                className="productImg"
                src={line.item.pictureUrl}
              />

              <div className="productDescription">
                <h2>{line.item.title}</h2>
                <span className="productPrice">U$S {line.item.price}</span>
                <span>Cantidad: {line.quantity}</span>
                <button onClick={handleClick} className="removeButton">
                  Eliminar
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <CartPricing />
        <div style={{ textAlign: "center" }}>
          <Link className="checkout" to="/checkout">
            Ir al checkout
          </Link>
        </div>
      </div>
    </div>
  );
};
