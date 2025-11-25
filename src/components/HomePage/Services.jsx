import React, { useRef } from "react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import damImg from "../../assets/homePage/DamImg.png";
import Civil from "../../assets/homePage/civil.png";
import mining from "../../assets/homePage/MiningImg.png";
import plant from "../../assets/homePage/Plantation.png";
import Resort from "../../assets/homePage/Resort.png";

export default function Services() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-28 py-16 space-y-8">
      {/* HEADING */}
      <h1
        className="text-left text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] 
                     font-black text-[#545353] tracking-[6px] leading-none"
      >
        SERVICES
      </h1>

      {/* SLIDER WRAPPER */}
      <div className="relative ">
        {/* CARDS SCROLL ROW */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar py-4"
        >
          {/* CARD 1 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[450px] rounded-3xl overflow-hidden relative">
            <img
              src={damImg}
              className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] object-cover"
            />

            {/* TEXT + BUTTON */}
            <div className="absolute bottom-4 left-4 text-white text-[32px] font-semibold">
              Infrastructure & Consultation Firm
            </div>

            <a href="/services/infrastructure">
              <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-md">
                <FiArrowUpRight size={20} />
              </button>
            </a>
          </div>

          {/* CARD 2 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[450px] rounded-3xl overflow-hidden relative">
            <img
              src={Civil}
              className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]  object-fill"
            />

            {/* TEXT + BUTTON */}
            <div className="absolute bottom-4 left-4 text-white text-[32px] font-semibold">
              Civil Construction
            </div>

            <a href="/services/civil">
              <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-md">
                <FiArrowUpRight size={20} />
              </button>
            </a>
          </div>
          {/* CARD 3 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[450px] rounded-3xl overflow-hidden relative">
            <img
              src={mining}
              className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]  object-fill"
            />

            {/* TEXT + BUTTON */}
            <div className="absolute bottom-4 left-4 text-white text-[32px] font-semibold">
              Mining Works
            </div>

            <a href="/services/civil">
              <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-md">
                <FiArrowUpRight size={20} />
              </button>
            </a>
          </div>

          {/* CARD 4 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[450px] rounded-3xl overflow-hidden relative">
            <img
              src={plant}
              className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]  object-fill"
            />

            {/* TEXT + BUTTON */}
            <div className="absolute bottom-4 left-4 text-white text-[32px] font-semibold">
              Plantation
            </div>

            <a href="/services/civil">
              <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-md">
                <FiArrowUpRight size={20} />
              </button>
            </a>
          </div>
          {/* CARD 5 */}
          <div className="min-w-[330px] sm:min-w-[380px] md:min-w-[450px] rounded-3xl overflow-hidden relative">
            <img
              src={Resort}
              className="w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px]  object-fill"
            />

            {/* TEXT + BUTTON */}
            <div className="absolute bottom-4 left-4 text-white text-[32px] font-semibold">
              Resort Construction
            </div>

            <a href="/services/civil">
              <button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full shadow-md">
                <FiArrowUpRight size={20} />
              </button>
            </a>
          </div>
        </div>

        {/* LEFT RIGHT BUTTONS */}
        <div className="flex justify-end gap-6 mt-6">
          <button
            onClick={scrollLeft}
            className="p-3 bg-white text-black rounded-full hover:bg-black border border-black hover:text-white cursor-pointer"
          >
            <FiChevronLeft size={24} />
          </button>

          <button
            onClick={scrollRight}
            className="p-3 bg-white text-black rounded-full hover:bg-black border border-black hover:text-white cursor-pointer"
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
