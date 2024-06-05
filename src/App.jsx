import { About, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

const App = () => (
  <main className="relative dark:bg-dark bg-gradient-to-t from-white-200 via-slate-400 to-white ">
    <Navigation className="" />
    <About className="" />
    <Projects />
    <Skills />
    <Footer />
  </main>
);

export default App;
