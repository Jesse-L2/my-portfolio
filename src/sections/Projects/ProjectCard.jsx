// import { projectData } from "../../data/projectData";
import PropTypes from "prop-types";

const ProjectCard = ({ id, title, description, img, tags, link, github }) => {
  return (
    <>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
        <div className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 hover:shadow-xl min-w-40">
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
            className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
          >
            View Project
          </a>
          <a
            href={github}
            className="inline-block rounded border border-current px-8 py-3 text-sm font-medium text-indigo-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-indigo-500"
          >
            Source Code
          </a>
        </div>
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
