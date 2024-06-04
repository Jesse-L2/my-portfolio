const About = () => {
  return (
    <section id="about" className="padding dark:bg-dark">
      <div className="flex sm:gap-10 gap-4 flex-col sm:flex-row items-center sm:justify-evenly">
        <div className="mb-6 sm:mb-0 w-full sm:w-1/3 text-center">
          <h1 className="text-6xl font-bold font-montserrat ">
            <span className="dark:text-white text-gray-800">Jesse</span>
            <br></br>
            <span className="dark:text-white text-gray-800 mt-2">Little</span>
            <br></br>
          </h1>
          <h3 className="text-large font-semibold dark:text-light-text text-lightWater-650 mt-2">
            Fullstack Developer and Software Engineer
          </h3>
        </div>
        <div className="sm:w-3/5 w-4/5 max-w-96">
          <img
            src=".\src\assets\images\profile_s.jpg"
            alt="My Profile Picture"
            className="rounded-full "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
