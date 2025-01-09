import { useEffect } from "react";
import { useNavigate } from "react-router";
import useAuthStore from "@/stores/useAuthStore";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [navigate, accessToken]);

  return accessToken ? children : null;
}

export default ProtectedRoute;
