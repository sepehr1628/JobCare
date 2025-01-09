import ProductDetail from "../features/products/ProductDetail";

import Home from "../pages/Home";
import AppLayout from "@/layout/AppLayout";
import MarketLayout from "@/pages/MarketLayout";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/components/UI/NotFound";
import UserPanel from "@/pages/UserPanel";
import Test from "@/components/Common/Test";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ProtectedRoute from "@/components/UI/ProtectedRoutes";
import UnProtectedRoute from "@/components/UI/UnProtectedRoutes";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/market/:productID",
        element: <ProductDetail />,
      },
      {
        element: <MarketLayout />,
        children: [
          {
            path: "/market",
            element: <Test />,
          },
          {
            path: "/freelancers",
            element: <Test />,
          },
          {
            path: "/projects",
            element: <Test />,
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: (
      <UnProtectedRoute>
        <Signup />
      </UnProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <UnProtectedRoute>
        <Login />
      </UnProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <UserPanel />,
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
