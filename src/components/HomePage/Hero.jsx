import React from "react";
import bg from "../../assets/homePage/Kashmirimg.png"; // mountain background
// import jcb from "../../assets/homePage/jcb.png"; // JCB image

export default function Hero() {
  return (
    <section
      className="
    relative w-full 
    h-[88vh]       
    sm:h-[75vh]
    md:h-[680px]
    lg:h-[720px]
    flex items-center overflow-hidden
  "
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={bg}
        alt="Kashmir Background"
        className="absolute inset-0 w-full h-full object-fill"
      />

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* MAIN CONTENT */}
      <div
        className="
    relative z-20 w-full 
    px-5 sm:px-10 md:px-14 lg:px-28
    gap-6 items-center
    text-center lg:text-left
  "
      >
        <div
          className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 text-white 
               -mt-6 sm:-mt-10 md:-mt-14 lg:-mt-20"
        >
          {/* MAIN HEADING */}
          <h1
            className="
    text-[38px] 
    sm:text-[80px] 
    md:text-[120px] 
    lg:text-[200px]
    font-black leading-[0.95] tracking-[16px]
  "
          >
            <span
              className="   text-white
    [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0)_66%,transparent_100%)] "
            >
              K
            </span>
            <span
              className="   text-white
    [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0)_65%,transparent_100%)] "
            >
              A
            </span>
            <span
              className="   text-white
     [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0)_65%,transparent_100%)] "
            >
              S
            </span>

            <span
              className="   text-white
     [mask-image:linear-gradient(to_bottom,black_45%,rgba(0,0,0,0)_57%,transparent_100%)] "
            >
              H
            </span>
            <span
              className="   text-white
     [mask-image:linear-gradient(to_bottom,black_45%,rgba(0,0,0,0)_50%,transparent_100%)] "
            >
              MI
            </span>
            <span
              className="   text-white
     [mask-image:linear-gradient(to_bottom,black_25%,rgba(0,0,0,0)_40%,transparent_100%)] "
            >
              R
            </span>
          </h1>

          <h2
            className="
    text-[18px] 
    sm:text-[34px] 
    md:text-[46px] 
    lg:text-[60px]
    font-black leading-none
  "
          >
            ENTERPRISES
          </h2>

          {/* PARAGRAPH */}
          <p
            className="
    max-w-xl mx-auto lg:mx-0
    text-[12.5px] sm:text-base md:text-lg
    text-gray-200 leading-relaxed
  "
          >
            Kashmir Enterprises delivers expert construction, civil, and mining
            solutions, from building complexes and power stations to extracting
            minerals and transporting raw materials. We power infrastructure
            growth with reliability and scale.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2">
            <button
              className="
            px-6 py-3 bg-[#F4B324] text-black 
            font-semibold rounded-full text-sm sm:text-base
            shadow-md transition-all duration-300 
            hover:bg-white hover:shadow-lg
          "
            >
              Lets Talk
            </button>

            <button
              className="
            px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-white
            bg-white/10 backdrop-blur-xl
            border border-white/30
            shadow-md transition-all duration-300
            hover:bg-white hover:text-black
          "
            >
              Our Services
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (OPTIONAL FOR DESKTOP) */}
        <div className="hidden lg:flex justify-end">
          {/* JCB image if needed */}
        </div>
      </div>
    </section>
  );
}
