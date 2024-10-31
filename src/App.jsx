import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Market from "./pages/Market";
import NotFound from "./ui/NotFound";
import ProductDetail from "./features/products/ProductDetail";
import Freelancers from "./pages/Freelancers";
<<<<<<< HEAD
=======
import Projects from "./pages/Projects";
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)

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
<<<<<<< HEAD
        path: "/market/:productName",
=======
        path: "/market/:productID",
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
        element: <ProductDetail />,
      },
      {
        path: "/freelancer",
        element: <Freelancers />,
      },
<<<<<<< HEAD
    ],
  },
=======
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
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
