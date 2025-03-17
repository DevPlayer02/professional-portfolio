import { Container, Grid, Paper } from "@mui/material";
import HardSkillsCard from "../components/HardSkillsCard";
import { StyledH1 } from "../components";

function HardSkills() {
  return (
    <Container className="mb-3">
      <Grid container spacing={2} >
        <Grid item>
          <StyledH1 className="mb-2"> Habilidades </StyledH1>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={2} >  
            <HardSkillsCard img="/javascript-icon.svg" title="Javascript"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <HardSkillsCard img="/react-icon.svg" title="React"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <HardSkillsCard img="/typescript-icon.svg" title="Typescript"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <HardSkillsCard img="/html-icon.svg" title="Html"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <HardSkillsCard img="/css-icon.svg" title="Css"/>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <HardSkillsCard img="/nodejs-icon.svg" title="Nodejs"/>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HardSkills;
