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
    <section className="section skills z-12 my-0 lg:my-2 " id="skills">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="h-[1px] bg-gradient-to-r from-teal-500 via-violet-500 to-teal-500  w-full" />
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className=" text-black dark:text-white p-2 px-4 text-3xl sm:text-4xl rounded-md font-bold">
            My Tools and Skills
          </span>
        </div>
      </div>

      <div className="w-full my-8">
        {chunks.map((chunk, index) => (
          <div key={index} className="w-full">
            <Marquee
              gradient={false}
              speed={30}
              pauseOnHover={true}
              delay={0}
              play={true}
              direction={index === 1 ? "right" : "left"} // Set direction to "right" for the middle Marquee
            >
              {chunk.map((skill) => (
                <div
                  className="w-24 h-24 min-w-fit flex flex-col items-center justify-center transition-all duration-200 m-0 rounded-full group p-0 relative  cursor-pointer   bg-emerald-500 mb-6 mx-6 mt-6 active:bg-emerald-600 active:scale-110 border-black border-2 "
                  key={skill}
                >
                  <div className="flex -translate-y-[1px] justify-center"></div>
                  <div className="flex flex-col items-center justify-center ">
                    <div className="h-14 w-14">
                      <img
                        src={`src/assets/icons/devIcons/${skill}.svg`}
                        alt={skill}
                        width={96}
                        height={96}
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
      <div className="h-[1px] bg-gradient-to-r from-teal-500 via-violet-500 to-teal-500  w-full" />
    </section>
  );
};
export default Skills;
