import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 mt-24 max-w-7xl mx-auto w-full px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toasts */}
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
