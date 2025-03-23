import styled from "styled-components"
import { pxToRem } from "../utils"
import { Container, Grid } from "@mui/material"
import { StyledH2, StyledP } from "./Typographies"
import { ServiceCardsProps } from "../types"

const StyledServiceCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: ${pxToRem(15)};
    border: ${pxToRem(1)} solid #ffffff;
    background-color: #3b3b3b;
    color: inherit;
    height: ${pxToRem(350)};
    padding: ${pxToRem(40)};

    .custom-title {
      color: #ff6300;
    }
`


function ServiceCards({ title, description }: ServiceCardsProps) {
  return (
    <StyledServiceCards>
        <StyledH2 className="mb-2 custom-title"> {title} </StyledH2>
        <StyledP> {description} </StyledP>
    </StyledServiceCards>
  );
}

export default ServiceCards