import { Container, Grid } from "@mui/material";
import { ProjectsCard, StyledH1 } from "../components";
import dashDnc from '../assets/dash-dnc.png';
import movieList from '../assets/movie-list.png';

const projects = [
 {
    img: dashDnc,
    title: "Dashboard Financeiro",
    description: "Um dashboard com tabelas e gráficos funcionais, recebendo dados de uma API externa. Esse dashboard tem função de logar e se registrar com rotas protegidas, 2 temas para alternar quando quiser (temas dark e light) e fornece informações de metas e maiores vendedores da empresa.",
    repository: "https://github.com/DevPlayer02/dnc-sales-dashboard-gcf",
  },
  {
    img: movieList,
    title: "Movie List",
    description: "Um site de listagem de filmes com informações detalhadas, com sistema de busca e filtro de filmes, além de um sistema de favoritos que salva no local storage do navegador.",
    repository: "https://github.com/DevPlayer02/dnc-movie-list/",
  },
  {
    img: dashDnc,
    title: "Outro Projeto",
    description: "Outro projeto semelhante com características diferentes.",
    repository: "https://github.com/DevPlayer02/dnc-sales-dashboard-gcf",
  },
  {
    img: dashDnc,
    title: "Outro Projeto",
    description: "Outro projeto semelhante com características diferentes.",
    repository: "https://github.com/DevPlayer02/dnc-sales-dashboard-gcf",
  },
]

function Projects() {
  return (
    <Container>
      <StyledH1 className="mb-2">Veja um pouco do meu trabalho abaixo...</StyledH1>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={index}>
            <ProjectsCard {...project} reverse={index % 2 !== 0} /> 
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
