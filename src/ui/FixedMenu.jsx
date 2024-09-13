import { NavLink } from "react-router-dom";

function FixedMenu({ isMenuOpen }) {
  return (
    <div
      className={`flex flex-col justify-between md:hidden transition duration-300 w-1/2 bg-[#C6D2D2] pt-20 pb-4 px-4 sm:w-1/3 h-full fixed top-0 left-0 ${
        !isMenuOpen ? "-translate-x-full" : "translate-x-0 shadow-3xl"
      }`}
    >
      <div>
        <button className="bg-[#1F69DC] py-2 px-8 rounded-3xl my-2">
          Sign In
        </button>

        <ul className="space-y-4 w-full w-full">
          <li>
            <NavLink to="/">Home</NavLink>
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
      </div>
      <p className="text-xs"> &copy; All rights are reserved by sepehr1628</p>
    </div>
  );
}

export default FixedMenu;
