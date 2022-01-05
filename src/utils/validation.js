const ORDER_REQUIRED_FIELDS = ["email", "shippingCost"];
const BUYER_REQUIRED_FIELDS = [
  "name",
  "lastName",
  "address",
  "city",
  "country",
];

export function validateOrder(order) {
  BUYER_REQUIRED_FIELDS.forEach((field) => {
    if (order.buyer[field] === "") {
      throw new Error(`Falta campo obligatorio: ` + field);
    }
  });
  ORDER_REQUIRED_FIELDS.forEach((field) => {
    if (order[field] === "") {
      throw new Error(`Falta campo obligatorio: ` + field);
    }
  });
}
