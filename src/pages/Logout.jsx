import styled from "styled-components";
import Button from "../ui/Button";
import { useLogout } from "../features/authentication/useLogout";
import SpinnerMini from "../ui/SpinnerMini";


const LogoutLayout = styled.main`
  /* min-height: 100vh; */
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <LogoutLayout>
      <Button disabled={isLoading} onClick={logout}>{!isLoading ? "Logout" : <SpinnerMini />}</Button>
    </LogoutLayout>
  );
}

export default Logout;
