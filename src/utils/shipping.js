const SHIPPING_COSTS = {
  Uruguay: 5,
  Argentina: 15,
  Brasil: 25,
};

export function shippingCostFor(country) {
  return SHIPPING_COSTS[country];
}
