import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 4rem;
  width: auto;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="../../public/ALOHA BIDS FINAL-01 1.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
