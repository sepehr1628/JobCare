import { Link, useLocation } from "react-router-dom";

function BreadCrumb({ data }) {
  const route = useLocation().pathname.slice(1).split("/");

  return (
    <div className="px-4 py-4 sm:py-20 md: md:px-24 bg-breadcrumb bg-cover bg-center bg-no-repeat border-t-2 border-solid border-slate-300">
      <p className="capitalize flex gap-2">
        <Link to="/">Home</Link> {" > "}
        {data ? (
          <>
            <Link to={`/${route[0]}`}>{route[0]}</Link> {">"} {data.name}
          </>
        ) : (
          <>{route[0]}</>
        )}
      </p>
    </div>
  );
}

export default BreadCrumb;
