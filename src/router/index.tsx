import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "@/layouts";
import HomePage from "@/pages/homepage";
import ServicesPage from "@/pages/services";

export const paths = {
  homepage: "/",
  services: "services",
};

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: paths.services, element: <ServicesPage /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

export default router;
