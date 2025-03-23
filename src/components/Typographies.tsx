import styled from "styled-components"
import { typographiesProps } from "../types"
import { pxToRem } from "../utils"

export const StyledH1 = styled.h1<typographiesProps>`
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => pxToRem(props.size || 46)};
  font-weight: ${(props) => props.weight || 600};
  letter-spacing: ${pxToRem(-1)};
  line-height: ${(props) => pxToRem(props.lineHeight || 36)};
  display: inline-block;
  font-size: ${pxToRem(46)};
  padding-bottom: ${pxToRem(30)};
  background-image: linear-gradient(to right, #ff6300 100%, transparent 100%);
  background-repeat: no-repeat;
  background-size: 100% ${pxToRem(8)};
  background-position: bottom;
  position: relative;

  &::after {
    content: "● ● ●";
    font-size: ${pxToRem(16)};
    color: #ff6300;
    position: absolute;
    bottom: -12px;
    right: 0;
    transform: translateX(${pxToRem(50)});
    word-spacing: ${pxToRem(8)};
  }
`

export const StyledH2 = styled.h2<typographiesProps>`
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => pxToRem(props.size || 30)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`
export const StyledH3 = styled.h3<typographiesProps>`
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => pxToRem(props.size || 24)};
  font-weight: ${(props) => props.weight || 600};
  line-height: ${(props) => pxToRem(props.lineHeight || 24)};
`

export const StyledP = styled.p<typographiesProps>`
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => pxToRem(props.size || 24)};
  font-weight: ${(props) => props.weight || 400};
  line-height: ${(props) => pxToRem(props.lineHeight || 30)};
  letter-spacing: ${pxToRem(-1)};
  word-spacing: ${pxToRem(5)};
`

export const StyledSpan = styled.span<typographiesProps>`
  color: ${(props) => props.color || "inherit"};
  font-size: ${(props) => pxToRem(props.size || 46)};
  font-weight: ${(props) => props.weight || 600};
  letter-spacing: ${pxToRem(-1)};
  line-height: ${(props) => pxToRem(props.lineHeight || 36)};
`
