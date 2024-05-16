import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { navLinks } from "../constants/navLinks";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const getNavLinkByID = (id) => {
  // Helper function to return the right navLink based on i
  return navLinks.find((link) => link.id === id);
};

export const MenuItem = ({ i }) => {
  const style = {};
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
    >
      <a
        href={getNavLinkByID(i).href}
        className="text-xl w-35 h-12 flex-1 flex rounded-[4px] p-4 hover:text-blue-800"
        style={style}
      >
        {getNavLinkByID(i).label}
      </a>
    </motion.li>
  );
};

MenuItem.propTypes = {
  i: PropTypes.number.isRequired,
};
