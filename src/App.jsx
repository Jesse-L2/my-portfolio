import { About, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

const App = () => (
  <main className="relative dark:bg-dark  ">
    <Navigation className="" />
    <About className="" />
    <Projects />
    <Skills />
    <Footer />
  </main>
);

export default App;
