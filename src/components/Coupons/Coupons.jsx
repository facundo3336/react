import { Coupon } from "components/Coupon/Coupon";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./Coupons.css";

export const Coupons = ({}) => {
  const [coupons, setCoupons] = useState([]);

  useEffect(async () => {
    const db = getFirestore();

    const orderCollection = collection(db, "coupons");
    const querySnapshot = await getDocs(orderCollection);
    const items = querySnapshot.docs.map((item) => {
      return {
        ...item.data(),
        id: item.id,
      };
    });

    setCoupons(items);
  }, []);

  return (
    <table className="couponsTable">
      <caption>Cupones</caption>
      <thead>
        <tr>
          <th>Codigo</th>
          <th>Monto</th>
          <th>Tipo</th>
        </tr>
      </thead>
      <tbody>
        {coupons.map((c) => {
          return <Coupon key={c.id} coupon={c} />;
        })}
      </tbody>
    </table>
  );
};
