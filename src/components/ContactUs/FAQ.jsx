import React from "react";
import { useState } from "react";
import { faqData } from "./faqData";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 lg:px-28">
      {/* HEADER */}
      <div className="max-w-8xl mx-auto">
        <div className="max-w-2xl ">
          {" "}
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-[#545353] mb-4 leading-[1.3] tracking-[2px]  ">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        <p className="text-gray-600 max-w-2xl mb-10 text-sm sm:text-base">
          Find quick answers to the most common questions about our construction
          services and processes.
        </p>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 ${
                activeIndex === index
                  ? "border-[#545353] shadow-lg bg-gray-50"
                  : "border-gray-200"
              }`}
            >
              {/* QUESTION */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 sm:p-5 text-left"
              >
                <span className="font-semibold text-sm sm:text-base lg:text-lg text-gray-800">
                  {item.title}
                </span>
                <ChevronDown
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180 text-[#545353]" : ""
                  }`}
                />
              </button>

              {/* ANSWER */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 sm:max-h-32 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-4 pb-4 text-gray-600 text-sm sm:text-base">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
