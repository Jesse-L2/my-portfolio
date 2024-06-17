/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import ProjectCard from "./ProjectCard";
import { projectData } from "../../data/projectData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-6 sm:px-3 py-6 text-black dark:text-white dark:bg-slate-800 bg-blue-300 "
    >
      <div className="mx-auto max-w-screen-xl ">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl font-montserrat">
            My Projects
          </h2>
          <p className="mt-6 text-md">
            Check out some of the cool things I've built.
          </p>
        </div>

        <div className="mx-auto max-w-screen-xl px-2 py-6 sm:px-2 sm:py-12 lg:px-8 lg:py-12 ">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 min-[1200px]:grid-cols-3">
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                img={project.img}
                tags={project.tags}
                link={project.link}
                github={project.github}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
