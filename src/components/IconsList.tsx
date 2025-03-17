import styled from "styled-components"
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { pxToRem } from "../utils"

export const StyledIconsList = styled.ul`
  display: flex;
  aligm-itens: center;
  gap: ${pxToRem(20)};
  cursor: pointer;

  & li {
    opacity: 0.4;
  }

  & li:hover {
    opacity: 1;
  }

  & li a {
    color: inherit;
    text-decorate: none;
  }
`

function IconsList() {
  return (
    <>
      <StyledIconsList>
        <li>
          <a href="https://github.com/DevPlayer02">
            <FaGithub size={pxToRem(40)} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/giovani-fortunato/">
            <FaLinkedin size={pxToRem(40)} />
          </a>
        </li>
        <li>
          <a href="mailto:contato.giovanicf@gmail.com">
            <FaEnvelope size={pxToRem(40)} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/43984851477">
            <FaWhatsapp size={pxToRem(40)} />
          </a>
        </li>
      </StyledIconsList>
    </>
  )
}

export default IconsList
