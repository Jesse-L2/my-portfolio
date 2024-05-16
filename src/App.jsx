import { About, Education, Footer, Skills, Projects } from "./sections";
import { Navigation } from "./components";

const App = () => (
  <main className="relative background-color: bg-slate-100 ">
    <Navigation />
    <section className="padding">
      <About />
      <Education />
    </section>
    <section className="padding">
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
