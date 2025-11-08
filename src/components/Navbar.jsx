import React, { use } from "react";

import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import { AuthContext } from "../context/AuthContext";

import { Link, NavLink } from "react-router";
// import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar py-0 min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[9999] mt-1 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>
                <GoHomeFill />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/upcoming-event"}>Upcoming Events</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1 text-xl font-bold">
          <LuRotate3D /> KindEarth
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <NavLink to={"/"}>
              <GoHomeFill />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to={"/upcoming-event"}>Upcoming Events</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 rounded-full border-2 border-gray-300">
                <img
                  alt="User avatar"
                  src={
                    user?.photoURL ||
                    "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-9999 mt-1 w-52 p-2 shadow"
            >
              <li className="pb-3 border-b border-b-gray-200 text-center">
                <span className="text-sm font-bold">{user.displayName}</span>
                <span className="text-xs">{user.email}</span>
              </li>

              <li>
                <Link
                  to="/create-event"
                  className="btn btn-xs w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                >
                  Create Event
                </Link>
              </li>
              <li>
                <Link
                  to="/manage-event"
                  className="btn btn-xs w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                >
                  Manage Events
                </Link>
              </li>
              <li>
                <Link
                  to="/join-event"
                  className="btn btn-xs w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white"
                >
                  Joined Events
                </Link>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSignOut();
                  }}
                  className="btn btn-xs w-full bg-gradient-to-r from-pink-500 to-red-500 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className="btn rounded-full border-gray-300 btn-sm bg-gradient-to-r from-pink-500 to-blue-600 text-white"
          >
            <IoLogIn /> Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
