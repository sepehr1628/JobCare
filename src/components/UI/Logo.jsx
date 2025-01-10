import { Link } from "react-router-dom";
function Logo() {
  return (
    <span className="z-30 xlg:min-w-20">
      <Link to="/">
        <img
          src="/Images/Logo.png"
          alt="jobCare Company"
          className="w-12 md:w-14 xlg:w-16"
        />
      </Link>
    </span>
  );
}

export default Logo;
