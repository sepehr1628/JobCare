import { logout } from "@/authentication/apiAuth";
import useAuthStore from "@/stores/useAuthStore";
import { Navigate } from "react-router";

function UserPanel() {
  const { purgeToken } = useAuthStore();

  function handleLogout() {
    logout();
    purgeToken();
    Navigate("/login");
  }
  return (
    <>
      <button
        className="border rounded-full bg-red-500 py-2 px-6"
        onClick={handleLogout}
      >
        Log out
      </button>
    </>
  );
}

export default UserPanel;
