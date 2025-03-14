import styled from "styled-components";
import { pxToRem } from "../utils";

export const Logo = styled.figure<{ height: number; width: number }>`
  background-image: url(./logo-black.svg);
  background-size: cover;
  height: ${pxToRem(150)};
  width: ${pxToRem(150)};
  margin-left: ${pxToRem(50)};
`;
