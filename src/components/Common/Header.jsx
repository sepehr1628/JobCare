import { useState, useRef, useEffect } from "react";
import FixedMenu from "@/components/UI/FixedMenu";
import Logo from "@/components/UI/Logo";
import Navbar from "@/components/Common/Navbar";
// import Overlay from "./Overlay";

import { HiOutlineShoppingCart } from "react-icons/hi";
import { useLocation } from "react-router";
import SigninButton from "../Buttons/SigninButton";
import { useUser } from "@/services/useUser";

function Header({ type }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const location = useLocation();

  const myRef = useRef();

  const { data } = useUser();
  // setIsAuthenticated(data.role === "authenticated");

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
    if (myRef.current && !myRef.current.contains(e.target))
      setIsMenuOpen(false);
  };

  return (
    <header
      id="scroll-here"
      ref={myRef}
      className={`flex justify-between bg-inherit items-center p-4 xlg:px-24 z-10 ${
        type ? "absolute top-0 left-0 right-0" : ""
      }`}
    >
      <div className="flex justify-between">
        <Logo />
        <Navbar />
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-blue-900 hidden xlg:flex items-center gap-2 py-2 px-8 rounded-3xl my-2">
          <HiOutlineShoppingCart className="text-xl" />
          Cart
        </button>
        {/* {isAuthenticated ? (
          <SigninButton type="mdDisplay" setIsMenuOpen={setIsMenuOpen} />
        ) : (
          <button>Panel</button>
        )} */}
      </div>
      <FixedMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <button
        className="xlg:hidden"
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
