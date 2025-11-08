import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../page/Home";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import CreateEvent from "../page/CreateEvent";
import JoinedEvent from "../page/JoinedEvent";
import ManageEvents from "../page/ManageEvents";
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
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/create-event",
        element: <CreateEvent></CreateEvent>,
      },
      {
        path: "/join-event",
        element: <JoinedEvent></JoinedEvent>,
      },
      {
        path: "/manage-event",
        element: <ManageEvents></ManageEvents>,
      },
    ],
  },
]);
