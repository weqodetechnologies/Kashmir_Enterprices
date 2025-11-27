import React from "react";
import bgImage from "../../assets//homePage/HeroSection.png";

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 py-16">
      <div
        className="
      relative w-full max-w-7xl 
      rounded-[35px] overflow-hidden shadow-xl
      h-[350px] sm:h-[350px] md:h-[450px] lg:h-[550px]
    "
      >
        {/* BG IMAGE */}
        <img
          src={bgImage}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CONTENT */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-snug max-w-3xl">
            To make Smarter, Stronger <br /> infrastructure
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-2xl text-gray-200">
            Get expert guidance to plan, design, and execute high-quality
            infrastructure with confidence.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <a
              href="/contact"
              className="bg-[#F4B324] text-black font-bold px-10 py-4 rounded-full text-lg shadow-md transition-all duration-300 hover:bg-white hover:text:shadow-lg  cursor-pointer"
            >
              Contact Us
            </a>

            <a
              href="/services"
              className="px-10 py-4 rounded-full text-lg font-bold text-white 
               bg-white/10 backdrop-blur-xl
               border border-white/30 
               shadow-md transition-all duration-300
               hover:bg-white hover:text-black hover:border-white cursor-pointer"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
