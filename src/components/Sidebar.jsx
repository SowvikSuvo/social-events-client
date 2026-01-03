import { useState } from "react";
import { NavLink } from "react-router";
import {
  MdOutlineJoinInner,
  MdDashboard,
  MdManageAccounts,
} from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { to: "/dashboard", icon: MdDashboard, label: "Dashboard Home", end: true },
    {
      to: "/dashboard/create-event",
      icon: IoCreateSharp,
      label: "Create Event",
    },
    {
      to: "/dashboard/joined-event",
      icon: MdOutlineJoinInner,
      label: "Joined Events",
    },
    {
      to: "/dashboard/manage-event",
      icon: MdManageAccounts,
      label: "Manage Events",
    },
  ];

  return (
    <>
      {/* MOBILE TOGGLE BUTTON */}
      <button
        className="md:hidden btn btn-ghost fixed top-4 left-4 z-50"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <HiX className="w-6 h-6" />
        ) : (
          <HiMenu className="w-6 h-6" />
        )}
      </button>

      {/* SIDEBAR - Desktop */}
      <aside className="hidden md:flex flex-col w-64 min-h-screen bg-base-200 p-4">
        <h2 className="text-xl font-bold mb-6 text-center">Dashboard</h2>
        <ul className="menu space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end || false}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                  isActive ? "bg-primary text-white" : "hover:bg-primary/20"
                }`
              }
            >
              <item.icon />
              {item.label}
            </NavLink>
          ))}
        </ul>
      </aside>

      {/* MOBILE SIDEBAR */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-40 w-64 min-h-screen bg-base-200 p-6 shadow-lg"
          >
            <h2 className="text-xl font-bold mb-6 text-center">Dashboard</h2>
            <ul className="menu space-y-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end || false}
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 rounded-lg transition-colors ${
                      isActive ? "bg-primary text-white" : "hover:bg-primary/20"
                    }`
                  }
                  onClick={() => setMobileOpen(false)} // close menu on click
                >
                  <item.icon />
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
