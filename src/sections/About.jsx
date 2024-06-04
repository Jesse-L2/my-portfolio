const About = () => {
  return (
    <section className="">
      <div className="flex items-center justify-evenly pt-0 pr-4 sm:pr-8 flex-col md:flex-row ">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-montserrat pb-8 md:pb-0">
          <span className="text-light-text">
            Hello, <br></br>I'm Jesse
          </span>
        </h1>
        <img
          src=".\src\assets\images\profile.jpg"
          alt="My Profile Picture"
          className="rounded-full h-48 w-48  md:h-72 md:w-72"
        />
      </div>
    </section>
  );
};

export default About;
