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
        loader: () => fetch("http://localhost:3000/events"),
      },
      {
        path: "/events-details/:id",
        element: (
          <PrivateRoute>
            <EventsDetails></EventsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
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
        path: "/join-event",
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
    ],
  },
]);
