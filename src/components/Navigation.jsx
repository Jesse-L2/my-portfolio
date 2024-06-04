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
    <header className="">
      <DarkModeSwitch
        className="absolute m-2 top-4 right-7"
        checked={dark}
        onChange={() => darkModeHandler()}
        size={32}
        moonColor="#feda6a"
      />
      <motion.nav
        // Navbar background color
        className=" py-2.5 bg-main-bg dark:bg-dark-bg"
        initial={true}
        animate={isMenuOpen ? "open" : "closed"}
        ref={containerRef}
      >
        <motion.div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img
              className="rounded-full p-1 m-4 hover:animate-bounce"
              src={hd_Logo}
              alt="Jesse Little Logo"
              width={100}
              height={100}
            />
          </a>
          <motion.div className="flex items-center lg:order-2">
            <span className="sr-only">Open main menu</span>

            <MenuToggle
              toggle={toggleMenu}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </motion.div>
          <motion.div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1 mr-16"
            id="mobile-menu-2"
          >
            <motion.ul
              className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 text-2xl font-bold font-montserrat pr-4 gap-y-1 gap-x-1"
              variants={navVariants}
            >
              <motion.li variants={menuItemVariants}>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-blueButterfly-500 rounded bg-transparent dark:text-light-text lg:p-0 lg:border-0 border-b border-gray-700 dark:hover:bg-lightMist-800"
                  aria-current="page"
                >
                  Home
                </a>
              </motion.li>
              {navLinks.map((link) => (
                <motion.li key={link.label} variants={menuItemVariants}>
                  <a
                    href={link.href}
                    className="block py-2 pl-3 pr-4 text-black border-b border-gray-700 hover:bg-gray-200 lg:hover:bg-transparent lg:border-0 lg:hover:text-blueButterfly-500 lg:p-0 dark:text-gray-100 lg:dark:hover:text-white dark:hover:bg-lightMist-800 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
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
