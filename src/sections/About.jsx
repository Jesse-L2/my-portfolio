// import { UT_Logo } from "../assets/logo";
const About = () => {
  return (
    <section id="about" className="padding dark:bg-dark bg-second">
      <div className="flex sm:gap-10 gap-4 flex-col sm:flex-row items-center sm:justify-evenly  sm:max-w-[75%] mx-auto">
        <div className="mb-6 sm:mb-0 text-center  sm:w-2/5 w-4/5 ">
          <h1 className="text-5xl sm:text-7xl font-bold font-montserrat">
            <span className="dark:text-white text-black">Jesse</span>
            <br></br>
            <span className="dark:text-white text-black mt-3">Little</span>
            <br></br>
          </h1>
          <h3 className="text-lg  font-semibold dark:text-light-text text-cyan-950 mt-1">
            Fullstack Developer and Software Engineer
          </h3>
        </div>
        <div className="sm:w-2/5 w-4/5 max-w-96 min-w-72">
          <img
            src=".\src\assets\images\profile_s.jpg"
            alt="My Profile Picture"
            className="rounded-full "
          />
        </div>
        {/* <div className="rotated-background bg-slate-500 "></div> */}
      </div>
      {/* <div className="mt-8 flex flex-col mx-auto max-w-screen-xl">
        <div>
          <h1 className="sm:text-4xl text-3xl font-bold dark:text-white  mb-4 font-palanquin mx-auto text-center ">
            Education
          </h1>
          <div className="flex flex-row justify-evenly max-w-[40%] mx-auto">
            <img
              className="w-60 h-30 mx-auto"
              src={UT_Logo}
              alt="The University of Texas at Austin"
            />
            <h3 className="text-large   font-semibold dark:text-white text-black mt-2 content-center ">
              B.S. in Biochemistry
            </h3>
          </div>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default About;
