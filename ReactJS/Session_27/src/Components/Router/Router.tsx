import { createBrowserRouter } from "react-router-dom";
import Home from "../Bai_01/Home";
import About from "../Bai_01/About";
import Contact from "../Bai_01/Contact";
import TaskList from "../Bai_03/TaskList";
import TaskDetail from "../Bai_03/TaskDetail";
import Home1 from "../Bai_06/Main";
import About1 from "../Bai_06/Product";
import Detail from "../Bai_06/Detail";
import ProductDetail from "../Bai_02/ProductDetail";
import ProductList from "../Bai_02/ProductList";

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
    path: "/:",
    element: <TaskList />,
  },
  {
    path: "/:id",
    element: <TaskDetail />,
  },
  {
    path: "/main",
    element: <Home1 />,
  },
  {
    path: "/about1",
    element: <About1 />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/Product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/Product",
    element: <ProductList />,
  }
]);