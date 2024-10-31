<<<<<<< HEAD
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
=======
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const updateNavbarItems = () => {
    const navList = document.getElementById("nav-list");
    const navItems = document.querySelectorAll(".nav-item");

    if (!navList || navItems.length === 0) return;

    const navListRect = navList.getBoundingClientRect();
    const navItemsRects = Array.from(navItems).map((item) =>
      item.getBoundingClientRect()
    );

    navItems.forEach((item) => (item.style.display = "block"));

    let totalWidth = 0;
    for (let i = 0; i < navItemsRects.length; i++) {
      if (totalWidth + navItemsRects[i].width + 25 > navListRect.width) {
        // Hide the current and remaining items
        for (let j = i; j < navItems.length; j++) {
          navItems[j].style.display = "none";
        }
        break;
      }
      totalWidth += navItemsRects[i].width + 25;
    }
  };

  useEffect(() => {
    if (window.innerWidth > 992) {
      updateNavbarItems();
      window.addEventListener("resize", updateNavbarItems);
    }

    return () => {
      window.removeEventListener("resize", updateNavbarItems);
    };
  }, []);

  return (
    <nav className="m-auto xl:ml-9">
      <ul
        id="nav-list"
        className="hidden xlg:flex xlg:flex-wrap space-x-8 [&>li]:m-auto [&>li>.active]:font-bold"
      >
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/market">Market</NavLink>
        </li>
        <li className="hover:-translate-y-1 hover:transform transition duration-300 nav-item">
          <NavLink to="/freelancer">Freelancer</NavLink>
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
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
