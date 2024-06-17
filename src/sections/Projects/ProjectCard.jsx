import PropTypes from "prop-types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const ProjectCard = ({ id, title, description, img, tags, link, github }) => {
  return (
    <div className="mx-auto max-w-lg text-center rounded-2xl hover:scale-105 card bg-neutral-900 ">
      <div className="content">
        <a
          className="block rounded-xl p-7 transition  
        "
          href={id}
        >
          <a href={id}>
            <img
              className="rounded-t-2xl rounded-b-sm min-w-full px-0 max-h-60 max-w-60"
              src={img}
              alt={title}
            />
          </a>
          <div className="px-2 pb-2 rounded-xl bg-neutral-800">
            <h2 className="my-2 py-2 text-xl font-bold text-white font-montserrat">
              {title}
            </h2>
            <p className="mt-0 my-1 text-sm text-neutral-100 font-palanquin">
              {description}
            </p>
            <div className="tags mt-4 flex flex-wrap gap-1 justify-center ">
              {tags.map((tag) => (
                <span
                  className="whitespace-nowrap rounded-full bg-white hover:bg-purple-200 px-2.5 py-[3px] text-xs text-purple-800 hover:-translate-y-0.5"
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
                className="mx-2  hover:rounded-md transition shadow-lg  hover:scale-110"
              >
                <GitHubIcon className="text-white hover:text-green-400" />
              </a>
              <a
                href={link}
                aria-label="live view"
                className="mx-2  transition shadow-lg 0 hover:scale-110"
              >
                <LaunchIcon className="text-white hover:text-green-400" />
              </a>
            </div>
          </div>
        </a>
      </div>
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
