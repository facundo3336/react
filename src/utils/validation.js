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

const PRODUCT_REQUIRED_FIELDS = [
  "name",
  "price",
  "stock",
  "description",
  "pictureUrl",
  "categoryId",
];

export function validateProduct(product) {
  PRODUCT_REQUIRED_FIELDS.forEach((field) => {
    if (product[field] === "") {
      throw new Error(`Falta campo obligatorio: ` + field);
    }
  });
}

const COUPON_REQUIRED_FIELDS = ["code", "amount", "type"];

export function validateCoupon(coupon) {
  COUPON_REQUIRED_FIELDS.forEach((field) => {
    if (coupon[field] === "") {
      throw new Error(`Falta campo obligatorio: ` + field);
    }
  });
}
