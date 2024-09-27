import { Link } from "react-router-dom";

function Logo({ width = "100px" }) {
  return (
    <span className="z-30 w-12 md:min-w-20">
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
