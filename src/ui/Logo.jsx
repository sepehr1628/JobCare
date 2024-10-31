import { Link } from "react-router-dom";

<<<<<<< HEAD
function Logo({ width = "100px" }) {
  return (
    <span className="z-30 w-12 md:min-w-20">
=======
function Logo({ width = "50px" }) {
  return (
    <span className="z-30 xlg:min-w-20">
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
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
