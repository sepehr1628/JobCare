import toast from "react-hot-toast";
import { useNavigate } from "react-router";

function SigninButton({ type, setIsMenuOpen }) {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/signup");
    if (setIsMenuOpen) setIsMenuOpen((prev) => !prev);
  }
  const base =
    "px-6 py-2 bg-[#1F69DC] transition-all duration-300  text-slate-50 hover:bg-[#1f3bdc] dark:bg-blue-900 rounded-3xl";

  const styles = {
    primary: base,
    search: base + " rounded-l-none rounded-r-full",
    smDisplay: base + " xlg:hidden px-6 py-1",
    mdDisplay: base + " hidden xlg:block px-8 py-2",
  };

  return (
    <button className={styles[type]} onClick={handleClick}>
      Sign In
    </button>
  );
}

export default SigninButton;
