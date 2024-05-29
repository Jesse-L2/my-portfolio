import { About, Education, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

const App = () => (
  <main className="relative bg-white dark:bg-stone-950 ">
    <Navigation />
    <section className="padding">
      <About className="" />
      <Education />
    </section>
    <section className="padding dark:bg-stone-900">
      <Projects />
    </section>
    <section className="padding">
      <Skills />
    </section>
    <section className="padding">Resume</section>
    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;
