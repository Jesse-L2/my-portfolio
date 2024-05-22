import { UT_Logo } from "../assets/logo";

const Education = () => {
  return (
    <section className="mt-4 ">
      <div>
        <h1>Education</h1>
        <img
          className="bg-slate-200"
          src={UT_Logo}
          alt="The University of Texas at Austin"
        />
      </div>
    </section>
  );
};

export default Education;
