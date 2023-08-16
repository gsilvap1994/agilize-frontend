import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "../pages/About";
import GoalTrackerPage from "../pages/GoalTracker";

const router = createBrowserRouter([
  {
    path: "",
    element: <GoalTrackerPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
