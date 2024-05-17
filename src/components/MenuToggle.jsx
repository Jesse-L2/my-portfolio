import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle, isMenuOpen, setIsMenuOpen }) => (
  <button
    className="hidden max-lg:block cursor-pointer w-[50px] h-[50px] rounded-[50%] border-[none] top-[5rem] absolute content-end self-end left-[80%]"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <svg width="100" height="100" viewBox="0 0 30 30">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

MenuToggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};
