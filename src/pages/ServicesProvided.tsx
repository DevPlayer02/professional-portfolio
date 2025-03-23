import { Container, Grid } from "@mui/material";
import { ServiceCards, StyledH1 } from "../components";

function ServiceProvided() {
  const services = [
    {
      title: "Desenvolvimento de Sites",
      description: "Transformo seu sonho em um site de alta performance, com design moderno e responsividade."
    },
    {
      title: "Desenvolvimento de Lading Pages",
      description: "Desenvolvo páginas de destino impactantes e otimizadas de alta conversão."
    },
    {
      title: "Manutenção de Sites",
      description: "Manutenção de sites, com atualizações de conteúdo, correção de bugs e melhorias de performance."
    },
    {
      title: "Conexão com API's",
      description: "Integração de sistemas e automação de processos com API's."
    }
  ]
  return (
      <Container maxWidth="lg" className="mb-3">
        <StyledH1 className="mb-2">Serviços prestados</StyledH1>
        <Container maxWidth="md">
          <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
            {services.map((service, index) => (
              <Grid item xs={12}sm={12} md={6} key={index}>
                <ServiceCards {...service}/> 
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
  );
}

export default ServiceProvided;