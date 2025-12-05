export const findProductInCart = (cart, id) => 
  cart?.some(product => product.id === id) || false;
