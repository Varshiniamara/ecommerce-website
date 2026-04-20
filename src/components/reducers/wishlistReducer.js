export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      if (state.wishlist.some((item) => item.id === payload.product.id)) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, payload.product],
      };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: state.wishlist.filter(
          (item) => item.id !== payload.id
        ),
      };

    default:
      return state;
  }
};


