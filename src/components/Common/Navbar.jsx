// import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="m-auto xl:ml-9">
      <ul
        id="nav-list"
        className="hidden xlg:flex xlg:flex-wrap space-x-8 [&>li]:m-auto [&>li>.active]:font-bold dark:[&>li]:text-slate-300 dark:[&>li>.active]:text-gray"
      >
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/market">Market</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/freelancers">Freelancers</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/educations">Educations</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <a href="#footer">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
