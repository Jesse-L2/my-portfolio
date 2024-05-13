// TODO: Create and add a header logo and place in src/assets/images
import { hd_Logo } from "../assets/logo";
import { hamburgerIcon } from "../assets/icons";

const Nav = () => {
  return (
    <header className="absolute w-full padding-x py-8 z-10 ">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={hd_Logo} alt="Logo" width={150} height={33} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-12 max-lg:hidden">
          <li>test</li>
          <li>test 2</li>
          <li>test 3</li>
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburgerIcon} alt="Hamburger" width={44} height={44} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
