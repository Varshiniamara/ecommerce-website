import { Navbar } from "../../components/Navbar";
import { useCart } from "../../context/cart-context";
import { HorizontalProductCard } from "../../components/HorizontalProductCard";
import { PriceDetails } from "../../components/PriceDetails";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { AddressForm } from "../../components/AddressForm";

export const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    street: "",
    city: "",
    zip: "",
    state: "",
  });

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center pt-6 pb-10 bg-gray-50 min-h-screen">
        {cart?.length > 0 ? (
          <>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">My Cart</h2>
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl px-4">
              <div className="flex flex-col gap-6 flex-grow">
                {/* Product List */}
                <div className="flex flex-col gap-4">
                  {cart.map((product) => (
                    <HorizontalProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Address Form Section */}
                <div className="mt-4">
                  <AddressForm address={address} setAddress={setAddress} />
                </div>
              </div>

              {/* Price Details Section */}
              <div className="lg:w-[400px] flex-shrink-0">
                <PriceDetails address={address} />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-2xl">Cart Empty 🛒</h2>
            <p
              onClick={() => navigate("/home")}
              className="text-rgb[rgb(20 83 45)] hover:cursor-pointer underline"
            >
              Click to add item to cart
            </p>
          </div>
        )}
      </main>
    </>
  );
};
