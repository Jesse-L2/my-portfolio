import { Contact, Footer } from "./sections";
import { Nav } from "./components";

const App = () => (
  <main className="relative">
    <Nav />

    <section className="xl:padding-1-wide wide:padding-r padding-b">
      Bio Section
    </section>
    <section className="padding">Portfolio of Projects</section>
    <section className="padding">My Skills</section>
    <section className="padding">Education</section>
    <section className="padding">About Me</section>
    <section className="padding">Blog Section</section>
    <section className="padding">Social Media & Github</section>
    <section className="padding">Footer w/ Contact Me</section>
  </main>
);

export default App;
