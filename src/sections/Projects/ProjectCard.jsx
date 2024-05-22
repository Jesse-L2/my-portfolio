import PropTypes from "prop-types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({ id, title, description, img, tags, link, github }) => {
  return (
    <div className="mx-auto max-w-lg text-center">
      <a
        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
        href={id}
      >
        <a href={id}>
          <img
            className="rounded-t-lg min-w-full px-0 "
            src={img}
            alt={title}
          />
        </a>
        <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>
        <p className="mt-1 text-sm text-gray-300">{description}</p>
        <div className="tags mt-2 mx-auto gap-2 justify-center">
          <ul>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="flex mt-2 mx-auto gap-2 justify-center">
          <a
            href={github}
            aria-label="source code"
            className=" mx-2 hover:bg-gray-800 hover:rounded-md transition shadow-lg "
          >
            <GitHubIcon />
          </a>
          <a
            href={link}
            aria-label="live view"
            className="mx-2 hover:bg-gray-800 transition shadow-lg"
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
