import React from "react";
import bgImage from "../../assets//homePage/HeroSection.png";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full flex justify-center px-4 sm:px-8 md:px-12 py-8 mb-10">
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
          {/* BUTTONS */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto items-center justify-center">
            <a
              href="/contact"
              className="
      bg-[#F4B324] text-black font-bold 
      px-6 py-3 text-sm           /* ✅ Mobile size */
      sm:px-10 sm:py-4 sm:text-lg /* ✅ Desktop size */
      rounded-full shadow-md transition-all duration-300 
      hover:bg-white hover:shadow-lg
      cursor-pointer
      w-[220px] sm:w-auto        /* ✅ Fixed mobile width */
      text-center
    "
              onClick={() => navigate("/contact#inquiry-form")}
            >
              Contact Us
            </a>

            <a
              className="
      text-white font-bold 
      px-6 py-3 text-sm           /* ✅ Mobile size */
      sm:px-10 sm:py-4 sm:text-lg /* ✅ Desktop size */
      rounded-full
      bg-white/10 backdrop-blur-xl
      border border-white/30 
      shadow-md transition-all duration-300
      hover:bg-white hover:text-black hover:border-white 
      cursor-pointer
      w-[220px] sm:w-auto        /* ✅ Fixed mobile width */
      text-center
    "
              onClick={() => navigate("/services/infrastructure")}
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
