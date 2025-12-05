export const getTotalCartAmount = (cart) =>
  cart?.reduce(
    (acc, cur) => acc + cur.price * (cur.quantity || 1),
    0
  ) || 0;
