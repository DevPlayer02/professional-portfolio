import styled from "styled-components"
import { pxToRem } from "../utils"

export const Logo = styled.figure`
  background-image: url(./logo-black.svg);
  background-size: cover;
  height: ${pxToRem(110)};
  width: ${pxToRem(120)};
  margin-left: ${pxToRem(50)};
`
