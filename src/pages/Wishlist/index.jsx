import React from "react";
import { Navbar } from "../../components/Navbar";
import { useWishlist } from "../../context/wishlist-context";
import { useCart } from "../../context/cart-context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Wishlist = () => {
  const { wishlist, wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();
  const navigate = useNavigate();

  const removeFromWishlist = (productId) => {
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id: productId } });
    toast.success("Removed from wishlist!");
  };

  const moveToCart = (product) => {
    cartDispatch({ type: "ADD_TO_CART", payload: { product } });
    wishlistDispatch({ type: "REMOVE_FROM_WISHLIST", payload: { id: product.id } });
    toast.success("Moved to cart!");
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-6 pb-10 bg-gray-50 min-h-screen">
        {wishlist?.length > 0 ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">My Wishlist ❤️</h2>
            <div className="w-full max-w-6xl px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlist.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Product Image */}
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <img
                        src={product.image || product.images?.[0] || "/assets/placeholder.jpg"}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                      {product.discount && (
                        <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                          {product.discount}
                        </span>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                        {product.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{product.price?.toLocaleString('en-IN')}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice?.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => moveToCart(product)}
                          className="flex-1 bg-emerald-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <span className="material-symbols-outlined text-xl">shopping_cart</span>
                          Move to Cart
                        </button>
                        <button
                          onClick={() => removeFromWishlist(product.id)}
                          className="bg-red-100 text-red-600 p-2 rounded-lg hover:bg-red-200 transition-colors duration-200"
                          title="Remove from wishlist"
                        >
                          <span className="material-symbols-outlined">delete</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center mt-20">
            <div className="mb-4">
              <span className="material-symbols-outlined text-9xl text-gray-300">favorite</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Your Wishlist is Empty</h2>
            <p className="text-gray-600 mb-6">Save your favorite items here!</p>
            <button
              onClick={() => navigate("/home")}
              className="bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </main>
    </>
  );
};


