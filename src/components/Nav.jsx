// TODO: Create and add a header logo and place in src/assets/images
// import { headerLogo } from "../assets/images";
// import { hamburgerIcon } from '../assets/icons';

const Nav = () => {
  return (
    <header className="absolute w-full padding-x py-8 z-10 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          {/* <img src={headerLogo} alt="Logo" width={150} height={33} /> */}
        </a>
        <ul className="flex flex-1 justify-center items-center gap-12 max-lg:hidden">
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
