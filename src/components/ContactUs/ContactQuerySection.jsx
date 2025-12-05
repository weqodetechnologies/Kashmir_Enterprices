import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import bg from "../../assets/ContactUs/FormImg.png";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import Icon from "../ui/Icon";

export default function ContactQuerySection() {
  const formRef = useRef(null);
  const firstInputRef = useRef(null);
  const emailForm = useRef(null);

  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (window.location.hash === "#inquiry-form") {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
        firstInputRef.current?.focus();
      }, 300);
    }
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!selectedService) {
      alert("Please select a service");
      return;
    }

    // SEND MAIL TO YOU (ADMIN)
    emailjs.sendForm(
      "service_f10taox",
      "template_uvfw606",
      emailForm.current,
      "m-h4-c3W3yeJdpBBl"
    );

    // SEND CONFIRMATION MAIL TO USER
    emailjs.sendForm(
      "service_f10taox",
      "template_6yn383s",
      emailForm.current,
      "m-h4-c3W3yeJdpBBl"
    );

    e.target.reset();
    setSelectedService("");
    alert("Message sent successfully!");
  };

  return (
    <section className="w-full px-4 sm:px-8 md:px-12 lg:px-24 py-20">
      <div className="relative w-full rounded-[28px] overflow-hidden shadow-2xl min-h-[500px]">
        <img
          src={bg}
          alt="Query Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-10 md:p-12 lg:p-10">
          {/* LEFT INFO PANEL — unchanged */}
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

            <div className="mt-16 space-y-4 text-white">
              <div>
                <h4 className="text-[#F4B324] text-xl font-bold mb-1">
                  Location
                </h4>
                <div className="flex items-start gap-4 mb-1">
                  <div className="w-5 h-5 shrink-0 mt-1">
                    <Icon name="location" className="text-[#F4B324]" />
                  </div>
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold">Office Add:</span> Glory
                    Homes, Gorewada Ring Rd, Nagpur
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[#F4B324] text-xl font-bold mb-1">Email</h4>
                <div className="flex items-start gap-4">
                  <Icon name="email" className="text-[#F4B324] text-2xl" />
                  <p className="text-sm break-all">
                    kashmirenterprisespvtltd@gmail.com
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[#F4B324] text-xl font-bold mb-1">
                  Contact
                </h4>
                <div className="flex items-start gap-4">
                  <Icon name="phone2" className="text-[#F4B324] text-xl" />
                  <p className="text-xl">+91 98230 00888</p>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ RIGHT FORM (EMAILJS CONNECTED) */}
          <div
            ref={formRef}
            id="inquiry-form"
            className="bg-white rounded-[24px] p-6 sm:p-8 md:p-10 shadow-xl w-full max-w-lg mx-auto"
          >
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              Tell Us What You Need
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mb-5">
              Reach out to our team today.
            </p>

            <form ref={emailForm} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  ref={firstInputRef}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="w-full border rounded-full px-4 py-2 text-sm"
                />

                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="w-full border rounded-full px-4 py-2 text-sm"
                />
              </div>

              <input
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
                className="w-full border rounded-full px-4 py-2 text-sm"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full border rounded-full px-4 py-2 text-sm"
              />

              {/* ✅ SERVICE SELECTION */}
              <input type="hidden" name="service" value={selectedService} />

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
                        onClick={() => setSelectedService(item)}
                        className={`px-4 py-1.5 rounded-full border text-xs sm:text-sm transition
                          ${
                            selectedService === item
                              ? "bg-black text-white"
                              : "hover:bg-black hover:text-white"
                          }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              <textarea
                rows="3"
                name="message"
                placeholder="Message"
                required
                className="w-full border rounded-xl px-4 py-2 text-sm"
              ></textarea>

              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input type="checkbox" required /> I agree to the terms &
                conditions
              </label>

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
