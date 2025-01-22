import Logo from "./Logo";

import { Link, NavLink, useNavigate } from "react-router-dom";

import { PiReadCvLogo, PiProjectorScreen } from "react-icons/pi";
import SigninButton from "../Buttons/SigninButton";
import useAuthStore from "@/stores/useAuthStore";

import {
  HiOutlineHome,
  HiOutlineShoppingCart,
  HiOutlineNewspaper,
  HiOutlinePhone,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { logout } from "@/authentication/apiAuth";
// import { useQuery } from "@tanstack/react-query";

function FixedMenu({ isMenuOpen, setSignUp, setIsMenuOpen }) {
  const navigate = useNavigate();
  const { accessToken, purgeToken } = useAuthStore();

  function handleLogout() {
    logout();
    purgeToken();
    navigate("/login");
  }

  return (
    <div
      className={`flex flex-col justify-between xlg:hidden transition duration-300 w-3/5 bg-slate-200 pt-4 pb-4 px-6 sm:w-1/3 h-full fixed top-0 left-0 z-50 ${
        !isMenuOpen ? "-translate-x-full" : "translate-x-0 shadow-3xl"
      }`}
    >
      <div className="flex flex-col gap-4">
        <Logo width="50px" />

        {!accessToken ? (
          <SigninButton
            setSignUp={setSignUp}
            setIsMenuOpen={setIsMenuOpen}
            type="smDisplay"
          />
        ) : (
          <Link className="mt-6" to="/dashboard">
            Dashboard
          </Link>
        )}
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
        {!accessToken ? (
          ""
        ) : (
          <button
            onClick={handleLogout}
            className="px-6 py-1 bg-gray-900 transition-all duration-300  text-slate-50 hover:bg-[#444] dark:bg-blue-900 rounded-3xl"
          >
            Log Out
          </button>
        )}
      </div>
      <p className="text-xs"> &copy; All rights are reserved by sepehr1628</p>
    </div>
  );
}

export default FixedMenu;
