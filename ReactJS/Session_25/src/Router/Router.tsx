import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Bai_01/Home";
import About from "../Components/Bai_01/About";
import Contact from "../Components/Bai_01/Contact";
import Login from "../Components/Bai_03/Login";
import Register from "../Components/Bai_04/Register";
import Error from "../Components/Bai_05/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
