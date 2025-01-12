import { useEffect } from "react";
import { redirect, useNavigate } from "react-router";
import useAuthStore from "@/stores/useAuthStore";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      redirect("/dashboard");

      // navigate("/dashboard", { replace: true });
    }
  }, [navigate, accessToken]);

  return accessToken ? children : null;
}

export default ProtectedRoute;
