import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "@/stores/useAuthStore";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login", { replace: true });
    }
  }, [accessToken, navigate]);

  return accessToken ? children : null;
}

export default ProtectedRoute;
