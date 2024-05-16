import { hd_Logo } from "../assets/logo";
// import { hamburgerIcon } from "../assets/icons";
import { navLinks } from "../constants/navLinks";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { MenuItem } from "./MenuItem";
import { useRef } from "react";
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
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <header className="absolute w-full padding-x py-8 z-10 background-color: bg-slate-400">
      <nav className="flex justify-between items-center max-container">
        <ul className="flex justify-center items-center gap-20 max-lg:hidden">
          <a className="rounded-full" href="/">
            <img
              className="rounded-full"
              src={hd_Logo}
              alt="Logo"
              width={150}
              height={100}
            />
          </a>

          {navLinks.map((link) => (
            <li key={link.label}>
              <a className="text-xl hover:text-blue-800" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <motion.div
            className="absolute w-[300px] left-0 inset-y-0 background-color: #fff"
            variants={sidebar}
          />

          <MenuToggle className="padding" toggle={() => toggleOpen()} />
        </motion.nav>

        <motion.ul variants={variants}>
          {navLinks.map((navLink) => (
            <MenuItem i={navLink.id} key={navLink.id} />
          ))}
        </motion.ul>
      </nav>
      <div>{/* <Switch /> */}</div>
    </header>
  );
};

export default Navigation;
