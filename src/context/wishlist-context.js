import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "../components/reducers/wishlistReducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const initialWishlist = (() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist")) || [];
    } catch {
      return [];
    }
  })();

  const initialState = {
    wishlist: initialWishlist,
  };

  const [{ wishlist }, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };


