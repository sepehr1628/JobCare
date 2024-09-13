import { useState } from "react";
import FixedMenu from "./FixedMenu";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between bg-inherit items-center py-2 px-4 md:px-16 absolute top-0 left-0 right-0">
      <div className="flex justify-between w-3/4">
        <Logo />
        <Navbar />
      </div>
      <div>
        <button className="hidden md:block">Sign In</button>
      </div>
      <FixedMenu isMenuOpen={isMenuOpen} />

      <button
        className="md:hidden"
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
