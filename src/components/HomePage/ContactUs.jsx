import React from "react";
import img1 from "../../assets/homePage/Construction.png";
// import img2 from "../../assets/homePage/Building2.png";

export default function ContactUs() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-28 py-16 space-y-8">
      {/* HEADING */}
      <h1 className="text-left text-[42px] sm:text-[60px] md:text-[80px] lg:text-[80px] font-black text-[#545353] tracking-[6px] leading-none">
        GET IN TOUCH
      </h1>
      {/* SUBTEXT */}
      <p className="max-w-6xl  text-[#3E3E3E] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        Got a project in mind? Reach out to us, we’re here to help you build it
        right. Let’s bring your vision to life.
      </p>
      {/* MAIN GRID */}
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mt-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative flex justify-center lg:justify-start w-full">
          <img
            src={img1}
            alt="project"
            className="
        rounded-3xl w-full 
        h-[220px] sm:h-[320px] md:h-[400px] lg:h-[560px]
        object-cover shadow-2xl
      "
          />
        </div>

        {/* RIGHT FORM */}
        <div
          className="
      bg-white border border-gray-200 shadow-2xl 
      px-5 sm:px-8 py-7 sm:py-8 
      rounded-3xl w-full 
      max-w-full sm:max-w-[500px] 
      mx-auto
    "
        >
          {/* 2 COLUMN NAME */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-black">
                First Name:
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-black">
                Last Name:
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mt-4">
            <label className="text-sm font-semibold text-black">Email:</label>
            <input
              type="email"
              className="w-full mt-1 p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* PHONE */}
          <div className="mt-4">
            <label className="text-sm font-semibold text-black">
              Phone No:
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-4">
            <label className="text-sm font-semibold text-black">Message:</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-2.5 border rounded-lg outline-none focus:ring-2 focus:ring-black resize-none"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button className="mt-6 w-full bg-black text-white font-semibold py-3 rounded-xl hover:bg-gray-800 transition">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
