import { UT_Logo } from "../assets/logo";

const Education = () => {
  return (
    <section className="padding dark:bg-dark ">
      <div className="mx-auto max-w-screen-xl text-center justify-center items-center">
        <h1 className="sm:text-4xl text-3xl font-bold dark:text-white  mb-4 font-palanquin">
          Education
        </h1>
        <img
          className="items-center justify-center mx-auto"
          src={UT_Logo}
          alt="The University of Texas at Austin"
        />
      </div>
    </section>
  );
};

export default Education;
