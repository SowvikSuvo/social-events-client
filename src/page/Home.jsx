import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Banner from "../components/Banner";

const Home = () => {
  //   const [current, setCurrent] = useState(0);
  // Motion value for soft parallax on mouse movement

  //   const images = [
  //     "https://images.unsplash.com/photo-1569292567777-e5d61a759322?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167",

  //     "https://plus.unsplash.com/premium_photo-1664474839979-69a9cbd16032?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
  //     "https://plus.unsplash.com/premium_photo-1663115421938-4b41781a12cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  //     "https://plus.unsplash.com/premium_photo-1683140681865-9f901073f2a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  //   ];

  return (
    <div className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* ===== Banner Section ===== */}
      <Banner></Banner>
      {/* ===== Features Section ===== */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-300">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Create Events</h3>
            <p>Organize community service events easily and effectively.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Join Events</h3>
            <p>Discover and participate in events happening near you.</p>
          </motion.div>
          <motion.div
            className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
            <p>Keep track of the events you joined and contributed to.</p>
          </motion.div>
        </div>
      </section>

      {/* ===== Gallery Section ===== */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Event Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <motion.img
            src={`https://images.unsplash.com/photo-1569292567777-e5d61a759322?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167,`}
            alt={`Event `}
            className="rounded-2xl object-cover w-full h-64 cursor-pointer hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={`https://plus.unsplash.com/premium_photo-1664474839979-69a9cbd16032?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171,`}
            alt={`Event `}
            className="rounded-2xl object-cover w-full h-64 cursor-pointer hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={`https://plus.unsplash.com/premium_photo-1663115421938-4b41781a12cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170,`}
            alt={`Event `}
            className="rounded-2xl object-cover w-full h-64 cursor-pointer hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src={`https://plus.unsplash.com/premium_photo-1683140681865-9f901073f2a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170,`}
            alt={`Event `}
            className="rounded-2xl object-cover w-full h-64 cursor-pointer hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </section>

      {/* ===== Newsletter Section ===== */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-6">
          Subscribe to Newsletter
        </h2>
        <p className="text-center mb-8 text-gray-700 dark:text-gray-200">
          Get the latest updates about upcoming social events in your area.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-md rounded-full px-6 py-3 dark:bg-gray-900 dark:border-gray-700"
          />
          <button className="btn btn-primary rounded-full px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
