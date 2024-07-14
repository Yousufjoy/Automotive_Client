import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import LoginPage from "../pages/LoginPage/LoginPage";
import Register from "../pages/Register/Register";
import AddProducts from "../pages/AddProducts/AddProducts";
import PrivateRoute from "./PrivateRoute";

import OnClickBrand from "../pages/OnClickBrand/OnClickBrand";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
// import UpdatePage from "../pages/UpdatePage/UpdatePage";
import MyCart from "../pages/MyCart/MyCart";

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
        element: <OnClickBrand></OnClickBrand>,
      },
      {
        path: "/brands/details/:id",
        element: (
          <PrivateRoute>
            <DetailsPage></DetailsPage>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/products"
          ),
      },
      // {
      //   path: "/productupdate/:id",
      //   element: <UpdatePage></UpdatePage>,
      //   loader: () =>
      //     fetch(
      //       "https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/products"
      //     ),
      // },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://a10-automotive-server-3dy0zv3u5-yousufjoy.vercel.app/cart"
          ),
      },
    ],
  },
]);

export default routes;
