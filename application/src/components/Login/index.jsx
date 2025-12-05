import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/login-context";
import { userLogin } from "../../api/auth";

export const Login = () => {
  const { authDispatch } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await userLogin(email, password);

      authDispatch({
        type: "SET_TOKEN",
        payload: data,
      });

      authDispatch({
        type: "SET_CREDENTIALS",
        payload: { email, password },
      });

      if (data?.token || data?.access_token) {
        navigate("/home");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="bg-white shadow-lg rounded-xl w-[400px] p-8 flex flex-col gap-6 border border-gray-100"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Login
      </h2>

      {error && (
        <p className="text-red-500 text-sm text-center" aria-live="polite">
          {error}
        </p>
      )}

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
        Login
      </button>

      <p className="text-center text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link to="/auth/register" className="text-green-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
};
