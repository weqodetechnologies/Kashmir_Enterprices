// import React from "react";
// import bg from "../../assets/homePage/Kashmirimg.png"; // mountain background
// // import jcb from "../../assets/homePage/jcb.png"; // JCB image

// export default function Hero() {
//   return (
//     <section
//       className="
//     relative w-full
//     h-[88vh]
//     sm:h-[90vh]
//     md:h-[780px]
//     lg:h-[850px]
//     flex items-center overflow-hidden
//   "
//     >
//       {/* BACKGROUND IMAGE */}
//       <img
//         src={bg}
//         alt="Kashmir Background"
//         className="absolute inset-0 w-full h-full object-fill"
//       />

//       {/* DARK OVERLAY FOR READABILITY */}
//       <div className="absolute inset-0 bg-black/10"></div>

//       {/* MAIN CONTENT */}
//       <div
//         className="
//     relative z-20 w-full
//     px-5 sm:px-10 md:px-14 lg:px-28
//     gap-6 items-center
//     text-center lg:text-left
//   "
//       >
//         <div
//           className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 text-white
//                -mt-6 sm:-mt-10 md:-mt-36  lg:-mt-40"
//         >
//           {/* MAIN HEADING */}
//           <h1
//             className="
//     text-[38px]
//     sm:text-[80px]
//     md:text-[120px]
//     lg:text-[200px]
//     font-black leading-[0.65] tracking-[2px]
//   "
//           >
//             <span
//               className="   text-white
//     [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0)_75%,transparent_100%)] "
//             >
//               KASHMIR
//             </span>
//             {/* <span
//               className="   text-white
//     [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0)_65%,transparent_100%)] "
//             >
//               A
//             </span>
//             <span
//               className="   text-white
//      [mask-image:linear-gradient(to_bottom,black_60%,rgba(0,0,0,0)_65%,transparent_100%)] "
//             >
//               S
//             </span>

//             <span
//               className="   text-white
//      [mask-image:linear-gradient(to_bottom,black_45%,rgba(0,0,0,0)_57%,transparent_100%)] "
//             >
//               H
//             </span>
//             <span
//               className="   text-white
//      [mask-image:linear-gradient(to_bottom,black_45%,rgba(0,0,0,0)_50%,transparent_100%)] "
//             >
//               MI
//             </span>
//             <span
//               className="   text-white
//      [mask-image:linear-gradient(to_bottom,black_25%,rgba(0,0,0,0)_40%,transparent_100%)] "
//             >
//               R
//             </span> */}
//           </h1>

//           <h2
//             className="
//     text-[18px]
//     sm:text-[34px]
//     md:text-[46px]
//     lg:text-[60px]
//     font-black leading-none
//   "
//           >
//             ENTERPRISES
//           </h2>

//           {/* PARAGRAPH */}
//           <p
//             className="
//     max-w-xl mx-auto lg:mx-0
//     text-[12.5px] sm:text-base md:text-lg
//     text-gray-200 leading-relaxed
//   "
//           >
//             Kashmir Enterprises delivers expert construction, civil, and mining
//             solutions, from building complexes and power stations to extracting
//             minerals and transporting raw materials. We power infrastructure
//             growth with reliability and scale.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 pt-2">
//             <button
//               className="
//             px-6 py-3 bg-[#F4B324] text-black
//             font-semibold rounded-full text-sm sm:text-base
//             shadow-md transition-all duration-300
//             hover:bg-white hover:shadow-lg
//           "
//             >
//               Lets Talk
//             </button>

//             <button
//               className="
//             px-6 py-3 rounded-full text-sm sm:text-base font-semibold text-white
//             bg-white/10 backdrop-blur-xl
//             border border-white/30
//             shadow-md transition-all duration-300
//             hover:bg-white hover:text-black
//           "
//             >
//               Our Services
//             </button>
//           </div>
//         </div>

//         {/* RIGHT IMAGE (OPTIONAL FOR DESKTOP) */}
//         <div className="hidden lg:flex justify-end">
//           {/* JCB image if needed */}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import { useEffect, useState } from "react";
import hero1 from "../../assets/homePage/Kashmirimg.png"; // JCB / Mountain Image
import hero2 from "../../assets/homePage/MosqueImg.png"; // Mosque Image

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
        h-[420px] sm:h-[620px] md:h-[720px] lg:h-[820px]
        overflow-hidden
      "
    >
      {/* BACKGROUND IMAGE WITH FADE */}
      <img
        src={slides[active].image}
        alt="hero"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1800ms] ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10"></div>

      {/*  HERO CONTENT */}
      <div
        className={`relative z-10 h-full flex flex-col justify-center 
        px-4 sm:px-10 md:px-16 lg:px-24 
        text-white transition-all duration-[1500ms] ease-in-out ${
          fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/*  BIG HEADING */}
        <h1
          className="
          text-[48px] 
          sm:text-[90px] 
          md:text-[140px] 
          lg:text-[180px] 
          xl:text-[220px]
          font-black 
          tracking-[4px] sm:tracking-[8px] md:tracking-[14px]
          leading-none
           [mask-image:linear-gradient(to_bottom,black_50%,rgba(0,0,0,0)_95%,transparent_100%)]
        "
        >
          {slides[active].title}
        </h1>

        {/*  SUBTITLE */}
        <h2
          className="
          text-[22px] 
          sm:text-[36px] 
          md:text-[60px] 
          lg:text-[80px]
          font-bold 
          tracking-wide 
          -mt-2 sm:-mt-4
        "
        >
          {slides[active].subtitle}
        </h2>

        {/*  DESCRIPTION */}
        <p className="mt-5 max-w-xl sm:max-w-2xl text-[13px] sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed">
          {slides[active].desc}
        </p>

        {/*  BUTTONS */}
        <div className="mt-7 flex gap-4 flex-wrap">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition">
            Lets Talk
          </button>

          <button className="border border-white/40 px-6 py-3 rounded-full text-white hover:bg-white hover:text-black transition">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
