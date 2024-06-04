import { facebook, instagram, linkedIn } from "../assets/icons";
const Footer = () => {
  return (
    <footer
      id="contact"
      className=" text-black dark:text-white px-16 py-8   dark:bg-indigoIron-600"
    >
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:max-w-3xl w-full mx-auto">
        <h2 className="text-center md:text-left">© 2024 Jesse Little</h2>
        <ul className="flex flex-wrap gap-8 icons justify-center md:justify-end ">
          {/* <li>
            <img
              src={twitter}
              className="h-10 w-10 opacity-80 hover:opacity-100 transition dark:hover:bg-white"
            ></img>
          </li> */}
          <li>
            <a href="https://www.facebook.com/jesse.little.31/">
              <img
                src={facebook}
                className="h-10 w-10 opacity-90 hover:opacity-100 transition dark:hover:bg-white"
              ></img>
            </a>
          </li>
          <li>
            <img
              src={instagram}
              className="h-10 w-10 opacity-80 hover:opacity-100 transition dark:hover:bg-white"
            ></img>
          </li>
          <li>
            <img
              src={linkedIn}
              className="h-10 w-10 opacity-90 hover:opacity-100 transition dark:hover:bg-gray-300"
            ></img>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
