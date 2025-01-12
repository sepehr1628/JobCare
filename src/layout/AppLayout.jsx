import { Outlet, useLocation } from "react-router";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import { useEffect, useState } from "react";

function AppLayout() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const route = useLocation().pathname.slice(1);

  // useEffect(function () {}, []);
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {route ? <Header /> : <Header type="transparent" />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
