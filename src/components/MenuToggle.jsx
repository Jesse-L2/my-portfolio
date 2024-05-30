import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={
      document.body.classList.contains("dark")
        ? "hsl(0, 0%, 100%)"
        : "hsl(0, 0%, 15%)"
    }
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ isMenuOpen, setIsMenuOpen }) => (
  <button
    data-collapse-toggle="mobile-menu"
    type="button"
    className="inline-flex items-center p-4 rounded-lg lg:hidden mt-12 "
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    <svg width="36" height="36" viewBox="0 0 24 24">
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
        transition={{ duration: 0.15 }}
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
