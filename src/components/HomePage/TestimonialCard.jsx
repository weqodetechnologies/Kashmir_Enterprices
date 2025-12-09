import React from "react";

function TestimonialCard(item) {
  return (
    <div className="bg-[#FFC727] min-w-[320px] sm:min-w-[350px] md:min-w-[420px] p-8 rounded-[30px] space-y-6">
      <div className="text-4xl"></div>

      <p className="text-black text-base leading-relaxed">{item.text}</p>

      <div className="flex items-center gap-4 pt-4">
        <img src={item.img} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-semibold text-black">{item.name}</h4>
          <p className="text-sm text-gray-900">{item.role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
