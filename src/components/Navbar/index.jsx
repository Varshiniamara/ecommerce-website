import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/login-context";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false);
  const { token, authDispatch } = useAuth();

  const onLoginClick = () => {
    if (token?.token || token?.access_token) {
      authDispatch({ type: "LOGOUT" });
      navigate("/auth/login");
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-gray-900/95 backdrop-blur-sm py-4 px-8 shadow-lg text-white">
      <div className="flex items-center gap-2 group cursor-pointer" onClick={() => navigate("/home")}>
        <div className="bg-gradient-to-tr from-emerald-400 to-cyan-500 p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <span className="material-symbols-outlined text-white text-2xl font-bold">shopping_bag</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-300">
          SHOP.IT
        </h1>
      </div>

      <nav className="flex items-center gap-8">
        <div
          onClick={() => navigate("/cart")}
          className="relative group cursor-pointer"
        >
          <span className="material-symbols-outlined text-3xl text-gray-300 group-hover:text-emerald-400 transition-colors duration-300">
            shopping_cart
          </span>
          {/* Optional: Add cart count badge here if available */}
        </div>

        <div
          onClick={() => navigate("/wishlist")}
          className="relative group cursor-pointer"
        >
          <span className="material-symbols-outlined text-3xl text-gray-300 group-hover:text-rose-500 transition-colors duration-300">
            favorite
          </span>
        </div>

        <div className="relative">
          <span
            onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)}
            className="material-symbols-outlined text-3xl text-gray-300 hover:text-white cursor-pointer transition-colors duration-300"
          >
            account_circle
          </span>

          {isAccountDropDownOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-white rounded-xl shadow-2xl py-2 border border-gray-100 transform origin-top-right transition-all duration-200 z-50">
              <button
                onClick={onLoginClick}
                className="w-full text-left px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-colors"
              >
                {token?.access_token ? "Logout" : "Login"}
              </button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
