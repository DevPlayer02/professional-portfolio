// PAGES
import {
  AboutMe,
  Footer,
  HardSkills,
  Presentation,
  Projects,
  ServicesProvided,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Presentation />
      <AboutMe />
      <HardSkills />
      <Projects />
      <ServicesProvided />
      <Footer />
    </div>
  );
}

export default App;
