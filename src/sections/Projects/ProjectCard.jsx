// import { projectData } from "../../data/projectData";
import PropTypes from "prop-types";

const ProjectCard = ({ id, title, description, img, tags, link, github }) => {
  return (
    <>
      <div className="project__card mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 hover:shadow-xl h-50 object-cover w-1/3">
        <a href={id}>
          <img className="rounded-t-lg" src={img} alt={title} />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-black text-center">
            {title}
          </h5>
          <p className="mb-4 text-base text-black">{description}</p>
        </div>
        <a
          href={link}
          className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500 max-w-[80%]"
        >
          View Project
        </a>
        <a
          href={github}
          className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500 max-w-[80%]"
        >
          Source Code
        </a>
      </div>
    </>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  link: PropTypes.string,
  github: PropTypes.string,
};

export default ProjectCard;
