import { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="p-6 rounded-xl lg:col-span-2">
      <form id="contact" onSubmit={onSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              required
              className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              required
              className="px-2 py-3 bg-white w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
            />
          </div>
          <div className="relative flex items-center">
            <input
              placeholder="Phone No."
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
              name="phone"
              required
            />
          </div>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className="px-2 py-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
            />
          </div>
          <div className="relative flex items-center sm:col-span-2">
            <textarea
              placeholder="Write Message"
              className="px-2 pt-3 bg-white text-black w-full text-sm border-b-2 focus:border-[#011c2b] outline-none"
              name="message"
              required
            ></textarea>
          </div>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded px-4 py-2.5 font-semibold  text-white hover:bg-cyan-800 bg-cyan-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              className="mr-2"
              viewBox="0 0 548.244 548.244"
            >
              <path
                fillRule="evenodd"
                d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                clipRule="evenodd"
                data-original="#000000"
              />
            </svg>
            Send Message
          </button>
        </div>
      </form>
      <span className="text-gray-300">{result}</span>
    </div>
  );
}
