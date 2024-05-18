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
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            View Project
          </a>
          <a
            href={github}
            className="inline-block bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded ml-4"
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
