import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const route = useLocation().pathname.slice(1);
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
