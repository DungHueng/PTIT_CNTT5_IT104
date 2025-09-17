import { createBrowserRouter, Navigate } from "react-router-dom";
import Subject from "../Components/Subject";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/Subject" replace />
  },
  {
    path: "/Subject",
    element: <Subject />
  }
]);

export default routers;