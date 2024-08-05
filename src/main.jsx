import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import ErrorPageNotfound from "./pages/404.jsx";
import About from "./pages/about.jsx";
import Blog from "./pages/blog.jsx";
import MainLayouts from "./components/Layouts/MainLayouts.jsx";
import DarkModeContextProvider from "./hooks/DarkMode.jsx";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <MainLayouts>
          <Home />
        </MainLayouts>
      ),
      errorElement: <ErrorPageNotfound />,
    },
    {
      path: "/about",
      element: (
        <MainLayouts>
          <About />
        </MainLayouts>
      ),
      errorElement: <ErrorPageNotfound />,
    },
    {
      path: "/blog",
      element: (
        <MainLayouts>
          <Blog />
        </MainLayouts>
      ),
      errorElement: <ErrorPageNotfound />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/react-vite-gh-pages/" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
