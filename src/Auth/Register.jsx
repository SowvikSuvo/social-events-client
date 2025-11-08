import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, email, photo, password);

    // Password validation
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    setError("");
    // TODO: Firebase Register Logic Here

    Swal.fire({
      title: "Registration Successful!",
      text: "Welcome to Social Events Platform 🎉",
      icon: "success",
      confirmButtonColor: "#f43f5e",
    });

    form.reset();
  };
  const handleGoogleLogin = () => {};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            Create Your Account
          </h1>
          <p className="text-gray-500 mt-2 text-sm dark:text-gray-400">
            Join the movement — organize and attend social events easily.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="input input-bordered w-full rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="input input-bordered w-full rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              className="input input-bordered w-full rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="h-px bg-gray-300 flex-grow dark:bg-gray-700"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-300 flex-grow dark:bg-gray-700"></div>
        </div>
        <button
          onClick={handleGoogleLogin}
          className="btn w-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 rounded-xl shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Redirect to Login */}
        <p className="text-center text-sm mt-4 text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-500 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
