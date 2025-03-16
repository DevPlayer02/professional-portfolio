import styled from "styled-components"
import { pxToRem } from "../utils"

export const Perfil = styled.figure`
  background-image: url(/perfil-black.svg);
  background-size: cover;
  margin-left: ${pxToRem(100)};
  height: ${pxToRem(300)};
  width: ${pxToRem(300)};
  border-radius: 50%;
`
