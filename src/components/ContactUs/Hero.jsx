import React from "react";
import bg from "../../assets/ContactUs/ContactPageeImg.png"; // 🔁 replace with your image

export default function ContactHero() {
  return (
    <section
      className="
    relative w-full 
    h-[420px] sm:h-[520px] md:h-[620px] lg:h-[720px]
    overflow-hidden
  "
    >
      {/* Background Image */}
      <img
        src={bg}
        alt="Contact Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/*  Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/*  CONTENT WRAPPER */}
      <div className="relative z-10 w-full h-full px-4 sm:px-10 md:px-16 lg:px-28 flex flex-col justify-between">
        {/* 🔥 TOP TITLE */}
        <div className="pt-16 sm:pt-20 md:pt-28 lg:pt-20 lg:pt-20 lg:px-10 relative text-white font-black ">
          <h1
            className="
          text-white font-black tracking-widest
          text-[40px] sm:text-[80px] md:text-[120px] lg:text-[160px]
          leading-[0.95]
        "
            style={{ textShadow: "0 12px 30px rgba(0,0,0,0)" }}
          >
            CONTACT US
          </h1>
        </div>

        {/*  BOTTOM PARAGRAPH */}
        <div className="pb-10 sm:pb-14 md:pb-16 max-w-5xl">
          <p
            className="
          text-xs sm:text-sm md:text-base lg:text-lg 
          text-gray-200 leading-relaxed
        "
          >
            Whether it’s mining, infrastructure, civil construction, or
            consultation, we’re here to support your project with reliable
            expertise and on-ground experience. Reach out to us for inquiries,
            partnerships, quotations, or project discussions — our team will get
            back to you quickly.
          </p>
        </div>
      </div>
    </section>
  );
}
