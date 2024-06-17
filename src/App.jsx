import { About, Footer, Skills } from "./sections";
import { Projects } from "./sections/Projects";
import { Navigation } from "./components";

// if (
//   (window.matchMedia &&
//     window.matchMedia("(prefers-color-scheme: dark)").matches) ||
//   (window.matchMediaPolyfilled &&
//     window.matchMediaPolyfilled("(prefers-color-scheme: dark)").matches)
// ) {
//   document.documentElement.classList.add("dark");
// } else {
//   document.documentElement.classList.remove("dark");
// }

const App = () => (
  <main className="relative dark:bg-dark  ">
    <Navigation className="" />
    <About className="" />
    <Projects />
    <Skills />
    <Footer />
  </main>
);

export default App;
