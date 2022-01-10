import { Button } from "components/Button/Button";
import { CartContext } from "Context/CartContext";
import { useContext, useState } from "react";
import { getDiscount } from "utils/coupons";
import { useCoupon } from "hooks/useCoupon";

export const CartPricing = () => {
  const cartContext = useContext(CartContext);
  const [cuoponCode, setCouponCode] = useState("");
  const [couponInput, setCouponInput] = useState("");
  const coupon = useCoupon(cuoponCode);

  function handleChange(e) {
    setCouponInput(e.target.value);
  }

  async function handleClick() {
    setCouponCode(couponInput);
  }

  const total = cartContext.getTotal();
  const discount = coupon ? getDiscount(coupon, total) : 0;

  return (
    <div>
      <div className="totalContainer">
        <span>Total: U$S {total}</span>
        <span>Descuento: U$S{discount}</span>
        <span>Total con descuento: U$S{(total - discount).toFixed(2)}</span>
      </div>
      <div>
        <input onChange={handleChange} value={couponInput} type="text" />
        <Button onClick={handleClick} text="Aplicar Cupon" />
      </div>
    </div>
  );
};
