import React from "react";
import bg from "../../../assets/Minig/mainImg.png";

function HeroMinig() {
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
        <div className="pt-4 sm:pt-2 md:pt-18 lg:pt-30 relative text-white h-screen  ">
          <h1
            className="
              text-white font-black leading-44 text-end
              text-[50px] sm:text-[100px] md:text-[120px] lg:text-[154px] 
             
            "
          >
            MINING
          </h1>
          <h1
            className="
              text-white font-black leading-8 md:leading-40  text-end
              text-[40px] sm:text-[80px] md:text-[86px] lg:text-[100px] mt-[-52px] mb-[146px]            
            "
          >
            WORKS
          </h1>
          <div className="absolute bottom-4 left-0 right-0 max-w-10xl mx-auto sm:text-center lg:text-center">
            <p
              className="
        text-xs sm:text-sm md:text-base lg:text-lg  
        text-gray-200 leading-relaxed text-justify
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

export default HeroMinig;
