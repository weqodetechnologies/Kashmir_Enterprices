import React from "react";
import { useEffect, useState } from "react";
import hero1 from "../../assets/homePage/Kashmirimg.png"; // JCB / Mountain Image
import hero2 from "../../assets/homePage/MosqueImg.png"; // Mosque Image
import { useNavigate } from "react-router-dom";
import heroMobile from "../../assets/homePage/HeroMobileImg.png";

export default function Hero() {
  const slides = [
    {
      image: hero1,
      title: "KASHMIR",
      subtitle: "ENTERPRISES",
      desc: "Kashmir Enterprises delivers expert construction, civil, and mining solutions, from building complexes and power stations to extracting minerals and transporting raw materials. We power infrastructure growth with reliability and scale.",
    },
    {
      image: hero2,
      title: "KASHMIR",
      subtitle: "ENTERPRISES",
      desc: "We shape landmarks, spiritual spaces, and modern infrastructure with precision, strength, and trust. Our work blends tradition with innovation for lasting impact.",
    },
  ];

  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 1000);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
    relative w-full 
    h-[620px] sm:h-[850px] md:h-[620px] lg:h-[720px] xl:h-[920px]
    overflow-hidden
  "
    >
      {/* Desktop Image */}
      <img
        src={slides[active].image}
        alt="hero desktop"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out hidden md:block ${
          fade ? "opacity-100" : "opacity-80"
        }`}
      />

      {/* Mobile Image */}
      <img
        src={heroMobile}
        alt="hero mobile"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out md:hidden ${
          fade ? "opacity-100" : "opacity-100"
        }`}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/10"></div>

      {/* Content */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center  
    px-4 sm:px-10 md:px-16 lg:px-28 
    text-white transition-all duration-[1000ms] ease-in-out ${
      fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`}
      >
        {/* Title */}
        <h1
          className="
        text-[48px] sm:text-[80px] md:text-[90px] lg:text-[140px] xl:text-[180px]
        font-black tracking-wide sm:tracking-[6px] md:tracking-[8px] lg:tracking-[14px]
        leading-tight sm:leading-none
      "
        >
          {slides[active].title}
        </h1>

        {/* Subtitle */}
        <h2
          className="
        text-[24px] sm:text-[30px] md:text-[36px] lg:text-[60px] xl:text-[80px]
        font-bold tracking-wide mt-1 sm:-mt-3 md:-mt-4
      "
        >
          {slides[active].subtitle}
        </h2>

        {/* Description */}
        <p className="mt-3 sm:mt-5 max-w-full sm:max-w-xl md:max-w-2xl text-[13px] sm:text-[16px] md:text-sm lg:text-base xl:text-lg text-white/90 leading-relaxed">
          {slides[active].desc}
        </p>

        {/* Buttons */}
        <div
          className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-4 
                items-center sm:items-start w-full"
        >
          <button
            className="bg-yellow-400 text-black  w-[180px] sm:w-auto   px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            onClick={() => navigate("/contact#inquiry-form")}
          >
            Lets Talk
          </button>

          <button
            className=" w-[180px] sm:w-auto  border border-white/40 px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
            onClick={() => navigate("/services/infrastructure")}
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
