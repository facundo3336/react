import { Button } from "components/Button/Button";
import { useState } from "react";
import { validateCoupon } from "utils/validation";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const CreateCoupon = ({}) => {
  const navigate = useNavigate();

  const [coupon, setCoupon] = useState({
    code: "",
    amount: 0,
    type: "fixed",
  });

  function handleChange(e, key) {
    setCoupon({
      ...coupon,
      [key]: e.target.value,
    });
  }

  async function handleClick() {
    try {
      validateCoupon(coupon);

      const db = getFirestore();

      const docRef = await addDoc(collection(db, "coupons"), coupon);
      console.log(docRef);
      if (docRef.id) {
        navigate(`/admin/coupons`);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className="createProductForm">
      <label htmlFor="code">Codigo del cupon: </label>
      <input
        onChange={(e) => handleChange(e, "code")}
        value={coupon.code}
        type="text"
        placeholder="123"
        name="code"
      />
      <br />
      <label htmlFor="amount">Monto: </label>
      <input
        onChange={(e) => handleChange(e, "amount")}
        value={coupon.amount}
        type="number"
        placeholder="25"
        name="amount"
      />
      <br />
      <label htmlFor="type">Tipo de cupon: </label>
      <select value={coupon.type} onChange={(e) => handleChange(e, "type")}>
        <option>Fixed</option>
        <option>Percentage</option>
      </select>

      <Button text={"Crear Cupon"} onClick={handleClick} />
    </div>
  );
};
