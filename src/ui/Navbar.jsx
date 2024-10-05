import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="m-auto ml-12">
      <ul className="hidden md:flex md:flex-wrap space-x-8 [&>li]:m-auto [&>li>.active]:font-bold">
        <li className="hover:-translate-y-1 hover:transform transition duration-300">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300">
          <NavLink to="/market">Market</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300">
          <NavLink to="/freelancer">Freelancer</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300">
          <NavLink to="/educations">Educations</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300">
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300">
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
