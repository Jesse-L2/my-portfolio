import { UT_Logo } from "../assets/logo";

const Education = () => {
  return (
    <section className="mt-4">
      <div>
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
