import { useUser } from "@/services/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../../supabase";
import Spinner from "./Spinner";
import toast from "react-hot-toast";
import useAuthStore from "@/stores/useAuthStore";

function UnProtectedRoute({ children }) {
  // const [session, setSession] = useState(true);
  // const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { accessToken } = useAuthStore();

  const { isLoading } = useUser();

  useEffect(() => {
    if (accessToken) {
      navigate("/panel");
      toast.error("Please log out first to access this page");
    }
  }, [navigate]);

  if (isLoading) return <Spinner />;

  if (!accessToken) return children;
}

export default UnProtectedRoute;
