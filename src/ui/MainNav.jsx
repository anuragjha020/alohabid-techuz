import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logout from "../pages/Logout";
import Logo from "./Logo";

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-green-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-green-500);
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard">
            <Logo />
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/login">
            {/* <FaSignOutAlt style={{ fontSize: "1.5rem" }} />
            <span>Logout</span> */}
            <Logout />
            <span>Logout</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
