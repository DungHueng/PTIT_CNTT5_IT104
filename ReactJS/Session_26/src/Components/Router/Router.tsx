import { createBrowserRouter } from "react-router-dom";
import Product from "../Bai_01/ProductDetail";
import Student from "../Bai_02/Student";
import Students from "../Bai_03/Student";
import SearchParams from "../Bai_04/Bai_04";
import Login from "../Bai_05/Login";
import Account from "../Bai_05/Account";
import PrivateRouter from "../Bai_05/PrivateRouter";
import Home from "../Bai_05/Home";



export const router = createBrowserRouter([
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/student/:gender",
    element: <Student />,
  },
  {
    path: "/student",
    element: <Students />,
  },
  {
    path: "/student",
    element: <SearchParams />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <PrivateRouter element={<Account />} />,
  },
  {
    path: "/",
    element: <PrivateRouter element={<Home />} />,
  }

]); 