import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import FreeLancers from "./features/freelancers/FreeLancers";
import Market from "./pages/Market";
import NotFound from "./ui/NotFound";

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
        path: "/freelancer",
        element: <FreeLancers />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
