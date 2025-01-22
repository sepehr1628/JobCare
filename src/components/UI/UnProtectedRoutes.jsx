import { useEffect } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuthStore from "@/stores/useAuthStore";

function UnProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (accessToken) {
      toast.error("Please log out first to access this page");
      navigate("/dashboard", { replace: true });
    }
  }, [accessToken, navigate]);

  return !accessToken ? children : null;
}

export default UnProtectedRoute;
