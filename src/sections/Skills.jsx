import {
  myLangs,
  myFrontEnd,
  myBackEnd,
  myCloud,
  myTools,
} from "../constants/mySkills";
import { javascript, python, typescript } from "../assets/icons";

const Skills = () => {
  if (!myLangs.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="text-center uppercase mb-4">My Languages</h2>
      <ul className="max-w-[450px] w-[95%] flex flex-wrap justify-center mx-auto my-0">
        {myLangs.map((language) => (
          <li
            key={language}
            className="block cursor-pointer font-medium lowercase transition-transform duration-[0.2s] ease-[ease-in-out] px-4 py-3 m-2 text-transform: initial btn btn--plain"
          >
            <img
              className="w-10 h-10"
              src={`src/assets/icons/${language}.png`}
              alt={language}
            />
          </li>
        ))}
      </ul>
      <h2 className="text-center uppercase mb-4">My Frontend</h2>
      <h2 className="text-center uppercase mb-4">My Backend</h2>
      <h2 className="text-center uppercase mb-4">My Cloud</h2>
      <h2 className="text-center uppercase mb-4">My Tools</h2>
    </section>
  );
};

export default Skills;
