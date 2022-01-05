import { useState } from "react";
import { Button } from "../Button/Button";
import "./Checkout.css";
import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { shippingCostFor } from "../../utils/shipping";
import { CheckoutForm } from "../CheckoutForm/CheckoutForm";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { validateOrder } from "../../utils/validation";

export const Checkout = ({}) => {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    email: "",
    shipping: {
      name: "",
      lastName: "",
      address: "",
      city: "Montevideo",
      country: "Uruguay",
      phone: "",
      cost: shippingCostFor("Uruguay"),
    },
  });

  const cartTotal = cart.getTotal();
  const orderTotal = cartTotal + order.shipping.cost;

  async function handleClick() {
    try {
      validateOrder(order);

      const db = getFirestore();

      const docRef = await addDoc(collection(db, "orders"), {
        ...order,
        subTotal: cartTotal,
        total: orderTotal,
        date: new Date().toISOString(),
        lines: cart.lines.map((line) => {
          return {
            productId: line.item.id,
            quantity: line.quantity,
          };
        }),
      });
      if (docRef.id) {
        navigate("/thankyou");
        cart.clearLines();
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="checkoutContainer container">
      <CheckoutForm order={order} setOrder={setOrder} />
      <div className="checkoutTable">
        <table>
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>U$S {cartTotal}</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>U$S {order.shipping.cost}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>U$S {orderTotal}</td>
            </tr>
          </tbody>
        </table>
        <Button
          onClick={handleClick}
          className="confirmOrder"
          text="Confirmar compra"
        />
      </div>
    </div>
  );
};
