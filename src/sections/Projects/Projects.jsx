/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line react/no-unescaped-entities
import ProjectCard from "./ProjectCard";
import { projectData } from "../../data/projectData";

const Projects = () => {
  return (
    <section className=" text-black dark:bg-gray-900 dark:text-white ">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">My Projects</h2>
          <p className="mt-6">Check out some of the cool things I've built.</p>
        </div>

        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
