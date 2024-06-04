import { UT_Logo } from "../assets/logo";

const Education = () => {
  return (
    <section className="mt-4 padding">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-12 text-center">
        <h1 className="text-3xl font-semibold text-white">Education</h1>
        <img
          className=""
          src={UT_Logo}
          alt="The University of Texas at Austin"
        />
      </div>
    </section>
  );
};

export default Education;
