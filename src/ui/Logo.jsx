import { Link } from "react-router-dom";

function Logo({ width = "50px" }) {
  return (
    <span className="z-30 xlg:min-w-20">
      <Link to="/">
        <img
          src="./../assets/Images/Logo.png"
          alt="jobCare Company"
          width={width}
        />
      </Link>
    </span>
  );
}

export default Logo;
