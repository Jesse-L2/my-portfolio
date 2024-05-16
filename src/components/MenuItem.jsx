import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { navLinks } from "../constants";

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

const colors = [
  "#FF008C",
  "#D309E1",
  "#9C1AFF",
  "#7700FF",
  "#4400FF",
  "#D308E1",
];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.0 }}
    >
      <div
        className="w-10 h-10 flex-[40px_0] mr-5 rounded-[50%]"
        style={style}
      ></div>
      <div className="w-[200px] h-5 flex-1 rounded-[5px]" style={style} />
      Text
    </motion.li>
  );
};

MenuItem.propTypes = {
  i: PropTypes.number.isRequired,
};
