import { About, Education, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

const App = () => (
  <main className="relative bg-white dark:bg-gray-800">
    <Navigation />
    <section className="padding ">
      <About className="" />
      <Education />
    </section>
    <section className="padding ">
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
