import { About, Education, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

const App = () => (
  <main className="relative dark:bg-slate-900 bg-gradient-to-t from-indigo-200 via-violet-200 to-white ">
    <Navigation className="" />
    <section className="padding dark:bg-gray-900 ">
      <About className="" />
      <Education />
    </section>
    <section className="padding dark:bg-gray-900 ">
      <Projects />
    </section>
    <section className="padding dark:bg-gray-900">
      <Skills />
    </section>
    <section className="padding dark:bg-gray-900 ">
      <Footer />
    </section>
  </main>
);

export default App;
