import { useUser } from "@/services/useUser";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";

function UnProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated && !isLoading) {
        navigate(-1);
        toast.error("Log out first to go to that route");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  if (isLoading)
    return (
      <>
        <Spinner />
      </>
    );

  if (!isAuthenticated) return children;
}

export default UnProtectedRoute;
