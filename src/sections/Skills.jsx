import { mySkills } from "../constants/mySkills";
import { javascript, python, typescript } from "../assets/icons";

const Skills = () => {
  if (!mySkills.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="text-center uppercase mb-4">My Skills</h2>
      <ul className="max-w-[450px] w-[95%] flex flex-wrap justify-center mx-auto my-0">
        {mySkills.map((skill) => (
          <li
            key={skill}
            className="block cursor-pointer font-medium lowercase transition-transform duration-[0.2s] ease-[ease-in-out] px-4 py-3 m-2 text-transform: initial btn btn--plain"
          >
            <img
              className="w-10 h-10"
              src={`src/assets/icons/${skill}.png`}
              alt={skill}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
