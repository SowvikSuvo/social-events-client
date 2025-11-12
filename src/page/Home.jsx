import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "../components/Banner";
import Features from "../components/Feature";

const Home = () => {
  return (
    <div className="font-sans bg-white text-black dark:bg-gray-900 dark:text-gray-100">
      {/* ===== Banner Section ===== */}
      <Banner></Banner>
      {/* ===== Features Section ===== */}
      <Features></Features>

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
      <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-pink-100 via-white to-blue-100 rounded-3xl shadow-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Stay Updated!
          </h2>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest updates about
            upcoming social events in your area. Join our community today!
          </p>
        </motion.div>

        {/* Subscription Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-96 px-6 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:outline-none shadow-sm text-black"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
            Subscribe
          </button>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          No spam, only important updates about community events.
        </motion.p>
      </section>
    </div>
  );
};

export default Home;
