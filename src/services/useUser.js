import { useEffect, useState } from "react";
import { getCurrentUser } from "@/authentication/apiAuth";
import { supabase } from "../../supabase";

export function useUser() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const { data: session } = await supabase.auth.getSession();
      if (session?.session) {
        const user = await getCurrentUser();
        setUser(user);
      }
      setIsLoading(false);
    };

    // fetchUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        if (session) {
          fetchUser();
        } else {
          setUser(null);
        }
      }
    );

    // return () => {
    //   listener?.unsubscribe();
    // };
  }, []);

  return {
    isLoading,
    user,
    isAuthenticated: !!user?.role && user.role === "authenticated",
  };
}
