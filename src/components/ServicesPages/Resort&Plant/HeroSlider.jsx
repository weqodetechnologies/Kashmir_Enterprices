import React, { useEffect, useState } from "react";
import plantation from "../../../assets/Resprt&plantation/plantation.png";
import resort from "../../../assets/Resprt&plantation/resortImg.png";

export default function HeroSlider() {
  const slides = [
    {
      image: plantation,
      title: "PLANTATION",
      desc: "We have planted more than 1,000 hectares of land with trees and created a healthier ecosystem for nature. Our goal is to reduce carbon footprints and make the environment better for the future.",
    },
    {
      image: resort,
      title: "RESORTS",
      desc: "We develop serene, well-crafted resort spaces built to deliver comfort, beauty, and a premium guest experience. From structural work to outdoor elements, we create environments your visitors will love.",
    },
  ];

  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setActive((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 1200);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative w-full 
        h-[420px] sm:h-[620px] md:h-[720px] lg:h-[820px]
        overflow-hidden
      "
    >
      {/*  Smooth Background Fade */}
      <img
        key={slides[active].image}
        src={slides[active].image}
        alt="hero"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/*  Responsive Overlay */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/30"></div>

      {/*  Fully Responsive Text Container */}
      <div
        className={`relative z-10 flex flex-col justify-end h-full 
    px-4 sm:px-8 md:px-16 lg:px-28  pb-4 sm:pb-8 md:pb-12 lg:pb-32
    text-white 
    max-w-[95%] sm:max-w-3xl md:max-w-4xl lg:max-w-7xl 
    transition-all duration-[1400ms] ease-in-out ${
      fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`}
      >
        <h1
          className="
        text-[36px] 
        sm:text-[60px] 
        md:text-[90px] 
        lg:text-[120px] 
        xl:text-[140px]
        font-black 
        tracking-[2px] sm:tracking-[6px] md:tracking-[10px]
        leading-[1.1]
        mb-4 sm:mb-6
        break-words
      "
        >
          {slides[active].title}
        </h1>

        <p
          className="
        max-w-full sm:max-w-xl md:max-w-2xl
        text-[13px] 
        sm:text-sm 
        md:text-base 
        lg:text-lg
        leading-relaxed
        text-white/90
      "
        >
          {slides[active].desc}
        </p>
      </div>
    </section>
  );
}
