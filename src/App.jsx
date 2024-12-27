import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../node_modules/react-loading-skeleton/dist/skeleton.css";
import router from "./routes";
import { RouterProvider } from "react-router-dom";

import "animate.css";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          success: {
            duration: 3000,
            // iconTheme: {
            //   primary: "green",
            //   secondary: "white",
            // },
          },
          error: {
            duration: 5000,
            // iconTheme: {
            //   primary: "red",
            //   secondary: "black",
            // },
            alert: {
              duration: 4000,
              // iconTheme: {
              //   primary: "yellow",
              //   secondary: "black",
              // },
            },
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
