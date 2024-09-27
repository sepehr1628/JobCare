import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const route = useLocation().pathname.slice(1);
  return (
    <div className="px-4 py-20 md:px-24 bg-breadcrumb bg-cover bg-center bg-no-repeat border-t-2 border-solid border-slate-300">
      <p className="capitalize flex gap-2">
        <Link to="/">Home</Link> {">"} {route}
      </p>
    </div>
  );
}

export default BreadCrumb;
