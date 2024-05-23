import { hd_Logo } from "../assets/logo";
import { navLinks } from "../constants/navLinks";
import { motion } from "framer-motion";
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
    <header className="absolute w-full padding-x py-6 z-10 bg-white ">
      <motion.nav
        className="flex max-container"
        style={{
          className: isMenuOpen ? "W" : "justify-between",
        }}
      >
        <a className="rounded-full min-h-24 min-w-24" href="/">
          <img
            className="rounded-full p-1 m-4 hover:animate-bounce "
            src={hd_Logo}
            alt="Logo"
            width={120}
            height={120}
          />
        </a>
        <ul className="flex justify-center items-center gap-20 max-lg:hidden bold">
          {navLinks.map((link) => (
            <li className="" key={link.label}>
              <a className="text-2xl hover:text-blue-600" href={link.href}>
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
          style={{
            className: isMenuOpen
              ? "justify-self-center left-[50%] right-[50%]"
              : "justify-between",
          }}
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
            className="m-4 p-4 bg-slate-100 flex-column left-[50%] right-[50%] justify-center top-20 "
            variants={variants}
          >
            {navLinks.map((navLink) => (
              <MenuItem i={navLink.id} key={navLink.id} />
            ))}
          </motion.ul>
        )}
      </motion.nav>
    </header>
  );
};

export default Navigation;
