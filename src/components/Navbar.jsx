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
import { FcAbout } from "react-icons/fc";
import { IoIosContacts } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Apply theme to html and persist
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleSignOut = async () => {
    await signOutUser();
  };

  // Reusable NavLink with active styling
  const MenuLink = ({ to, icon: Icon, label }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-1 px-3 py-2 rounded-full transition-colors ${
          isActive
            ? "bg-pink-500 text-white font-semibold"
            : "text-gray-700 hover:text-pink-500"
        }`
      }
      onClick={() => setMobileMenuOpen(false)} // close mobile menu on click
    >
      {Icon && <Icon />} {label}
    </NavLink>
  );

  return (
    <nav className="fixed top-0 z-50 w-full bg-base-100 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <FaStudiovinari />
          <span className="text-pink-500">
            Kind<span className="text-purple-500">Earth</span>
          </span>
        </Link>

        {/* MENU - LARGE SCREEN */}
        <ul className="hidden md:flex gap-4 mx-auto text-lg font-medium">
          <MenuLink to="/" icon={GoHomeFill} label="Home" />
          <MenuLink to="/upcoming-events" icon={MdUpcoming} label="Upcoming" />
          {user && (
            <MenuLink to="/dashboard" icon={MdDashboard} label="Dashboard" />
          )}
          <MenuLink to="/about-us" icon={FcAbout} label="About" />
          <MenuLink to="/contact-us" icon={IoIosContacts} label="Contact" />
        </ul>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-3">
          {/* THEME TOGGLE */}
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
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

          {/* USER LOGIN/AVATAR */}
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <img
                  src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                  alt="user"
                  className="rounded-full w-10 h-10"
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
                  <MenuLink
                    to="/dashboard/create-event"
                    icon={IoCreateSharp}
                    label="Create Event"
                  />
                </li>
                <li>
                  <MenuLink
                    to="/dashboard/manage-event"
                    icon={MdManageAccounts}
                    label="Manage Events"
                  />
                </li>
                <li>
                  <MenuLink
                    to="/dashboard/joined-event"
                    icon={MdOutlineJoinInner}
                    label="Joined Events"
                  />
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm btn-error w-full mt-2 flex items-center justify-center gap-1"
                  >
                    <TbLogout2 /> Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-sm bg-gradient-to-r from-pink-500 to-blue-600 text-white flex items-center gap-1"
            >
              <IoLogIn /> Login
            </Link>
          )}

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden btn btn-ghost btn-circle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <ul className="md:hidden menu bg-base-100 px-4 py-4 gap-2">
          <MenuLink to="/" icon={GoHomeFill} label="Home" />
          <MenuLink to="/upcoming-events" icon={MdUpcoming} label="Upcoming" />
          {user && (
            <MenuLink to="/dashboard" icon={MdDashboard} label="Dashboard" />
          )}
          <MenuLink to="/about-us" icon={FcAbout} label="About" />
          <MenuLink to="/contact-us" icon={IoIosContacts} label="Contact" />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
