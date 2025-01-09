import { useUser } from "@/services/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import useAuthStore from "@/stores/useAuthStore";

function UnProtectedRoute({ children }) {
  const navigate = useNavigate();

  const { accessToken } = useAuthStore();

  const { isLoading } = useUser();

  useEffect(() => {
    if (accessToken) {
      toast.error("Please log out first to access this page");
      navigate("/panel");
    }
  }, [navigate, accessToken]);

  if (isLoading) return <Spinner />;

  if (!accessToken) return children;
}

export default UnProtectedRoute;
