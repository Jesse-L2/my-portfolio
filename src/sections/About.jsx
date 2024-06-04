const About = () => {
  return (
    <section className="padding dark:bg-dark">
      <div className="flex items-center justify-evenly pt-0 pr-4 sm:pr-8 flex-col md:flex-row ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-montserrat pb-0">
          <span className="text-light-text">
            Hello, <br></br>I'm Jesse
          </span>
        </h1>
        <img
          src=".\src\assets\images\profile_s.jpg"
          alt="My Profile Picture"
          className="rounded-full square mx-auto p-12 max-w-96 max-h-96"
        />
      </div>
    </section>
  );
};

export default About;
