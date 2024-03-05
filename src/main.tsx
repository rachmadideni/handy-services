import React from "react";
import ReactDOM from "react-dom/client";
import ServicesProvider from "./provider/services.tsx";
import ThemeProvider from "./provider/theme.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./router";

import { GlobalStyle } from "./provider/theme.tsx";

const MainApp = () => {
  return (
    <ServicesProvider>
      <RouterProvider router={router} />
    </ServicesProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <MainApp />
    </ThemeProvider>
  </React.StrictMode>
);
