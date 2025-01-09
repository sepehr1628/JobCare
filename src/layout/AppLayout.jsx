import { Outlet, useLocation } from "react-router";
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import { useState } from "react";

function AppLayout() {
  const [signUp] = useState(false);
  const route = useLocation().pathname.slice(1);

  return (
    <div className={`overflow-x-hidden ${signUp ? "overflow-y-hidden" : ""}`}>
      {route ? <Header /> : <Header type="transparent" />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
