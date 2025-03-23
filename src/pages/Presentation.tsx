import { Container, Box, Grid } from "@mui/material"
import {
  IconsList,
  Perfil,
  StyledH1,
  StyledH2,
  StyledP,
  StyledSpan,
} from "../components"
import { pxToRem } from "../utils"

function Presentation() {
  return (
    <Container
      maxWidth="lg"
      className="mb-3"
      style={{ marginTop: pxToRem(100) }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Perfil />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: pxToRem(25),
          }}
        >
          <StyledSpan> Giovani Chaves Fortunato</StyledSpan>
          <StyledH2> {"</ Desenvolvedor FullStack >"}</StyledH2>
          <IconsList />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Presentation
