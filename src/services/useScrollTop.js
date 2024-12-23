import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollTop() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/previous-route") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);
}
