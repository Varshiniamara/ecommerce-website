import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { toast } from "react-toastify";

export const HorizontalProductCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const onRemoveClick = (product) => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: product.id },
    });
    toast.success("Removed from cart!");
  };

  const moveToWishlist = (product) => {
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: { product },
    });
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: { id: product.id },
    });
    toast.success("Moved to wishlist!");
  };

  return (
    <div className="card-horizontal d-flex shadow">
      <div className="card-hori-image-container relative">
        <img
          className="card-image"
          src={product?.images?.[0] || "/assets/placeholder.jpg"}  // ✅ fixed here
          alt={product?.title || "Product"}
        />
      </div>

      <div className="card-details d-flex direction-column">
        <div className="card-des">{product?.title}</div>

        <div className="card-description">
          <p className="card-price">Rs. {product?.price}</p>
        </div>

        <div className="quantity-container d-flex gap">
          <p className="q-title">Quantity:</p>
          <div className="count-container d-flex align-center gap">
            <button
              className="count"
              onClick={() =>
                cartDispatch({
                  type: "DECREASE_QUANTITY",
                  payload: { id: product.id },
                })
              }
            >
              -
            </button>
            <span className="count-value">{product.quantity || 1}</span>
            <button
              className="count"
              onClick={() =>
                cartDispatch({
                  type: "INCREASE_QUANTITY",
                  payload: { id: product.id },
                })
              }
            >
              +
            </button>
          </div>
        </div>

        <div className="cta-btn d-flex gap">
          <button
            onClick={() => onRemoveClick(product)}
            className="button hori-btn btn-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
          >
            Remove From Cart
          </button>

          <button
            onClick={() => moveToWishlist(product)}
            className="button hori-btn btn-outline-primary btn-icon d-flex align-center justify-center gap cursor btn-margin"
          >
            Move to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};
