import { About, Education, Footer, Skills, Projects } from "./sections";
import { Nav } from "./components";

const App = () => (
  <main className="relative background-color: bg-main-bg ">
    <Nav />

    <section className="xl:padding-1-wide wide:padding-r padding-b ">
      Bio Section
    </section>
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
