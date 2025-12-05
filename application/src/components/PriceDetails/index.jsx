import { useCart } from "../../context/cart-context";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const PriceDetails = ({ address }) => {
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();
  const totalCartAmount = getTotalCartAmount(cart);
  const deliveryCharge = 49;

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleOrderSuccess = async (response) => {
    try {
      const orderData = {
        items: cart,
        amount: totalCartAmount + deliveryCharge,
        address: address,
        paymentId: response.razorpay_payment_id,
        date: new Date().toISOString(),
      };

      await axios.post("http://localhost:3003/orders", orderData);

      cartDispatch({ type: "CLEAR_CART" });
      alert(`Order Placed Successfully! Payment ID: ${response.razorpay_payment_id}`);
      navigate("/home");
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Payment successful but failed to place order. Please contact support.");
    }
  };

  const displayRazorpay = async () => {
    // Validate Address
    if (!address || !address.name || !address.street || !address.city || !address.zip || !address.mobile) {
      alert("Please fill in all address details before placing the order.");
      return;
    }

    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Please check your connection.");
      return;
    }

    const options = {
      key: "rzp_test_VSdp7X3K39GwBK",
      amount: (totalCartAmount + deliveryCharge) * 100,
      currency: "INR",
      name: "Shop It",
      description: "Thank you for shopping with us.",
      image: "https://yourstorelogo.com/logo.png",
      handler: handleOrderSuccess,
      prefill: {
        name: address.name,
        contact: address.mobile,
      },
      theme: {
        color: "#0f9d58",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="w-full bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <p className="text-xl font-bold border-b pb-4 mb-4 text-gray-800">Price Details</p>

      <div className="flex flex-col gap-4 border-b pb-4 mb-4">
        <div className="flex justify-between text-gray-600">
          <p>Price ({cart?.length || 0} items)</p>
          <p>₹{totalCartAmount.toLocaleString('en-IN')}</p>
        </div>

        <div className="flex justify-between text-gray-600">
          <p>Delivery Charge</p>
          <p>₹{deliveryCharge}</p>
        </div>
      </div>

      <div className="flex justify-between font-bold text-lg text-gray-900 mb-6">
        <p>Total Amount</p>
        <p>₹{(totalCartAmount + deliveryCharge).toLocaleString('en-IN')}</p>
      </div>

      <button
        onClick={displayRazorpay}
        className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors shadow-lg"
      >
        PLACE ORDER
      </button>
    </div>
  );
};
