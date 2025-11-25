import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Replace this with your image path
import AboutImg from "../../assets/homePage/about.png";

export default function AboutUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-28 py-12 gap-10">
      {/* HEADING */}
      <h1 className="self-start text-[42px] sm:text-[60px] md:text-[80px] lg:text-[100px] font-black text-[#545353] tracking-[6px] leading-none  ">
        ABOUT US
      </h1>

      <div className="w-full max-w-7xl bg-black rounded-3xl p-6 md:p-10 text-white space-y-6">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT YELLOW BOX */}
          <div className="bg-yellow-400 text-black p-6 rounded-2xl space-y-4">
            <button className="px-4 py-1 bg-black text-white rounded-full text-sm">
              ● About us
            </button>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight">
              Crafting Strong Foundations for Your Future
            </h2>

            <p className="text-sm md:text-base leading-relaxed font-medium">
              We are a trusted construction Infrastructure company &
              Consultation company delivering high-quality residential,
              commercial, and industrial projects with precision and integrity.
              With a skilled team and a commitment to innovation, we turn ideas
              into durable, efficient, and beautifully crafted spaces. From
              planning to execution, we ensure timely delivery, transparent
              communication, and workmanship you can rely on.
            </p>
          </div>

          {/* RIGHT STATS 2×2 GRID */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {/* 1 */}
            <div className="bg-[#545353] rounded-2xl p-6 justify-center text-center ">
              <h3 className="text-[60px] font-bold">
                {inView ? <CountUp end={2} duration={2} /> : "0"}L+
              </h3>
              <p className="text-[24px] font-medium mt-1">
                Acrs Land Constructed
              </p>
            </div>

            {/* 2 */}
            <div className="bg-[#545353] rounded-2xl p-6  justify-center text-center">
              <h3 className="text-[60px] font-bold">
                {inView ? <CountUp end={1} duration={2} /> : "0"}L+
              </h3>
              <p className="text-[24px] font-medium mt-1">Trees Planted</p>
            </div>

            {/* 3 */}
            <div className="bg-[#545353] rounded-2xl p-6 justify-center text-center">
              <h3 className="text-[60px] font-bold">
                {inView ? <CountUp end={1500} duration={3} /> : "0"}+
              </h3>
              <p className="text-[24px] mt-1 font-medium ">Civil Projects</p>
            </div>

            {/* 4 */}
            <div className="bg-[#545353] rounded-2xl p-6 justify-center text-center">
              <h3 className="text-[60px] font-bold">
                {inView ? <CountUp end={23} duration={2} /> : "0"}+
              </h3>
              <p className="text-[24px] mt-1 font-medium ">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM IMAGE */}
        <div className="w-full">
          <img
            src={AboutImg}
            alt="construction"
            className="w-full h-[220px] sm:h-[300px] md:h-[350px] lg:h-[420px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
