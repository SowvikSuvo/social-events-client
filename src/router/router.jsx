import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import CreateEvent from "../page/CreateEvent";
import JoinedEvent from "../page/JoinedEvent";
import ManageEvents from "../page/ManageEvents";
import UpcomingEvents from "../page/UpcomingEvents";
import PrivateRoute from "./PrivateRouter";
import EventsDetails from "../components/EventsDetails";

import UpdateEvent from "../components/UpdateEvent";
import NotFound from "../page/NotFound";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../page/Dashboard";
import AboutUs from "../page/AboutUs";
import ContactUs from "../page/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/upcoming-events",
        element: <UpcomingEvents></UpcomingEvents>,
        loader: () => fetch("https://assigment-10-bice.vercel.app/events"),
      },
      {
        path: "/events-details/:id",
        element: (
          <PrivateRoute>
            <EventsDetails></EventsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },

      {
        path: "*",
        element: <NotFound></NotFound>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard></Dashboard>,
      },
      {
        path: "create-event",
        element: <CreateEvent />,
      },
      {
        path: "joined-event",
        element: <JoinedEvent />,
      },
      {
        path: "manage-event",
        element: <ManageEvents />,
      },
      {
        path: "update-event/:id",
        element: <UpdateEvent />,
      },
    ],
  },
]);
