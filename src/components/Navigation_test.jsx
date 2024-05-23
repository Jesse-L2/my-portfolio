import { hd_Logo } from "../assets/logo";
import { navLinks } from "../constants/navLinks";
// import { motion } from "framer-motion";
// import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
// import { MenuItem } from "./MenuItem";
// import { useRef } from "react";
import { useState } from "react";

const Navigation_test = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleWindowResive = () => {
    // Handle situation where someone toggled nav but switched to fullscreen
    if (window.innerWidth >= 1024) {
      setIsMenuOpen(false);
    }
  };

  window.addEventListener("resize", handleWindowResive);

  return (
    <header>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <img
              className="rounded-full p-1 m-4 hover:animate-bounce"
              src={hd_Logo}
              alt="Jesse Little Logo"
              width={120}
              height={120}
            />
          </a>
          <div className="flex items-center lg:order-2">
            <span className="sr-only">Open main menu</span>

            <MenuToggle
              toggle={toggleMenu}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation_test;
