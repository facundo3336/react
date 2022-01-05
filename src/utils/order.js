import { doc, getFirestore, updateDoc } from "firebase/firestore";

export const itemsCountFor = (order) => {
  if (order.lines === undefined) {
    return 0;
  }
  return order.lines.reduce((count, line) => {
    count = count + line.quantity;
    return count;
  }, 0);
};

export function updateOrder(id, body) {
  const db = getFirestore();
  const ref = doc(db, "orders", id);
  updateDoc(ref, body);
}
