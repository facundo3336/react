import {
  doc,
  getFirestore,
  updateDoc,
  increment,
  writeBatch,
} from "firebase/firestore";

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

export async function updateStock(items) {
  const db = getFirestore();
  const batch = writeBatch(db);

  items.forEach((item) => {
    const docRef = doc(db, "items", item.productId);
    batch.update(docRef, { stock: increment(-item.quantity) });
  });

  await batch.commit();
}
