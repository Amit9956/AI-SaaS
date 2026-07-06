import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (data) => {
    try {
      setLoading(true);
      setError("");

      const response = await api.post("/auth/login", data);

      const token = response.data.access_token;

      if (!token) {
        throw new Error("Token not received from backend");
      }

      localStorage.setItem("token", token);

      login(null, token);

      alert("Login Successful");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.detail ||
          err.message ||
          "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8">

      <form
        onSubmit={handleSubmit(submit)}
        className="
          w-full
          max-w-md
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          p-6
          shadow-2xl
          sm:p-8
        "
      >
        {/* Heading */}
        <h1 className="mb-8 text-center text-3xl font-bold text-white sm:text-4xl">
          Login
        </h1>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg bg-red-500/20 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
          })}
          className="
            mb-2
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            p-4
            text-white
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500
          "
        />

        {errors.email && (
          <p className="mb-4 text-sm text-red-400">
            {errors.email.message}
          </p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "Password is required",
          })}
          className="
            mb-2
            w-full
            rounded-lg
            border
            border-slate-700
            bg-slate-800
            p-4
            text-white
            outline-none
            transition
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500
          "
        />

        {errors.password && (
          <p className="mb-4 text-sm text-red-400">
            {errors.password.message}
          </p>
        )}

        {/* Button */}
        <button
          disabled={loading}
          className="
            mt-5
            w-full
            rounded-lg
            bg-blue-600
            p-4
            font-semibold
            text-white
            transition
            hover:bg-blue-700
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Logging In..." : "Login"}
        </button>

        {/* Register */}
        <p className="mt-6 text-center text-sm text-slate-400 sm:text-base">
          Don't have an account?

          <Link
            to="/register"
            className="ml-2 font-medium text-blue-400 hover:text-blue-300"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;