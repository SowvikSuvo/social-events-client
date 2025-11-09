import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto ">
        <Navbar></Navbar>
        <div className="mt-4 min-h-screen">
          <Outlet></Outlet>
        </div>
        <div className="">
          <Footer></Footer>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
