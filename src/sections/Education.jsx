import { UT_Logo } from "../assets/logo";

const Education = () => {
  return (
    <section className="mt-0 padding dark:bg-dark ">
      <div className="mx-auto max-w-screen-xl px-4 text-center justify-center items-center">
        <h1 className="text-3xl font-semibold text-white  mb-6">Education</h1>
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
