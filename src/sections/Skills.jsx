import { mySkills } from "../constants/mySkills";
import Marquee from "react-fast-marquee";

const Skills = () => {
  if (!mySkills.length) return null;

  return (
    <section
      className="section skills z-12 border-t my-12 lg:my-34 border-violet-600"
      id="skills"
    >
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className=" text-black dark:text-white p-2 px-4 text-3xl sm:text-4xl rounded-md font-bold">
            My Skills
          </span>
        </div>
      </div>

      <div className="w-full my-8">
        <Marquee
          gradient={false}
          speed={70}
          pauseOnHover={true}
          delay={0}
          play={true}
          direction="left"
        >
          {mySkills.map((skill) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={skill}
            >
              <div className="h-full w-full rounded-xl border-2 bg-emerald-700  hover:border-violet-700  transition-all duration-500 dark:bg-emerald-500 dark:border-black">
                <div className="flex -translate-y-[1px] justify-center"></div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-6 sm:h-12">
                    <img
                      src={`src/assets/icons/${skill}.svg`}
                      alt={skill}
                      width={54}
                      height={54}
                      className="h-full w-auto"
                    />
                  </div>
                  <p className="text-white text-md sm:text-lg">{skill}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Skills;
