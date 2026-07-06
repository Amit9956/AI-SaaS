import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const submit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await api.post("/auth/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      alert("Registration Successful");

      navigate("/login");
    } catch (err) {
      console.log(err);

      setError(
        err.response?.data?.detail ||
          "Registration Failed"
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
          Create Account
        </h1>

        {/* Error */}
        {error && (
          <div className="mb-5 rounded-lg bg-red-500/20 p-3 text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Full Name */}
        <input
          {...register("name")}
          placeholder="Full Name"
          className="
            mb-4
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

        {/* Email */}
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="
            mb-4
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

        {/* Password */}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="
            mb-4
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

        {/* Confirm Password */}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="
            mb-6
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

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="
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
          {loading ? "Creating..." : "Create Account"}
        </button>

        {/* Login */}
        <p className="mt-6 text-center text-sm text-slate-400 sm:text-base">
          Already have an account?

          <Link
            to="/login"
            className="ml-2 font-medium text-blue-400 hover:text-blue-300"
          >
            Login
          </Link>
        </p>
      </form>

    </div>
  );
}

export default Register;