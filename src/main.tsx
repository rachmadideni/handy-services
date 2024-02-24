import React from "react";
import ReactDOM from "react-dom/client";
import ServicesProvider from "./provider/services.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./index.css";

const MainApp = () => {
  return (
    <ServicesProvider>
      <RouterProvider router={router} />
    </ServicesProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
