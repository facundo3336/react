export const Coupon = ({ coupon }) => {
  return (
    <tr>
      <td>{coupon.code}</td>
      <td>{coupon.amount}</td>
      <td>{coupon.type}</td>
    </tr>
  );
};
