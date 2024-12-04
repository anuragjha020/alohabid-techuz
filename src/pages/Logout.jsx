// import styled from "styled-components";
// import Button from "../ui/Button";
import { useLogout } from "../features/authentication/useLogout";
import SpinnerMini from "../ui/SpinnerMini";
import { FaSignOutAlt } from "react-icons/fa";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <button disabled={isLoading} onClick={logout}>
      {!isLoading ? <FaSignOutAlt /> : <SpinnerMini />}
    </button>
  );
}

export default Logout;
