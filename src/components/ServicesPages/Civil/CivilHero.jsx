import React from "react";
import bg from "../../../assets/Civil/CivilHeroImg.png";

export default function CivilHero() {
  return (
    <section
      className="
        relative w-full 
        h-[420px] sm:h-[620px] md:h-[720px] lg:h-[820px]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <img
        src={bg}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/*  Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/*  CONTENT WRAPPER */}
      <div
        className="relative z-10 w-full h-full px-4 sm:px-10 md:px-16 lg:px-28 
                flex flex-col justify-end items-start "
      >
        {/*  TOP TITLE NOW AT BOTTOM */}
        <div className="pb-16 sm:pt-14 md:pt-18 lg:pb-10 relative text-white">
          <h1
            className="
        text-white font-black leading-none
        text-[40px] sm:text-[80px] md:text-[120px] lg:text-[120px]
      "
          >
            CIVIL
            <br />
            CONSTRUCTION
          </h1>

          <div className="max-w-7xl mt-4">
            <p
              className="
          text-xs sm:text-sm md:text-base lg:text-[20px]  
          text-gray-200 leading-relaxed 
        "
            >
              We carry out civil construction work that is strong, reliable, and
              built to last. From roads and buildings to public facilities, we
              focus on quality and safety at every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
