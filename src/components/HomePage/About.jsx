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
    <section className="w-full flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-28 py-28 gap-10">
      {/* HEADING */}
      <h1 className="self-start text-[42px] sm:text-[60px] md:text-[60px] lg:text-[80px] font-black text-[#545353] tracking-[6px] leading-none  ">
        ABOUT US
      </h1>

      <div
        className="w-full  max-w-7xl  h-[88vh]       
    sm:h-[75vh]
    md:h-[450px]
    lg:h-[660px]  bg-black rounded-3xl p-6 md:p-10 lg:p-8  text-white space-y-6"
      >
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* LEFT YELLOW BOX */}
          <div className="bg-[#FCB716] text-black p-6 rounded-2xl space-y-1">
            <button className="px-4 py-1 bg-black text-white rounded-full text-sm sm:text-sm md:text-base lg:text-lg ">
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
              <h3 className="text-[40px] font-bold">
                {inView ? <CountUp end={2} duration={2} /> : "0"}L+
              </h3>
              <p className="text-[20px] font-medium mt-1">
                Acrs Land Constructed
              </p>
            </div>

            {/* 2 */}
            <div className="bg-[#545353] rounded-2xl p-6  justify-center text-center">
              <h3 className="text-[40px] font-bold">
                {inView ? <CountUp end={1} duration={2} /> : "0"}L+
              </h3>
              <p className="text-[20px] font-medium mt-1">Trees Planted</p>
            </div>

            {/* 3 */}
            <div className="bg-[#545353] rounded-2xl p-6 justify-center text-center">
              <h3 className="text-[40px] font-bold">
                {inView ? <CountUp end={1500} duration={3} /> : "0"}+
              </h3>
              <p className="text-[20px] mt-1 font-medium ">Civil Projects</p>
            </div>

            {/* 4 */}
            <div className="bg-[#545353] rounded-2xl p-6 justify-center text-center">
              <h3 className="text-[40px] font-bold">
                {inView ? <CountUp end={23} duration={2} /> : "0"}+
              </h3>
              <p className="text-[20px] mt-1 font-medium ">
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
            className="w-full h-[220px] sm:h-[100px] md:h-[250px] lg:h-[220px] object-fill rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
