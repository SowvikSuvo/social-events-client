import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "You have been login Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login with google Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen rounded-2xl bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-100 dark:border-gray-700"
      >
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-600">
            KindEarth Login
          </h1>
          <p className="text-gray-500 mt-2 text-sm dark:text-gray-400">
            Welcome back! Please login to your account.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
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

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-0.5"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-2 my-6">
          <div className="h-px bg-gray-300 flex-grow dark:bg-gray-700"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="h-px bg-gray-300 flex-grow dark:bg-gray-700"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="btn w-full border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 rounded-xl shadow-sm dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 flex items-center justify-center gap-2"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm mt-6 text-gray-500 dark:text-gray-400">
          Don’t have an account?{" "}
          <Link
            to="/auth/register"
            className="text-pink-500 font-semibold hover:underline"
          >
            Register now
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
