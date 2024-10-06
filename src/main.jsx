import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./output.css";

<<<<<<< HEAD
createRoot(document.getElementById("root")).render(<App />);
=======
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
>>>>>>> dd8f7bfb04099cb94a24acbc66bee841296c8088
