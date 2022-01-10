export const getDiscount = (coupon, total) => {
  if (coupon.type === "fixed") {
    return Math.min(coupon.amount, total);
  }

  return (total * coupon.amount) / 100;
};
