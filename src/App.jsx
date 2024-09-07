import "./output.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Header from "./ui/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Header />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
