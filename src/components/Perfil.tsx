import styled from "styled-components"
import { pxToRem } from "../utils"
import perfil from '../assets/perfil-black.svg'

export const Perfil = styled.figure`
  background-image: url(${perfil});
  background-size: cover;
  margin-left: ${pxToRem(100)};
  height: ${pxToRem(300)};
  width: ${pxToRem(300)};
  border-radius: 50%;
`
