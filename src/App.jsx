import { Contact, Footer } from "./sections";
import { Nav } from "./components";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1-wide wide:padding-r padding-b">
      Hero -ish section
    </section>
    <section className="padding">Projects</section>
    <section className="padding">Other Section</section>
    <section className="padding">Check it out</section>
    <section className="padding">Footer</section>
  </main>
);

export default App;
