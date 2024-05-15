import { UT_Logo } from "../assets/logo";

const Education = () => {
  return (
    <section>
      <div>
        <h2>Education</h2>
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
