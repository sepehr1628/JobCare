import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Market from "./pages/Market";
import NotFound from "./ui/NotFound";
import ProductDetail from "./features/products/ProductDetail";
import Freelancers from "./pages/Freelancers";
import Projects from "./pages/Projects";

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
        path: "/market/:productID",
        element: <ProductDetail />,
      },
      {
        path: "/freelancer",
        element: <Freelancers />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  // {
  //   element: <AdminPanelLayout />,
  //   children: [
  //     { path: "/", element: <AdminPanel /> },
  //     { path: "/profile", element: <AdminPanel /> },
  //   ],
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
