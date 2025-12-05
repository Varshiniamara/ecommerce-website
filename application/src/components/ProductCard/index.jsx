import { useCart } from "../../context/cart-context";
import { findProductInCart } from "../../utils/findProductInCart";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../context/wishlist-context";
import { toast } from "react-toastify";

import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  const isProductInCart = findProductInCart(cart, product.id);
  const isInWishlist = wishlist?.some((item) => item.id === product.id);

  const onCartClick = (e) => {
    e.stopPropagation();
    if (!isProductInCart) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: { product },
      });
      toast.success("Added to cart!");
    } else {
      navigate("/cart");
    }
  };

  const onWishlistClick = (e) => {
    e.stopPropagation();
    if (isInWishlist) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: { id: product.id },
      });
      toast.info("Removed from wishlist");
    } else {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: { product },
      });
      toast.success("Added to wishlist ❤️");
    }
  };

  return (
    <div className="product-card shadow-sm">
      <div className="card-image-container">
        <img
          className="card-image"
          src={product.image || (product.images && product.images[0])}
          alt={product.title || "product"}
        />
        <button
          className="wishlist-btn"
          onClick={onWishlistClick}
          title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
        >
          <span className={`material-symbols-outlined wishlist-icon ${isInWishlist ? "active" : ""}`}>
            favorite
          </span>
        </button>
      </div>

      <div className="card-details">
        <div className="card-title">{product.title}</div>

        <div className="card-price-container">
          <span className="current-price">₹{product.price.toLocaleString('en-IN')}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice.toLocaleString('en-IN')}</span>
          )}
          {product.discount && (
            <span className="discount-badge">{product.discount}</span>
          )}
        </div>

        <button
          onClick={onCartClick}
          className={`add-to-cart-btn ${isProductInCart ? "in-cart" : ""}`}
        >
          <span className="material-symbols-outlined">
            {isProductInCart ? "shopping_cart_checkout" : "shopping_cart"}
          </span>
          {isProductInCart ? "Go to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};
