import React from "react";
import Kashmir from "../../assets/homePage/Kashmirimg.png";
import jcb from "../../assets/homePage/jcb.png";
import Mountains from "../../assets/homePage/Mountain.png";

export default function Hero() {
  return (
    <section
      className={`relative w-full min-h-screen flex  overflow-hidden`}
      style={{ height: "100dvh", width: "99dvw" }}
    >
      <img
        src={Kashmir}
        alt="background"
        className=" w-full h-full object-fill object-center"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-black/10 to-black/30" /> */}
      <div className="absolute z-20">
        <h1 className="text-white text-[100px] sm:text-[160px] md:text-[180px] lg:text-[200px]  font-black super-bold tracking-[20px] text-center px-25">
          KASHMIR
        </h1>
      </div>
      <img
        src={Mountains}
        alt="overlay"
        className="absolute z-30 w-full h-full object:fill object-fill bottom-2 "
      />

      <img
        src={jcb}
        alt="overlay"
        className="absolute z-50 w-[100px] h-[200px] sm:w-[500px] sm:h-[400px] lg:w-[650px] lg:h-[456px] 
                   left-[1024px] transform -translate-x-1/2 top-[300px]
                   rounded-xl object-fill"
      />
      <div className="absolute z-40 top-[200px]">
        <h2 className="text-white text-[100px] sm:text-[80px] md:text-[100px] lg:text-[128px] font-black super-bold  text-start px-30">
          ENTERPRISES
        </h2>
      </div>

      <p className="absolute z-40 top-[400px] w-[780px] text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold  text-start px-30">
        Kashmir Enterprises delivers expert construction, civil, and mining
        solutions, from building complexes and power stations to extracting
        minerals and transporting raw materials. We power infrastructure growth
        with reliability and scale.
      </p>

      <div className="flex items-center gap-6 z-50 absolute bottom-[50px] left-1/5 transform -translate-x-1/2">
        <button className="bg-[#F4B324] text-black font-semibold px-10 py-4 rounded-full text-lg shadow-md transition-all duration-300 hover:bg-white hover:text:shadow-lg  cursor-pointer">
          Lets Talk
        </button>

        {/* Secondary Glass Button */}
        <button
          className="px-10 py-4 rounded-full text-lg font-semibold text-white 
               bg-white/10 backdrop-blur-xl
               border border-white/30 
               shadow-md transition-all duration-300
               hover:bg-white hover:text-black hover:border-white cursor-pointer"
        >
          Our Services
        </button>
      </div>
    </section>
  );
}
