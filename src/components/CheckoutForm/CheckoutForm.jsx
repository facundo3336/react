import { useState } from "react";
import { shippingCostFor } from "utils/shipping";
import "./CheckoutForm.css";

export const CheckoutForm = ({ order, setOrder }) => {
  function handleBuyerInputChange(e, key) {
    setOrder({
      ...order,
      buyer: {
        ...order.buyer,
        [key]: e.target.value,
      },
    });
  }

  function handleCountryInputChange(e) {
    setOrder({
      ...order,
      shippingCost: shippingCostFor(e.target.value),
      buyer: {
        ...order.buyer,
        country: e.target.value,
      },
    });
  }

  return (
    <form>
      <h5>Información de Contacto</h5>
      <input
        onChange={(e) => handleBuyerInputChange(e, "email")}
        value={order.buyer.email}
        className="formControl"
        type="email"
        placeholder="Email"
      />
      <h5>Dirección de envío</h5>
      <div className="shippingAddress">
        <input
          onChange={(e) => handleBuyerInputChange(e, "name")}
          value={order.buyer.name}
          className="formControl"
          type="text"
          placeholder="First Name"
        />
        <input
          onChange={(e) => handleBuyerInputChange(e, "lastName")}
          value={order.buyer.lastName}
          className="formControl"
          type="text"
          placeholder="Last Name"
        />
        <input
          onChange={(e) => handleBuyerInputChange(e, "address")}
          value={order.buyer.address}
          className="formControl"
          type="text"
          placeholder="Address"
        />
        <input
          onChange={(e) => handleBuyerInputChange(e, "city")}
          value={order.buyer.city}
          className="formControl"
          type="text"
          placeholder="City"
        />
        <select
          onChange={(e) => handleCountryInputChange(e, "country")}
          value={order.buyer.country}
          className="formControl"
        >
          <option>Argentina</option>
          <option>Uruguay</option>
          <option>Brasil</option>
        </select>
        <input
          onChange={(e) => handleBuyerInputChange(e, "phone")}
          value={order.buyer.phone}
          className="formControl"
          type="text"
          placeholder="Phone"
        />
      </div>
    </form>
  );
};
