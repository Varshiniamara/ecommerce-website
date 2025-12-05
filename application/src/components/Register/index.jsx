import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { userRegister } from "../../api/auth";
import { useAuth } from "../../context/login-context";

export const Register = () => {
  const { authDispatch } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await userRegister(name, email, password);

      // If your backend returns a token on register, store it
      if (data?.token || data?.access_token) {
        authDispatch({ type: "SET_TOKEN", payload: data });
        authDispatch({
          type: "SET_CREDENTIALS",
          payload: { email, password },
        });
        navigate("/home");
      } else {
        // Otherwise redirect to login
        navigate("/auth/login");
      }
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="bg-white shadow-lg rounded-xl w-[400px] p-8 flex flex-col gap-6 border border-gray-100"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Register
      </h2>

      {error && (
        <p className="text-red-500 text-sm text-center" aria-live="polite">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-400 text-white font-semibold py-3 rounded-lg hover:bg-green-500 active:scale-[0.98] transition-all duration-150"
      >
        Register
      </button>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/auth/login" className="text-green-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  );
};


