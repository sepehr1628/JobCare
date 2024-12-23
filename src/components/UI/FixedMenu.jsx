import Logo from "./Logo";

import { NavLink } from "react-router-dom";

import { PiReadCvLogo, PiProjectorScreen } from "react-icons/pi";
import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineNewspaper,
  HiOutlineBookOpen,
  HiOutlinePhone,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import SigninButton from "../Buttons/SigninButton";

function FixedMenu({ isMenuOpen, setSignUp, setIsMenuOpen }) {
  return (
    <div
      className={`flex flex-col justify-between xlg:hidden transition duration-300 w-3/5 bg-slate-200 pt-4 pb-4 px-6 sm:w-1/3 h-full fixed top-0 left-0 z-50 ${
        !isMenuOpen ? "-translate-x-full" : "translate-x-0 shadow-3xl"
      }`}
    >
      <div className="space-y-4">
        <Logo width="50px" />
        <SigninButton
          setSignUp={setSignUp}
          setIsMenuOpen={setIsMenuOpen}
          type="smDisplay"
        />

        <ul className="space-y-4 w-full">
          <li>
            <NavLink to="/" className="flex gap-1 items-center">
              <HiOutlineHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/market" className="flex gap-1 items-center">
              <HiOutlineShoppingCart />
              Market
            </NavLink>
          </li>
          <li>
            <NavLink to="/freelancers" className="flex gap-1 items-center">
              <HiOutlineUserGroup />
              Freelancer
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className="flex gap-1 items-center">
              <HiOutlineNewspaper />
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/educations" className="flex gap-1 items-center">
              <HiOutlineBookOpen />
              Educations
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className="flex gap-1 items-center">
              <PiProjectorScreen />
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" className="flex gap-1 items-center">
              <PiReadCvLogo />
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" className="flex gap-1 items-center">
              <HiOutlinePhone />
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
      <p className="text-xs"> &copy; All rights are reserved by sepehr1628</p>
    </div>
  );
}

export default FixedMenu;
