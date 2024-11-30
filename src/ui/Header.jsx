import { useState, useRef, useEffect } from "react";
import FixedMenu from "./FixedMenu";
import Logo from "./Logo";
import Navbar from "./Navbar";
// import Overlay from "./Overlay";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { useLocation } from "react-router";

function Header({ type }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const myRef = useRef();

  useEffect(
    function () {
      document.addEventListener("click", handleCloseMenu);

      return () => document.removeEventListener("click", handleCloseMenu);
    },
    [isMenuOpen]
  );

  useEffect(
    function () {
      setIsMenuOpen(false);
    },
    [location]
  );

  const handleCloseMenu = (e) => {
<<<<<<< HEAD
    if (myRef.current && !myRef.current.contains(e.target))
      setIsMenuOpen(false);
=======
<<<<<<< HEAD
    if (myRef.current && !myRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
=======
    if (myRef.current && !myRef.current.contains(e.target))
      setIsMenuOpen(false);
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
  };

  return (
    <header
<<<<<<< HEAD
      id="scroll-here"
      ref={myRef}
=======
      ref={myRef}
<<<<<<< HEAD
      className={`flex justify-between bg-inherit items-center p-4 md:px-24 z-10 ${
        type && "absolute top-0 left-0 right-0"
      }`}
    >
      {/* {isMenuOpen && <Overlay />} */}
      <div className="flex justify-between">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-blue-900 hidden md:flex items-center gap-2 py-2 px-8 rounded-3xl my-2">
          <HiOutlineShoppingCart className="text-xl" />
          Cart
        </button>
        <button className="hidden md:block bg-[#1F69DC] py-2 transition-all duration-300 hover:px-12 px-8 text-slate-50 rounded-3xl my-2">
=======
>>>>>>> origin/master
      className={`flex justify-between bg-inherit items-center p-4 xlg:px-24 z-10 ${
        type ? "absolute top-0 left-0 right-0" : ""
      }`}
    >
      <div className="flex justify-between">
        <Logo width="65px" />
        <Navbar />
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-blue-900 hidden xlg:flex items-center gap-2 py-2 px-8 rounded-3xl my-2">
          <HiOutlineShoppingCart className="text-xl" />
          Cart
        </button>
        <button className="hidden xlg:block bg-[#1F69DC] py-2 transition-all duration-300 hover:px-12 px-8 text-slate-50 rounded-3xl my-2">
<<<<<<< HEAD
=======
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
          Sign In
        </button>
      </div>
      <FixedMenu isMenuOpen={isMenuOpen} />

      <button
<<<<<<< HEAD
        className="xlg:hidden"
=======
<<<<<<< HEAD
        className="md:hidden"
=======
        className="xlg:hidden"
>>>>>>> 9ba86ff (feature/ json server removed from project and supabase replaces instead. filtering and pagination fixed)
>>>>>>> origin/master
        onClick={() => setIsMenuOpen((status) => !status)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="28"
          height="28"
        >
          <path
            className="focus:text-[#4A86E1]"
            d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"
          />
        </svg>
      </button>
    </header>
  );
}

export default Header;
