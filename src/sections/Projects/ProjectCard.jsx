import PropTypes from "prop-types";

const ProjectCard = ({ id, title, description, img, tags, link, github }) => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href={id}
          >
            <a href={id}>
              <img className="rounded-t-lg" src={img} alt={title} />
            </a>
            <h2 className="mt-4 text-xl font-bold text-white">{title}</h2>

            <p className="mt-1 text-sm text-gray-300">{description}</p>
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
