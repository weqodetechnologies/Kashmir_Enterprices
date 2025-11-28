import React from "react";
import bg from "../../../assets/Infrastructure/Infrastructure.png";

function InfraHero() {
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
      {/* <div className="absolute inset-0 bg-black/20"></div> */}

      {/*  CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full px-4 sm:px-10 md:px-16 lg:px-28 flex flex-col justify-between">
        {/*  TOP TITLE */}
        <div className="pt-16 sm:pt-14 md:pt-18 lg:pt-20 relative text-white  ">
          <h1
            className="
              text-white font-black leading-44
              text-[40px] sm:text-[80px] md:text-[120px] lg:text-[140px] 
             
            "
          >
            INFRASTRUCTURE
          </h1>
          <h1
            className="
              text-white font-black 
              text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px] mt-[-32px] mb-4            
            "
          >
            & CONSULTATION SERVICES
          </h1>
          <div className=" max-w-5xl">
            <p
              className="
              text-xs sm:text-sm md:text-base lg:text-lg 
              text-gray-200 leading-relaxed
            "
            >
              Whether it’s mining, infrastructure, civil construction, or
              consultation, we’re here to support your project with reliable
              expertise and on-ground experience. Reach out to us for inquiries,
              partnerships, quotations, or project discussions — our team will
              get back to you quickly.
            </p>
          </div>
        </div>

        {/*  BOTTOM PARAGRAPH */}
      </div>
    </section>
  );
}

export default InfraHero;
