import React, { useRef } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Import your images
import project1 from "../../assets/homePage/RatnagitiRailwayStation.png";
import project2 from "../../assets/homePage/Building.png";
import project3 from "../../assets/homePage/MiningProject.png";
import project4 from "../../assets/homePage/Road.png";

export default function Projects() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-12 space-y-8">
      {/* HEADING */}
      <h1 className="px-4 sm:px-8 md:px-12 lg:px-28 text-left text-[42px] sm:text-[60px] md:text-[80px] lg:text-[80px]  font-black text-[#545353] tracking-[6px] leading-none">
        PROJECTS
      </h1>

      {/* SUBTEXT */}
      <p className="px-4 sm:px-8 md:px-12 lg:px-18  max-w-4xl text-[#3E3E3E] text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed font-medium ">
        We handle a wide range of construction projects with a focus on quality,
        safety, and timely delivery. Using skilled teams and modern methods, we
        ensure every project is built strong, efficient, and ready to serve its
        purpose for years.
      </p>

      {/* MAIN WRAPPER */}
      <div className="relative w-full">
        {/* HORIZONTAL SCROLL */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll scroll-smooth no-scrollbar pb-4"
        >
          {/* CARD 1 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[400px] lg:min-w-[400px] bg-white rounded-[28px] overflow-hidden shadow-md">
            {/* IMAGE */}
            <img
              src={project1}
              className="w-full h-[180px] sm:h-[180px] md:h-[200px] lg:h-[250px]  object-cover"
            />

            {/* CONTENT */}
            <div className="bg-black text-white p-6 rounded-b-[28px] space-y-4">
              <h2 className="text-xl font-semibold">
                Ratnagiri Railway station
              </h2>

              <p className="text-sm leading-relaxed text-gray-300 font-regular  ">
                Built key civil and infrastructure works at Ratnagiri Railway
                Station, improving passenger flow and upgrading essential
                facilities.
              </p>

              <button className="flex items-center justify-center gap-2 bg-[#FFC727] text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-400 transition">
                View Project <FiArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[400px] lg:min-w-[400px] bg-white rounded-[28px] overflow-hidden shadow-md">
            {/* IMAGE */}
            <img
              src={project2}
              className="w-full h-[180px] sm:h-[180px] md:h-[200px] lg:h-[250px]  object-cover"
            />

            {/* CONTENT */}
            <div className="bg-black text-white p-6 rounded-b-[28px] space-y-4">
              <h2 className="text-xl font-semibold">
                Shanti Nagar Real Estate
              </h2>

              <p className="text-sm leading-relaxed text-gray-300 font-regular">
                Shanti Nagar’s real estate scene has this calm-but-connected
                vibe that people really love. It’s the kind of locality you get
                a mix of old.
              </p>

              <button className="flex items-center justify-center gap-2 bg-[#FFC727] text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-400 transition">
                View Project <FiArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[400px] lg:min-w-[400px] bg-white rounded-[28px] overflow-hidden shadow-md">
            {/* IMAGE */}
            <img
              src={project3}
              className="w-full h-[180px] sm:h-[180px] md:h-[200px] lg:h-[250px]  object-cover"
            />

            {/* CONTENT */}
            <div className="bg-black text-white p-6 rounded-b-[28px] space-y-4">
              <h2 className="text-xl font-semibold">Iron Ore Mining</h2>

              <p className="text-sm leading-relaxed text-gray-300 font-regular">
                Iron ore mining involves locating ore deposits, extracting the
                rock, and processing it to improve iron content.
              </p>

              <button className="flex items-center justify-center gap-2 bg-[#FFC727] text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-400 transition">
                View Project <FiArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[400px] lg:min-w-[400px] bg-white rounded-[28px] overflow-hidden shadow-md">
            {/* IMAGE */}
            <img
              src={project4}
              className="w-full h-[180px] sm:h-[180px] md:h-[200px] lg:h-[250px]  object-cover"
            />

            {/* CONTENT */}
            <div className="bg-black text-white p-6 rounded-b-[28px] space-y-4">
              <h2 className="text-xl font-semibold">Roadside Plantation</h2>

              <p className="text-sm leading-relaxed text-gray-300 font-regular">
                Roadside plantation is all about planting trees and greenery
                along highways and streets to make travel safer, cooler, and
                more pleasant.
              </p>

              <button className="flex items-center justify-center gap-2 bg-[#FFC727] text-black font-medium px-6 py-2 rounded-full hover:bg-yellow-400 transition">
                View Project <FiArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* LEFT & RIGHT BUTTONS */}
        <div className="flex justify-end gap-6 mt-6">
          <button
            onClick={scrollLeft}
            className="p-3 bg-white text-black rounded-full hover:bg-black border border-black hover:text-white cursor-pointer"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            onClick={scrollRight}
            className="p-3 bg-white text-black rounded-full hover:bg-black border border-black hover:text-white cursor-pointer"
          >
            <FiChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
