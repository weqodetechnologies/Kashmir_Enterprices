import React from "react";
import bg from "../../assets/ContactUs/FormImg.png"; // ✅ Replace with your cave image
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Icon from "../ui/Icon";

export default function ContactQuerySection() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-20">
      <div
        className="
          relative w-full
          rounded-[28px]
          overflow-hidden
          shadow-2xl
          min-h-[500px]
        "
      >
        {/* ✅ Background Image */}
        <img
          src={bg}
          alt="Query Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* ✅ MAIN GRID */}
        <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-10 md:p-12 lg:p-10">
          {/* ✅ LEFT INFO PANEL */}
          <div className="text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-tight">
                Have Any Questions <br /> in your Mind?
              </h2>

              <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-md">
                We’re here to answer your questions and support your project
                needs.
              </p>
            </div>

            {/* ✅ CONTACT DETAILS */}
            <div className="mt-16 space-y-4 text-white">
              {/* LOCATION */}
              <div>
                <h4 className="text-[#F4B324] text-xl sm:text-base md:text-lg lg:text-xl font-bold mb-1">
                  Location
                </h4>

                {/* Office Address */}
                <div className="flex items-start gap-4 mb-1">
                  <Icon
                    name="location"
                    className="text-[#F4B324] text-2xl mt-2"
                  />
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <span className="font-semibold">Office Add:</span> Glory
                    Homes, 101 1st floor, Gorewada Ring Rd, Nagpur, Maharashtra
                    440013.
                  </p>
                </div>

                {/* Head Office */}
                <div className="flex items-start gap-4">
                  <Icon
                    name="location"
                    className="text-[#F4B324] text-2xl mt-1"
                  />
                  <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    <span className="font-semibold">Head Office:</span> 10-A,
                    Gandhi Nagar, Hill road, Nagpur - 440010
                  </p>
                </div>
              </div>

              {/* ✅ EMAIL */}
              <div>
                <h4 className="text-[#F4B324] text-xl sm:text-base md:text-lg lg:text-xl font-bold mb-1">
                  Email
                </h4>

                <div className="flex items-center gap-4">
                  <Icon name="email" className="text-[#F4B324] text-2xl" />
                  <p className="text-sm sm:text-base md:text-lg">
                    kashmirenterprisespvtltd@gmail.com
                  </p>
                </div>
              </div>

              {/* ✅ CONTACT */}
              <div>
                <h4 className="text-[#F4B324] text-xl sm:text-sm md:text-lg lg:text-xl font-bold mb-1">
                  Contact
                </h4>

                <div className="flex items-center gap-4">
                  <Icon name="phone2" className="text-[#F4B324] text-xl" />
                  <p className="text-xl sm:text-sm md:text-lg lg:text-xl ">
                    +91 98230 00888
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ RIGHT FORM CARD */}
          <div className="bg-white rounded-[24px] p-6 sm:p-8 md:p-10 shadow-xl w-full max-w-lg mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              Tell Us What You Need
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mb-5">
              Reach out to our team today and let’s build something.
            </p>

            {/* ✅ FORM */}
            <form className="space-y-4">
              {/* NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              />

              {/* PHONE */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              />

              {/* SERVICE */}
              <div>
                <p className="text-sm font-medium mb-2">
                  What Service you need?
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Infrastructure", "Civil", "Mining", "Plantation"].map(
                    (item) => (
                      <button
                        type="button"
                        key={item}
                        className="px-4 py-1.5 rounded-full border text-xs sm:text-sm hover:bg-black hover:text-white transition"
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* MESSAGE */}
              <textarea
                rows="3"
                placeholder="Message"
                className="w-full border rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
              ></textarea>

              {/* TERMS */}
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" />I agree to the terms & conditions
              </label>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full bg-black text-white py-2.5 rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
