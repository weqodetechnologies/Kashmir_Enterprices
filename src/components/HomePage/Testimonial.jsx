import React, { useRef, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import user1 from "../../assets/homePage/Testimonial1.png";
import user2 from "../../assets/homePage/Testimonial2.png";
import user3 from "../../assets/homePage/Testimonial1.png";
import Icon from "../ui/Icon";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  // Auto sliding marquee effect
  useEffect(() => {
    if (!autoScroll) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 1, behavior: "smooth" });
      }
    }, 30); // slower speed

    return () => clearInterval(interval);
  }, [autoScroll]);

  // Manual scroll
  const scrollLeft = () => {
    setAutoScroll(false);
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    setAutoScroll(false);
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 sm:px-4 md:px-6 lg:px-8 py-12 space-y-8">
      {/* Heading */}
      <h1 className=" px-4 sm:px-8 md:px-12 lg:px-28 text-left text-[42px] sm:text-[60px] md:text-[80px] font-black text-[#545353] tracking-[6px] leading-none">
        TESTIMONIALS
      </h1>

      {/* Marquee Scroll Wrapper */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setAutoScroll(false)}
        onMouseLeave={() => setAutoScroll(true)}
        className="flex gap-8 overflow-x-scroll no-scrollbar scroll-smooth pb-4 cursor-grab active:cursor-grabbing"
      >
        {/* CARD 1 */}
        <div className="bg-[#FCB716] min-w-[320px] sm:min-w-[380px] md:min-w-[420px] p-8 rounded-[30px] space-y-6">
          <div className="text-4xl">
            {" "}
            <Icon name="comma" />
          </div>

          <p className="text-black text-base leading-relaxed">
            The team delivered our project on time and with excellent quality.
            Their attention to detail truly impressed us.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <img src={user1} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-black">Rohan S.</h4>
              <p className="text-sm text-gray-900">Project Head</p>
            </div>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-[#FCB716] min-w-[320px] sm:min-w-[380px] md:min-w-[420px] p-8 rounded-[30px] space-y-6">
          <div className="text-4xl">
            <Icon name="comma" />
          </div>

          <p className="text-black text-base leading-relaxed">
            Professional, reliable, and easy to work with. They handled
            everything smoothly from planning to final handover.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <img src={user2} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-black">Meera K</h4>
              <p className="text-sm text-gray-900">Interior Designer</p>
            </div>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="bg-[#FCB716] min-w-[320px] sm:min-w-[380px] md:min-w-[420px] p-8 rounded-[30px] space-y-6">
          <div className="text-4xl">
            {" "}
            <Icon name="comma" />
          </div>

          <p className="text-black text-base leading-relaxed">
            We trusted them with our home renovation, and the results were
            beyond expectations. Highly recommended!
          </p>

          <div className="flex items-center gap-4 pt-4">
            <img src={user3} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-black">Amit Kumar</h4>
              <p className="text-sm text-gray-900">Project Head</p>
            </div>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="bg-[#FCB716] min-w-[320px] sm:min-w-[380px] md:min-w-[420px] p-8 rounded-[30px] space-y-6">
          <div className="text-4xl">
            {" "}
            <Icon name="comma" />
          </div>

          <p className="text-black text-base leading-relaxed">
            We trusted them with our home renovation, and the results were
            beyond expectations. Highly recommended!
          </p>

          <div className="flex items-center gap-4 pt-4">
            <img src={user3} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-black">Amit Kumar</h4>
              <p className="text-sm text-gray-900">Project Head</p>
            </div>
          </div>
        </div>
        {/* CARD 5 */}
        <div className="bg-[#FCB716] min-w-[320px] sm:min-w-[380px] md:min-w-[420px] p-8 rounded-[30px] space-y-6">
          <div className="text-4xl">
            {" "}
            <Icon name="comma" />
          </div>

          <p className="text-black text-base leading-relaxed">
            We trusted them with our home renovation, and the results were
            beyond expectations. Highly recommended!
          </p>

          <div className="flex items-center gap-4 pt-4">
            <img src={user3} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-black">Amit Kumar</h4>
              <p className="text-sm text-gray-900">Project Head</p>
            </div>
          </div>
        </div>
        {/* CARD 6 */}
        <div className="bg-[#FCB716] min-w-[320px] sm:min-w-[380px] md:min-w-[420px] p-8 rounded-[30px] space-y-6">
          <div className="text-4xl">
            {" "}
            <Icon name="comma" />
          </div>

          <p className="text-black text-base leading-relaxed">
            We trusted them with our home renovation, and the results were
            beyond expectations. Highly recommended!
          </p>

          <div className="flex items-center gap-4 pt-4">
            <img src={user3} className="w-12 h-12 rounded-full object-cover" />
            <div>
              <h4 className="font-semibold text-black">Amit Kumar</h4>
              <p className="text-sm text-gray-900">Project Head</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chevron Buttons */}
      <div className="flex justify-end gap-6 mt-4">
        <button
          onClick={scrollLeft}
          className="p-3 bg-white text-black rounded-full hover:bg-black border border-black hover:text-white cursor-pointer"
        >
          <FiChevronLeft size={22} />
        </button>

        <button
          onClick={scrollRight}
          className="p-3 bg-white text-black rounded-full hover:bg-black border border-black hover:text-white cursor-pointer"
        >
          <FiChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
