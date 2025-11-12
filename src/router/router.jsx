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
        path: "/create-event",
        element: (
          <PrivateRoute>
            <CreateEvent></CreateEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/joined-event",
        element: (
          <PrivateRoute>
            <JoinedEvent></JoinedEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-event",
        element: (
          <PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-event/:id",
        element: (
          <PrivateRoute>
            <UpdateEvent></UpdateEvent>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
