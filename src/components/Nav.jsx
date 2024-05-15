// import { hd_Logo } from "../assets/logo";
import { hamburgerIcon } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute w-full padding-x py-8 z-10 background-color: bg-secondary-bg">
      <nav className="flex justify-between items-center max-container">
        <a className="" href="/">
          {/* <img src={hd_Logo} alt="Logo" width={200} height={50} /> */}
        </a>
        <ul className="flex flex-1 justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburgerIcon} alt="Menu" width={44} height={44} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
