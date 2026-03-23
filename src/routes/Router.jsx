import { createBrowserRouter } from "react-router";
import Rootlayout from "../layouts/Rootlayout";
import Home from "../Pages/Home/Home/Home";
import Authlayout from "../layouts/Authlayout";
import Login from "../Pages/Auth/Login/login";
import Registrer from "../Pages/Registar/Registrer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Rootlayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },

  {
    path: "/",
    Component: Authlayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Registrer,
      },
    ],
  },
]);
