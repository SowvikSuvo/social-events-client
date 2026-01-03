import { NavLink } from "react-router";
import {
  MdOutlineJoinInner,
  MdDashboard,
  MdManageAccounts,
} from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="w-64 min-h-screen bg-base-200 p-4">
      {/* Title */}
      <h2 className="text-xl font-bold mb-6 text-center">Dashboard</h2>

      {/* Menu */}
      <ul className="menu space-y-2">
        <li>
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <MdDashboard />
            Dashboard Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/create-event"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <IoCreateSharp />
            Create Event
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/joined-event"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <MdOutlineJoinInner />
            Joined Events
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manage-event"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "bg-primary text-white" : ""
              }`
            }
          >
            <MdManageAccounts />
            Manage Events
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
