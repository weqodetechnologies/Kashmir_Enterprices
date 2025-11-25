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
      <p className="max-w-6xl text-[#3E3E3E] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
        Got a project in mind? Reach out to us, we’re here to help you build it
        right. Let’s bring your vision to life.
      </p>
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2  mt-10">
        {/* LEFT IMAGES */}
        <div className="relative flex justify-center lg:justify-start shadow-2xl rounded-3xl  ">
          {/* BIG IMAGE */}
          <img
            src={img1}
            alt="project"
            className="rounded-3xl w-full max-w-[800px] h-[320px] sm:h-[380px] md:h-[450px] lg:h-[600px]  object-fill"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white  border-2 border-gray-200 shadow-2xl px-6 py-8 rounded-3xl w-full max-w-[500px] mx-auto ">
          {/* 2 COLUMN NAME */}
          <div className="grid grid-cols-2 gap-4 ">
            <div>
              <label className="text-sm font-semibold text-[#000000]">
                First Name:
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#000000]">
                Last Name:
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          {/* EMAIL */}
          <div className="mt-4">
            <label className="text-sm font-semibold text-[#000000]">
              Email:
            </label>
            <input
              type="email"
              className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* PHONE */}
          <div className="mt-4">
            <label className="text-sm font-semibold text-[#000000]">
              Phone No:
            </label>
            <input
              type="text"
              className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-4">
            <label className="text-sm font-semibold text-[#000000]">
              Message:
            </label>
            <textarea
              rows="4"
              className="w-full mt-1 p-2 border rounded-lg outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          {/* SUBMIT BUTTON */}
          <button className="mt-6 w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
