import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import Register from "../pages/Register/Register";
import AddProducts from "../pages/AddProducts/AddProducts";
import PrivateRoute from "./PrivateRoute";
import DetailsPage from "../pages/DetailsPage/DetailsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>,
          </PrivateRoute>
        ),
      },
      {
        path: "/brands/:brandName",
        element: <DetailsPage></DetailsPage>,
        loader: () => fetch("data.json"),
      },
    ],
  },
]);

export default routes;
