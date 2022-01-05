import { useState } from "react";
import { shippingCostFor } from "../../utils/shipping";
import "./CheckoutForm.css";

export const CheckoutForm = ({ order, setOrder }) => {
  function handleEmailInputChange(e) {
    setOrder({
      ...order,
      email: e.target.value,
    });
  }

  function handleShippingInputChange(e, key) {
    setOrder({
      ...order,
      shipping: {
        ...order.shipping,
        [key]: e.target.value,
      },
    });
  }

  function handleCountryInputChange(e) {
    setOrder({
      ...order,
      shipping: {
        ...order.shipping,
        country: e.target.value,
        cost: shippingCostFor(e.target.value),
      },
    });
  }

  return (
    <form>
      <h5>Información de Contacto</h5>
      <input
        onChange={handleEmailInputChange}
        value={order.email}
        className="formControl"
        type="email"
        placeholder="Email"
      />
      <h5>Dirección de envío</h5>
      <div className="shippingAddress">
        <input
          onChange={(e) => handleShippingInputChange(e, "name")}
          value={order.shipping.name}
          className="formControl"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={(e) => handleShippingInputChange(e, "lastName")}
          value={order.shipping.lastName}
          className="formControl"
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={(e) => handleShippingInputChange(e, "address")}
          value={order.shipping.address}
          className="formControl"
          type="text"
          placeholder="Address"
        />
        <input
          onChange={(e) => handleShippingInputChange(e, "city")}
          value={order.shipping.city}
          className="formControl"
          type="text"
          placeholder="City"
        />
        <select
          onChange={(e) => handleCountryInputChange(e, "country")}
          value={order.shipping.country}
          className="formControl"
        >
          <option>Argentina</option>
          <option>Uruguay</option>
          <option>Brasil</option>
        </select>
        <input
          onChange={(e) => handleShippingInputChange(e, "phone")}
          value={order.shipping.phone}
          className="formControl"
          type="text"
          placeholder="Phone"
        />
      </div>
    </form>
  );
};
