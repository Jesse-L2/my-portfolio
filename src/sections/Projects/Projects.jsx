import ProjectCard from "./ProjectCard";
import { projectData } from "../../data/projectData";

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <p className="text-4xl font-bold mb-8">Projects</p>
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
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
