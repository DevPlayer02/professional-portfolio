import styled from "styled-components"
import { pxToRem } from "../utils"
import { Container, Grid } from "@mui/material"
import { StyledH2, StyledP } from "./Typographies"
import { ProjectsCardProps } from "../types"

const StyledProjectsCard = styled.div`
    .custom-h2 {
      color: #ff6300;
    }

    a:hover {
      color: #ff6300;
    }

    & img {
        height: ${pxToRem(400)};
        width: ${pxToRem(500)};
        border-radius: ${pxToRem(15)};
        border: ${pxToRem(1)} solid #fff;
    }

    & img:hover {
      box-shadow: 0 0 ${pxToRem(40)} rgba(255, 255, 255, 0.6);
    }
`


function ProjectsCard({ img, title, description, repository, reverse = false }: ProjectsCardProps & { reverse?: boolean }) {
  return (
    <StyledProjectsCard>
      <Container maxWidth="lg" className="mb-2">
        <Grid 
          container 
          spacing={2} 
          flexDirection={reverse ? "row-reverse" : "row"} // Alterna a posição do card
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <a href={repository}><img src={img} alt={title} /></a>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledH2 className="mb-1 custom-h2">{title}</StyledH2>
            <StyledP className="mb-1">{description}</StyledP>
            <StyledP><a href={repository}><strong>Ver projeto</strong></a></StyledP>
          </Grid>
        </Grid>
      </Container>
    </StyledProjectsCard>
  );
}

export default ProjectsCard