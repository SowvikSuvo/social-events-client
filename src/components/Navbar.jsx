import React, { useContext, useEffect, useState } from "react";
import { FaStudiovinari } from "react-icons/fa";
import {
  MdUpcoming,
  MdManageAccounts,
  MdOutlineJoinInner,
  MdDashboard,
} from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { IoCreateSharp, IoLogIn } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme to <html> and persist in localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleSignOut = async () => {
    await signOutUser();
  };

  return (
    <div className="fixed top-0 z-50 w-full bg-base-100 shadow">
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* LEFT */}
        <div className="navbar-start">
          <Link to="/" className="flex items-center gap-1 text-xl font-bold">
            <FaStudiovinari />
            <span className="text-pink-500">
              Kind<span className="text-purple-500">Earth</span>
            </span>
          </Link>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-6">
            <NavLink to="/" className="flex items-center gap-1">
              <GoHomeFill /> Home
            </NavLink>

            <NavLink to="/upcoming-events" className="flex items-center gap-1">
              <MdUpcoming /> Upcoming Events
            </NavLink>

            {user && (
              <NavLink to="/dashboard" className="flex items-center gap-1">
                <MdDashboard /> Dashboard
              </NavLink>
            )}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3">
          {/* THEME TOGGLE */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={handleThemeToggle}
              checked={theme === "dark"}
            />

            {/* Sun */}
            <svg
              className="swap-off h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5 12a7 7 0 1014 0 7 7 0 00-14 0z" />
            </svg>

            {/* Moon */}
            <svg
              className="swap-on h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          </label>

          {user ? (
            <>
              {/* User Dropdown */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <img
                    className="rounded-full"
                    src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                    alt="user"
                  />
                </label>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-box w-52 p-2 shadow"
                >
                  <li className="text-center border-b pb-2">
                    <p className="font-bold">{user.displayName}</p>
                    <p className="text-xs">{user.email}</p>
                  </li>

                  <li>
                    <NavLink to="/dashboard/create-event">
                      <IoCreateSharp /> Create Event
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/manage-event">
                      <MdManageAccounts /> Manage Events
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/dashboard/joined-event">
                      <MdOutlineJoinInner /> Joined Events
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleSignOut}
                className="btn btn-sm bg-red-500 text-white"
              >
                <TbLogout2 /> Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-sm bg-gradient-to-r from-pink-500 to-blue-600 text-white"
            >
              <IoLogIn /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
