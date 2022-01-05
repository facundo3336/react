const ORDER_REQUIRED_FIELDS = ["email"];
const SHIPPING_REQUIRED_FIELDS = [
  "name",
  "lastName",
  "address",
  "city",
  "country",
  "cost",
];

export function validateOrder(order) {
  SHIPPING_REQUIRED_FIELDS.forEach((field) => {
    if (order.shipping[field] === "") {
      throw new Error(`Falta campo obligatorio: ` + field);
    }
  });
  ORDER_REQUIRED_FIELDS.forEach((field) => {
    if (order[field] === "") {
      throw new Error(`Falta campo obligatorio: ` + field);
    }
  });
}
