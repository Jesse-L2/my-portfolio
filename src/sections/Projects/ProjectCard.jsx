import PropTypes from "prop-types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({ id, title, description, img, tags, link, github }) => {
  return (
    <div className="card mx-auto max-w-lg text-center hover:scale-105 rounded-xl ">
      <a
        className="block rounded-xl  p-8 shadow-xl transition  hover:shadow-gray-500/10 hover:ring-1 focus:outline-none focus:ring "
        href={id}
      >
        <a href={id}>
          <img
            className="rounded-t-lg min-w-full px-0 max-h-60 max-w-60"
            src={img}
            alt={title}
          />
        </a>
        <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
        <p className="mt-1 text-sm text-gray-300">{description}</p>
        <div className="tags mt-4 flex flex-wrap gap-1 justify-center ">
          {tags.map((tag) => (
            <span
              className="whitespace-nowrap rounded-full bg-white hover:bg-purple-200 px-2.5 py-0.5 text-xs text-purple-800 hover:-translate-y-0.5"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex mt-2 mx-auto gap-2 justify-center">
          <a
            href={github}
            aria-label="source code"
            className=" mx-2 hover:bg-gray-800 hover:rounded-md transition shadow-lg hover:text-green-400 hover:scale-110"
          >
            <GitHubIcon />
          </a>
          <a
            href={link}
            aria-label="live view"
            className="mx-2 hover:bg-gray-800 transition shadow-lg hover:text-green-400 hover:scale-110"
          >
            <LaunchIcon />
          </a>
        </div>
      </a>
    </div>
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
