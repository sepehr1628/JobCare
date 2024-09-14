import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="m-auto ml-12">
      <ul className="hidden md:flex space-x-8 [&>li]:m-auto">
        <li>
          <NavLink to="/" className="[&:.active]:font-semibold">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/market">Market</NavLink>
        </li>
        <li>
          <NavLink to="/freelancer">Freelancer</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/educations">Educations</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
