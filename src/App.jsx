import { About, Education, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

const App = () => (
  <main className="relative dark:bg-dark bg-gradient-to-t from-white-200 via-slate-400 to-white ">
    <Navigation className="" />
    <section className="padding dark:bg-dark ">
      <About className="" />
      <Education />
    </section>
    <section className="padding">
      <Projects />
    </section>
    <section className="padding dark:bg-lightMist-900">
      <Skills />
    </section>
    <section className="padding ">
      <Footer />
    </section>
  </main>
);

export default App;
