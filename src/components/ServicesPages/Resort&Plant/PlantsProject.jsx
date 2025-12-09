import React from "react";
import PlantsData from "./PlantData";

export default function PlantsProject() {
  return (
    <section className="w-full bg-white py-12 px-4 sm:px-10 md:px-16 lg:px-28">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-black text-[#545353] mb-3  ">
          HORTICULTURE
        </h2>
        <p className="text-gray-600 max-w-6xl text-sm sm:text-base md:text-lg lg:text-2xl  ">
          Horticulture brings life to spaces through thoughtful cultivation and
          natural beauty.
        </p>
      </div>

      {/* ALTERNATING SECTIONS */}
      <div className="max-w-6xl mx-auto space-y-16">
        {PlantsData.map((item, index) => {
          const isReverse = index % 2 !== 0; // Alternate layout

          return (
            <div
              key={index}
              className={`flex flex-col-reverse ${
                isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8`}
            >
              {/* IMAGE */}
              <div className="w-full lg:w-1/2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] sm:h-[280px] lg:h-[300px] rounded-2xl object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-xl sm:text-2xl md:text-3xl  lg:text-3xl  font-bold text[#000000] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#000000] text-sm sm:text-base md:text-sm lg:text-lg    leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
