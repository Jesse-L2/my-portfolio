import { mySkills } from "../constants/mySkills";
import Marquee from "react-fast-marquee";

const Skills = () => {
  if (!mySkills.length) return null;
  // Divide the skills array into 3 equal parts
  const chunkSize = Math.ceil(mySkills.length / 3);
  const chunks = Array.from({ length: 3 }, (_, index) =>
    mySkills.slice(index * chunkSize, (index + 1) * chunkSize)
  );

  return (
    <section className="section skills z-12 padding dark:bg-dark" id="skills">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="h-[1px] bg-gradient-to-r from-teal-500 via-violet-500 to-teal-500  w-full" />
      </div>

      <div className="flex justify-center my-5 lg:py-4">
        <div className="flex items-center">
          <span className=" text-black dark:text-white px-4 text-3xl sm:text-4xl font-bold">
            My Tools and Skills
          </span>
        </div>
      </div>

      <div className="w-full">
        {chunks.map((chunk, index) => (
          <div key={index} className="w-full">
            <Marquee
              gradient={false}
              speed={30}
              pauseOnHover={true}
              delay={0}
              play={true}
              direction={index === 1 ? "right" : "left"} // Set direction to "right" for the middle Marquee (or every 2nd if more chunks)
            >
              {chunk.map((skill) => (
                <div
                  className="w-20 h-20 min-w-fit flex flex-col items-center justify-center transition-all duration-200 m-0 rounded-3xl group p-0 relative  cursor-pointer  bg-lightWater-50  mb-2 mx-2 mt-2  active:bg-lightWater-200 active:scale-110 border-black border-2 dark:border-4 dark:border-blueButterfly-300"
                  key={skill}
                >
                  <div className="flex -translate-y-[1px] justify-center"></div>
                  <div className="flex flex-col items-center justify-center ">
                    <div className="h-12 w-12 ">
                      <img
                        src={`src/assets/icons/devIcons/${skill}.svg`}
                        alt={skill}
                        width={80}
                        height={80}
                        className="h-full w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </div>
      <div className="h-[1px] bg-gradient-to-r from-teal-500 via-violet-500 to-teal-500  w-full mt-8" />
    </section>
  );
};
export default Skills;
