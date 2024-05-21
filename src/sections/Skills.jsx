import {
  myLangs,
  myFrontEnd,
  myBackEnd,
  myCloud,
  myDBs,
  myTools,
} from "../constants/mySkills";

const Skills = () => {
  if (!myLangs.length) return null;

  return (
    <section className="section skills" id="skills">
      <h2 className="text-center uppercase mb-4">Skills</h2>
      <ul className="max-w-[450px] w-[95%] flex flex-wrap justify-center mx-auto my-0">
        {myLangs.map((language) => (
          <li
            key={language}
            className="block cursor-pointer font-medium lowercase transition-transform duration-[0.2s] ease-[ease-in-out] px-4 py-3 m-2 text-transform: initial btn btn--plain"
          >
            {language}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
