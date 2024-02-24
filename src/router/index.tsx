import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "@/layouts";
import HomePage from "@/pages/home";
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
    ],
  },
]);

export default router;
