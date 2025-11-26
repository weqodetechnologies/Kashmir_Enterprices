import React from "react";
import aboutBg from "../../assets/AboutPage/AboutHeroImg.png";
import aboutImg from "../../assets/AboutPage/AboutImg.png";
import visionImg from "../../assets/AboutPage/Vision.png";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutHero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="w-full">
      <div
        className="
          relative w-full 
          h-[50vh] sm:h-[30vh] md:h-[65vh] lg:h-[80vh]
          flex items-end justify-end px-5 sm:px-10 md:px-14 lg:px-20
    pb-6 sm:pb-10 md:pb-12 lg:pb-1 mb-[80px]
        "
      >
        {/* Background Image */}
        <img
          src={aboutBg}
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Centered Title */}
        <h1
          className="
    relative z-10 
    text-white font-black tracking-widest text-right
    text-[36px] sm:text-[96px] md:text-[72px] lg:text-[132px]
  "
        >
          ABOUT US
        </h1>
      </div>

      <div ref={ref} className="w-full flex justify-center px-4 mt-8">
        <div
          className="
      bg-black text-white 
      rounded-2xl shadow-xl
      grid grid-cols-2 md:grid-cols-4   /* ✅ 2 on mobile, 4 on desktop */
      gap-6 sm:gap-8
      px-5 sm:px-8
      py-8 sm:py-12 md:py-16
      max-w-7xl w-full
      mb-[80px]
    "
        >
          {/* 1 */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
              {inView ? <CountUp end={2} duration={2} /> : 0}L+
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
              Acres Land Constructed
            </p>
          </div>

          {/* 2 */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
              {inView ? <CountUp end={1} duration={2} /> : 0}L+
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
              Tree Planted
            </p>
          </div>

          {/* 3 */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
              {inView ? <CountUp end={1500} duration={2.5} /> : 0}+
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
              Civil Projects
            </p>
          </div>

          {/* 4 */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">
              {inView ? <CountUp end={23} duration={2} /> : 0}+
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
              Years of Experience
            </p>
          </div>
        </div>
      </div>

      {/* ================= CONTENT SECTION ================= */}
      <div
        className="
          w-full px-4 sm:px-8 md:px-12 lg:px-28 py-16 space-y-8
          grid grid-cols-1 lg:grid-cols-2 
          items-center
        "
      >
        {/* LEFT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={aboutImg}
            alt="About Work"
            className="
              w-full max-w-sm sm:max-w-md md:max-w-lg 
              h-[260px] sm:h-[320px] md:h-[380px] lg:h-[450px]
              object-cover rounded-2xl shadow-lg
            "
          />
        </div>

        {/* RIGHT TEXT */}
        <div className="space-y-5 text-center lg:text-left">
          <span className="inline-block bg-black text-white text-xs sm:text-sm md:text-base lg:text-lg  px-4 py-1 rounded-full">
            ● About Us
          </span>

          <h2
            className="
              text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px]
              font-bold leading-tight
            "
          >
            Crafting Strong Foundations for Your Future
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            We are a trusted construction infrastructure & consultation company
            delivering high-quality residential, commercial, and industrial
            projects with precision and integrity. With a skilled team and a
            commitment to innovation, we turn ideas into durable, efficient, and
            beautifully crafted spaces. From planning to execution, we ensure
            timely delivery, transparent communication, and workmanship you can
            rely on.
          </p>
        </div>
      </div>
      {/* ================= VISION SECTION ================= */}
      <div className="w-full flex justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        <div
          className="
          bg-[#FFC21A]
          w-full max-w-7xl
          rounded-2xl sm:rounded-3xl
          p-4 sm:p-6 md:p-8
          grid grid-cols-1 sm:grid-cols-2
          gap-6 sm:gap-8
          items-center
          shadow-xl
        "
        >
          {/* LEFT IMAGE */}
          <div className="w-full flex justify-center sm:justify-start">
            <img
              src={visionImg}
              alt="Vision"
              className="
              w-full 
              h-[200px] sm:h-[240px] md:h-[260px] lg:h-[480px]
              object-cover
              rounded-xl sm:rounded-2xl
            "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-4 sm:space-y-5 text-black text-center sm:text-left lg:text-left">
            {/* VISION */}
            <div>
              <h3 className="text-lg sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold">
                Vision
              </h3>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl font-regular leading-relaxed mt-1">
                To be a leading construction company known for delivering
                innovative, sustainable, and high-quality infrastructure that
                shapes stronger and more progressive communities.
              </p>
            </div>

            {/* MISSION */}
            <div>
              <h3 className="text-lg sm:text-[28px] md:text-[32px] lg:text-[36px] font-bold">
                Mission
              </h3>
              <p className="text-xs sm:text-base md:text-lg lg:text-xl font-regular leading-relaxed mt-1">
                To provide reliable, safe, and efficient construction services
                across residential, commercial, industrial, and infrastructure
                sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from 'react'

// export default function AboutHero() {
//   return (
//     <div>
//       dsf
//     </div>
//   )
// }
