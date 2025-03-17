import styled from "styled-components"
import { pxToRem } from "../utils"
import { StyledH3 } from "./Typographies"
import { HardSkillsCardProps } from "../types"

export const StyledHardSkillsCard = styled.div`
    background-color: #3b3b3b;
    border-radius: ${pxToRem(8)};
    border-bottom: ${pxToRem(8)} solid #ff6300;
    height: ${pxToRem(150)};
    width: ${pxToRem(120)};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: ${pxToRem(10)};
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    img {
        padding-top: ${pxToRem(25)};
        max-width: 60%;
        max-height: 60%;
        object-fit: contain;
    }
`

function HardSkillsCard({img, title}: HardSkillsCardProps) {
  return (
    <StyledHardSkillsCard>
        <img src={img} alt="html"/>
        <StyledH3>{title}</StyledH3>
    </StyledHardSkillsCard>
  )
}

export default HardSkillsCard
