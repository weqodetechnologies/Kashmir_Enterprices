import React from "react";
import Icon from "../ui/Icon";

export default function WhyChooseUs() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-28 py-8">
      {/* SECTION TITLE */}
      <h2 className="text-[28px] sm:text-[34px] md:text-[44px] lg:text-[56px] font-black text-[#545353] mb-8">
        WHY CHOOSE US
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 px-4 sm:px-8 md:px-12 lg:px-18">
        {/* CARD 1 */}
        <div className="bg-black text-white rounded-2xl p-5 sm:p-6 md:p-7 lg:p-12 min-h-[150px] flex flex-col gap-3">
          <Icon name="user" className="text-[#F4B324] text-2xl sm:text-3xl" />
          <p className="text-[13px] sm:text-sm md:text-base leading-relaxed">
            Our engineers, architects, and technicians bring years of expertise
            to every project.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-black text-white rounded-2xl p-5 sm:p-6 md:p-7 lg:p-12 min-h-[150px] flex flex-col gap-3">
          <Icon
            name="delivery"
            className="text-[#F4B324] text-2xl sm:text-3xl"
          />
          <p className="text-[13px] sm:text-sm md:text-base leading-relaxed">
            We plan smartly and execute efficiently, ensuring your project stays
            on schedule.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="bg-black text-white rounded-2xl p-5 sm:p-6 md:p-7 lg:p-12 min-h-[150px] flex flex-col gap-3">
          <Icon
            name="protection"
            className="text-[#F4B324] text-2xl sm:text-3xl"
          />
          <p className="text-[13px] sm:text-sm md:text-base leading-relaxed">
            We follow strict safety standards to protect our team, clients, and
            project sites.
          </p>
        </div>

        {/* CARD 4 */}
        <div className="bg-black text-white rounded-2xl p-5 sm:p-6 md:p-7 lg:p-12 min-h-[150px] flex flex-col gap-3">
          <Icon name="axe" className="text-[#F4B324] text-2xl sm:text-3xl" />
          <p className="text-[13px] sm:text-sm md:text-base leading-relaxed">
            We plan smartly and execute efficiently, ensuring your project stays
            on schedule.
          </p>
        </div>

        {/* ✅ FULL-WIDTH LAST CARD */}
        <div className="bg-black text-white rounded-2xl p-5 sm:p-6 md:p-7 lg:p-12 sm:col-span-2 flex flex-col gap-3">
          <Icon name="true" className="text-[#F4B324] text-2xl sm:text-3xl" />
          <p className=" text-[13px] sm:text-sm md:text-base  leading-relaxed">
            We stand behind our work with complete accountability. Every
            construction project completed by us comes with an official Warranty
            Certificate. This certificate is authorised and approved by NIT or
            the Corporation, ensuring that your structure meets the highest
            safety, durability, and compliance standards.
          </p>
        </div>
      </div>
    </section>
  );
}
