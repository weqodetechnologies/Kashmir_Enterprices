import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function InquiryPopup({ isOpen, onClose }) {
  const emailForm = useRef(null);
  const firstInputRef = useRef(null);
  const [selectedService, setSelectedService] = useState("");

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();

    if (!selectedService) {
      alert("Please select a service");
      return;
    }

    //  ADMIN MAIL
    emailjs.sendForm(
      "service_f10taox",
      "template_uvfw606",
      emailForm.current,
      "m-h4-c3W3yeJdpBBl"
    );

    //  USER CONFIRMATION MAIL
    emailjs.sendForm(
      "service_f10taox",
      "template_6yn383s",
      emailForm.current,
      "m-h4-c3W3yeJdpBBl"
    );

    e.target.reset();
    setSelectedService("");
    localStorage.setItem("enquiryFormSubmitted", "yes");

    alert("Message sent successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-[24px] p-6 w-full max-w-md relative animate-scaleIn">
        {/*  CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl font-bold"
        >
          ×
        </button>

        <h3 className="text-lg font-bold text-gray-900 mb-1">
          Tell Us What You Need
        </h3>
        <p className="text-sm text-gray-500 mb-5">
          Reach out to our team today.
        </p>

        <form ref={emailForm} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              ref={firstInputRef}
              type="text"
              name="first_name"
              placeholder="First Name"
              required
              className="border rounded-full px-4 py-2 text-sm"
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className="border rounded-full px-4 py-2 text-sm"
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

          <input type="hidden" name="service" value={selectedService} />

          <div>
            <p className="text-sm font-medium mb-2">What Service you need?</p>
            <div className="flex flex-wrap gap-2">
              {["Infrastructure", "Civil", "Mining", "Plantation"].map(
                (item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setSelectedService(item)}
                    className={`px-4 py-1.5 rounded-full border text-xs transition
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
            <input type="checkbox" required /> I agree to the terms & conditions
          </label>

          <button
            type="submit"
            className="w-full bg-black text-white py-2.5 rounded-full font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
