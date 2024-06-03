const About = () => {
  return (
    <section className="">
      <div className="flex items-center justify-evenly pr-4 sm:pr-8 ">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-montserrat">
          <span className="text-light-text">
            Hello, <br></br>I'm Jesse
          </span>
        </h1>
        <img
          src=".\src\assets\images\profile.jpg"
          alt="Picture of me"
          height="288"
          width="288"
          className="rounded-full object-cover h-24 w-24 sm:h-36 sm:w-36 md:h-48 md:w-48"
        />
      </div>
    </section>
  );
};

export default About;
