import { useState } from "react";
import { Button } from "components/Button/Button";
import "./Checkout.css";
import { CartContext } from "Context/CartContext";
import { useContext } from "react";
import { shippingCostFor } from "utils/shipping";
import { CheckoutForm } from "components/CheckoutForm/CheckoutForm";
import {
  collection,
  addDoc,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { validateOrder } from "../../utils/validation";
import { updateStock } from "../../utils/order";

export const Checkout = () => {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  const [order, setOrder] = useState({
    shippingCost: shippingCostFor("Uruguay"),
    buyer: {
      name: "",
      lastName: "",
      email: "",
      address: "",
      city: "Montevideo",
      country: "Uruguay",
      phone: "",
    },
  });

  const cartTotal = cart.getTotal();
  const orderTotal = cartTotal + order.shippingCost;

  async function handleClick() {
    try {
      validateOrder(order);

      const db = getFirestore();

      const items = cart.lines.map((line) => {
        return {
          name: line.item.title,
          price: line.item.price,
          productId: line.item.id,
          quantity: line.quantity,
        };
      });
      const docRef = await addDoc(collection(db, "orders"), {
        ...order,
        subTotal: cartTotal,
        total: orderTotal,
        date: Timestamp.fromDate(new Date()),
        items,
      });
      if (docRef.id) {
        updateStock(items);
        navigate(`/thankyou/${docRef.id}`);

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
              <td>U$S {order.shippingCost}</td>
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
