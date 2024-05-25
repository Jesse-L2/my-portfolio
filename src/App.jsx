import { About, Education, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

const App = () => (
  <main className="relative">
    <Navigation />
    <section className="padding">
      <About />
      <Education />
    </section>
    <section className="padding">
      <Projects />
    </section>
    <section className="padding dark:bg-slate-600">
      <Skills />
    </section>
    <section className="padding">Resume</section>
    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;
