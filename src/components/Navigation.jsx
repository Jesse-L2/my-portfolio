import { hd_Logo } from "../assets/logo";
// import { hamburgerIcon } from "../assets/icons";
import { navLinks } from "../constants/navLinks";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MenuItem";
import { useRef } from "react";
import { useState } from "react";
// import Switch from "./Switch/Switch";

const variants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
  closed: {
    transition: { staggerChildren: 0.15, staggerDirection: -1 },
  },
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleWindowResive = () => {
    // Handle situation where someone toggled nav but switched to fullscreen
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleWindowResive);

  return (
    <header className="absolute w-full padding-x py-8 z-10 background-color: bg-slate-400">
      <nav className="flex justify-between items-center max-container bg-slate-500">
        <a className="rounded-full min-h-[100px] min-w-[100px]" href="/">
          <img
            className="rounded-full"
            src={hd_Logo}
            alt="Logo"
            width={100}
            height={100}
          />
        </a>
        <ul className="flex justify-center items-center gap-20 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="text-xl hover:text-blue-600" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.nav
          className=""
          initial={false}
          animate={isMenuOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div
            className="background absolute w-[300px]  bg-slate-100 bg-transparent "
            variants={sidebar}
          />

          <MenuToggle
            toggle={toggleMenu}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </motion.nav>
        {isMenuOpen && (
          <motion.ul
            className="m-0 p-0 bg-slate-100 flex-column left-0"
            variants={variants}
          >
            {navLinks.map((navLink) => (
              <MenuItem i={navLink.id} key={navLink.id} />
            ))}
          </motion.ul>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
