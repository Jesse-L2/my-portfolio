import { About, Education, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

const App = () => (
  <main className="relative bg-slate-600 ">
    <Navigation />
    <section className="padding bg-emerald-600">
      <About />
      <Education />
    </section>
    <section className="padding bg-slate-600">
      <Skills />
    </section>
    <section className="padding">
      <Projects />
    </section>
    <section className="padding">Resume</section>
    <section className="padding">
      <Footer />
    </section>
  </main>
);

export default App;
