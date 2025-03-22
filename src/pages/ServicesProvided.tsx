import { Container, Grid } from "@mui/material";
import { ServiceCards, StyledH1 } from "../components";

function Projects() {
  return (
    <Container>
      <StyledH1 className="mb-2">Veja um pouco do meu trabalho abaixo...</StyledH1>
      <Grid container spacing={2}>
          <Grid item xs={12}>
            <ServiceCards /> 
          </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;