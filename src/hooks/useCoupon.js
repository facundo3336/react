import { useEffect, useState } from "react";
import {
  query,
  where,
  getDocs,
  collection,
  getFirestore,
} from "firebase/firestore";

export function useCoupon(code) {
  const [coupon, setCoupon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const db = getFirestore();
      const q = query(collection(db, "coupons"), where("code", "==", code));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.docs.length === 0) {
        setCoupon(null);
      } else {
        setCoupon({
          ...querySnapshot.docs[0].data(),
          id: querySnapshot.docs[0].id,
        });
      }
    }

    fetchData();
  }, [code]);

  return coupon;
}
