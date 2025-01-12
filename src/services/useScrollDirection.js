import { useState, useEffect } from "react";

function useScrollDirection() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY; // This persists between scroll events due to closure

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY + 20 < lastScrollY) {
        setIsScrollingUp(true); // User scrolled up
      }
      if (currentScrollY > lastScrollY + 10) {
        setIsScrollingUp(false); // User scrolled down
      }

      lastScrollY = currentScrollY; // Update for the next scroll event
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
    };
  }, []);

  return isScrollingUp;
}

export default useScrollDirection;
