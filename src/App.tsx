// PAGES
import {
  AboutMe,
  Footer,
  HardSkills,
  Navbar,
  Presentation,
  Projects,
  ServicesProvided,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
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
