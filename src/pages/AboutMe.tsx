import { Container, Box, Grid } from "@mui/material"
import { StyledH1, StyledP, StyledSpan } from "../components"

function AboutMe() {
  return (
    <Grid>
      <Container maxWidth="lg" className="mb-2">
        <StyledH1> Sobre mim </StyledH1>
      </Container>
      <Container maxWidth="lg">
        <StyledP>
          Sou um desenvolvedor web especializado no ecossistema JavaScript, com
          domínio de TypeScript, Node.js, Express e Next.js. Minha missão é
          transformar ideias em experiências digitais fluidas, criando sites
          interativos, de alta performance e otimizados para conversão. Atuo no
          desenvolvimento de landing pages persuasivas, e-commerces robustos e
          dashboards inteligentes, sempre priorizando velocidade, usabilidade e
          um design envolvente. Já desenvolvi dashboards de vendas, lojas
          virtuais e plataformas interativas, incluindo um site para filmes e
          outros projetos estratégicos, que você pode conferir aqui no meu
          portfólio. Se você busca um site que atraia clientes, converta
          visitantes e impulsione seu negócio, estou pronto para transformar sua
          visão em realidade. Vamos conversar?
          <br /> 📩 Entre em contato e vamos criar algo incrível juntos!
        </StyledP>
      </Container>
    </Grid>
  )
}

export default AboutMe
