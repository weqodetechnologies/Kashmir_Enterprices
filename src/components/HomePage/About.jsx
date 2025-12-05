import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AboutImg from "../../assets/homePage/about.png";

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-28 py-16 sm:py-6 md:py-8 lg:py-[100px] gap-8 sm:gap-10">
      {/* HEADING */}
      <h1 className="self-start text-[42px] sm:text-[40px] md:text-[60px] lg:text-[80px] font-black text-[#545353] tracking-[4px] sm:tracking-[6px] leading-tight">
        ABOUT US
      </h1>

      {/* MAIN CARD */}
      <div
        className="
          w-full max-w-7xl 
          bg-black 
          rounded-3xl 
          p-5 sm:p-6 md:p-8 lg:p-10 
          text-white 
          space-y-6 sm:space-y-8
        "
      >
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT YELLOW BOX */}
          <div className="bg-[#FCB716] text-black p-5 sm:p-6 md:p-7 rounded-2xl space-y-3">
            <button className="px-4 py-1 bg-black text-white rounded-full text-xs sm:text-sm md:text-base lg:text-lg">
              ● About us
            </button>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              Crafting Strong Foundations for Your Future
            </h2>

            <p className="text-xs sm:text-sm md:text-base leading-relaxed font-medium">
              We are a trusted construction infrastructure and consultation
              company delivering high-quality residential, commercial, and
              industrial projects with precision and integrity. With a skilled
              team and a commitment to innovation, we turn ideas into durable,
              efficient, and beautifully crafted spaces. From planning to
              execution, we ensure timely delivery, transparent communication,
              and workmanship you can rely on.
            </p>
          </div>

          {/* RIGHT STATS 2×2 GRID */}
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4"
          >
            {/* 1 */}
            <div className="bg-[#545353] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold">
                {inView ? <CountUp end={2} duration={2} /> : "0"}L+
              </h3>
              <p className="text-xs sm:text-sm md:text-base mt-1 font-medium">
                Acrs Land Constructed
              </p>
            </div>

            {/* 2 */}
            <div className="bg-[#545353] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold">
                {inView ? <CountUp end={1} duration={2} /> : "0"}L+
              </h3>
              <p className="text-xs sm:text-sm md:text-base mt-1 font-medium">
                Trees Planted
              </p>
            </div>

            {/* 3 */}
            <div className="bg-[#545353] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold">
                {inView ? <CountUp end={1500} duration={3} /> : "0"}+
              </h3>
              <p className="text-xs sm:text-sm md:text-base mt-1 font-medium">
                Civil Projects
              </p>
            </div>

            {/* 4 */}
            <div className="bg-[#545353] rounded-2xl p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center">
              <h3 className="text-[26px] sm:text-[32px] md:text-[40px] font-bold">
                {inView ? <CountUp end={23} duration={2} /> : "0"}+
              </h3>
              <p className="text-xs sm:text-sm md:text-base mt-1 font-medium">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM IMAGE */}
        <div className="w-full mt-2 sm:mt-4 md:mt-6">
          <img
            src={AboutImg}
            alt="construction"
            className="
              w-full 
              h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 
              object-cover 
              rounded-2xl
            "
          />
        </div>
      </div>
    </section>
  );
}
