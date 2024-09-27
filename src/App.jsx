import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Market from "./pages/Market";
import NotFound from "./ui/NotFound";
import ProductDetail from "./features/products/ProductDetail";
import Freelancers from "./pages/Freelancers";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/market/:productName",
        element: <ProductDetail />,
      },
      {
        path: "/freelancer",
        element: <Freelancers />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
