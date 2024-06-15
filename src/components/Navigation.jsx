import { hd_Logo } from "../assets/logo";
import { navLinks } from "../constants/navLinks";
import { motion } from "framer-motion";
import { menuItemVariants } from "../constants/framerVariants";
import { navVariants } from "../constants/framerVariants";

import { MenuToggle } from "./MenuToggle";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState, useEffect, useRef } from "react";
import "matchmedia-polyfill";

if (
  (window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches) ||
  (window.matchMediaPolyfilled &&
    window.matchMediaPolyfilled("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const containerRef = useRef(null);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleWindowResize = () => {
    // Handle situation where someone toggled nav but switched to fullscreen
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(true);
    }
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleWindowResize);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMenuOpen(false);
    }
  }, []);

  const [dark, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    setDarkMode(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <header className="bg-mainGreen-300 dark:bg-slate-800 min-h-[136px] ">
      <DarkModeSwitch
        className="absolute top-6 right-10"
        checked={dark}
        onChange={() => darkModeHandler()}
        size={32}
        moonColor="#feda6a"
      />
      <img
        className={`absolute rounded-full p-0 m-0 hover:scale-110 transition 300ms translate-x-4 translate-y-5 `}
        src={hd_Logo}
        alt="Jesse Little Logo"
        width={96}
        height={96}
      />
      <motion.nav
        className=""
        initial={true}
        animate={isMenuOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <motion.div className="flex lg:items-center lg:justify-center lg:content-between  max-w-screen-lg px-0 mx-auto no-wrap">
          <motion.div className="">
            <span className="sr-only">Open main menu</span>

            <MenuToggle
              toggle={toggleMenu}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </motion.div>
          <motion.div
            className={` w-full lg:flex lg:justify-center lg:order-1 mr-24 ml-0 lg:mx-0 lg:my-0  lg:translate-x-4  mt-24`}
            id="menu"
          >
            <motion.ul
              className="flex flex-col mt-4 lg:flex-row lg:space-x-6 lg:mt-0 text-2xl font-bold font-montserrat gap-y-1 text-nowrap lg:translate-y-[50px]"
              variants={navVariants}
            >
              <motion.li variants={menuItemVariants}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 bg-transparent dark:text-light-text lg:p-0 lg:border-0 border-b border-gray-700  lg:hover:bg-transparent lg:dark:hover:bg-transparent dark:hover:text-mainGreen-400 lg:dark:hover:text-light-text  lg:hover:underline underline-offset-8 decoration-4 text-accent hover:text-mainBlue-900 lg:hover:text-accent "
                  aria-current="page"
                >
                  Home
                </a>
              </motion.li>
              {navLinks.map((link) => (
                <motion.li
                  key={link.label}
                  variants={menuItemVariants}
                  className=""
                >
                  <a
                    href={link.href}
                    className="block py-2 pl-3 pr-4 text-black border-b border-gray-700  lg:hover:bg-transparent lg:border-0 lg:hover:text-four lg:p-0 dark:text-white  dark:hover:text-mainGreen-300 lg:dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 lg:hover:underline underline-offset-8 decoration-4 hover:text-mainBlue-900 lg:hover:text-black "
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
      </motion.nav>
    </header>
  );
};

export default Navigation;
