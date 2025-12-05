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
    h-[850px]  sm:h-[850px]  md:h-[620px] lg:h-[720px] xl:h-[920px]
    overflow-hidden
  "
    >
      <img
        src={slides[active].image}
        alt="hero desktop"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out md:block ${
          fade ? "opacity-100" : "opacity-0"
        } hidden`}
      />

      <img
        src={heroMobile}
        alt="hero mobile"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1000ms] ease-in-out md:hidden ${
          fade ? "opacity-100" : "opacity-100"
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/30 to-black/10"></div>

      <div
        className={`relative z-10 h-full flex flex-col justify-start sm:justify-center  
    px-4 sm:px-10 md:px-16 lg:px-28 
    text-white transition-all duration-[1000ms] ease-in-out ${
      fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`}
      >
        <h1
          className="
        text-[36px] sm:text-[70px] md:text-[90px] lg:text-[140px] xl:text-[180px]
        font-black tracking-[4px] sm:tracking-[6px] md:tracking-[8px] lg:tracking-[14px] mt-2 sm:mt-8 
        leading-none
        [mask-image:linear-gradient(to_bottom,black_50%,rgba(0,0,0,0)_95%,transparent_100%)]
      "
        >
          {slides[active].title}
        </h1>

        <h2
          className="
        text-[20px] sm:text-[30px] md:text-[36px] lg:text-[60px] xl:text-[80px]
        font-bold tracking-wide -mt-1 sm:-mt-3 md:-mt-4
      "
        >
          {slides[active].subtitle}
        </h2>

        <p className="mt-4 sm:mt-5 max-w-xs sm:max-w-xl md:max-w-2xl text-[14px] sm:text-[16px] md:text-sm lg:text-base xl:text-lg text-white/90 leading-relaxed">
          {slides[active].desc}
        </p>

        <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row sm:flex-wrap gap-4 ">
          <button
            className="bg-yellow-400 text-black  w-[180px] sm:w-auto   px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
            onClick={() => navigate("/contact#inquiry-form")}
          >
            Lets Talk
          </button>

          <button
            className=" w-[160px] sm:w-auto  border border-white/40 px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition"
            onClick={() => navigate("/services/infrastructure")}
          >
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
