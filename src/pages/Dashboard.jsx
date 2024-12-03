import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Logout from "./Logout";
import Logo from "../ui/Logo";

const LogoutLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <p>Test</p>
      </Row>
      <LogoutLayout>
        <Logo />
        <h1>User</h1>
        <Logout />
      </LogoutLayout>
    </>
  );
}

export default Dashboard;
