import { useEffect } from "react";
import { redirect, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuthStore from "@/stores/useAuthStore";

function UnProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (accessToken) {
      toast.error("Please log out first to access this page");
      redirect("/dashboard");
      // navigate("/dashboard", { replace: true });
    }
  }, [navigate, accessToken]);

  if (!accessToken) return children;
}

export default UnProtectedRoute;
