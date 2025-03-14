import styled from "styled-components";
import { pxToRem } from "../utils";
import { Logo } from "./Logo";
import Button from "./ToggleButton";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  color: #ffffff;
  border-bottom: ${pxToRem(3)} solid #ff6300;
  margin-bottom: ${pxToRem(40)};
  width: 100%;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  gap: ${pxToRem(55)};
  margin-right: ${pxToRem(50)};

  & li {
    list-style: none;
    color: white; /* Exemplo de cor */
    font-weight: bold;
  }

  & li:last-child {
    margin-right: 0;
    gap: 0;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <nav>
        <Logo height={50} width={50} />
      </nav>
      <nav style={{ display: "flex", margin: pxToRem(50) }}>
        <StyledUl>
          <li>Presentation</li>
          <li>Hardskill</li>
          <li>Projects</li>
          <li>Services Provided</li>
          <div>|</div>
        </StyledUl>
        <Button />
      </nav>
    </StyledHeader>
  );
}

export default Header;
