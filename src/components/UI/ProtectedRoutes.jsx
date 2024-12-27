import { useUser } from "@/services/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return <Spinner />;
  }

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
