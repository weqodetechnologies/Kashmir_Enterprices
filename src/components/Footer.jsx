import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo3.png";
import Icon from "./ui/Icon";
import { FiChevronDown } from "react-icons/fi";

export default function Footer() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ Active Nav Style
  const activeClass = ({ isActive }) =>
    isActive
      ? "text-yellow-400 font-semibold"
      : "hover:text-yellow-400 transition";

  // ✅ Services dropdown data
  const services = [
    { to: "/services/infrastructure", label: "Infrastructure" },
    { to: "/services/civil", label: "Civil" },
    { to: "/services/plantation-resort", label: "Plantation & Resort" },
    { to: "/services/mining", label: "Mining" },
  ];

  return (
    <footer className="w-full bg-black text-white px-4 sm:px-8 md:px-12 lg:px-24 py-12">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
        {/* ✅ COLUMN 1 : LOGO + ABOUT */}
        <div className="space-y-5 flex flex-col items-center sm:items-start">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full"
            />
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold heading-becker text-[#EB1212] leading-7 sm:leading-10 text-center sm:text-left tracking-[2px] sm:tracking-[3px] [text-shadow:1px_1px_0_#C5C5C5,-1px_1px_0_#C5C5C5,1px_-1px_0_#C5C5C5,-1px_-1px_0_#C5C5C5]">
              Kashmir <br /> Enterprises
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-normal max-w-xs sm:max-w-md">
            Kashmir Enterprises builds infrastructure, extracts minerals, and
            moves raw materials with reliable expertise.
          </p>

          {/* ✅ EMAIL INPUT */}
          <div className="flex items-center bg-white rounded-full overflow-hidden w-full max-w-[200px] sm:max-w-[220px] md:max-w-[300px] mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 sm:px-4 py-2 flex-1 text-black outline-none text-xs sm:text-sm md:text-base min-w-0"
            />
            <button
              onClick={() => navigate("/contact")}
              className="bg-yellow-400 text-black rounded-full font-semibold 
              px-4 sm:px-5 md:px-6 py-2 text-xs sm:text-sm md:text-base
              hover:bg-yellow-500 shrink-0 transition"
            >
              Send
            </button>
          </div>

          {/* ✅ SOCIAL ICONS */}
          <div className="flex items-center justify-center sm:justify-start gap-4 pt-4 flex-wrap">
            {[
              { name: "instagram", link: "https://www.instagram.com/" },
              { name: "facebook", link: "https://www.facebook.com/" },
              { name: "twitter", link: "https://twitter.com/" },
              { name: "youtube", link: "https://www.youtube.com/" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] flex items-center justify-center rounded-full border border-gray-600 hover:bg-yellow-400 transition-all duration-300 group"
              >
                <Icon
                  name={item.name}
                  size={18}
                  className="text-white group-hover:text-black"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ✅ COLUMN 2 : QUICK LINKS WITH RESPONSIVE SERVICES DROPDOWN */}
        <div className="sm:ml-10">
          <h3 className="text-lg sm:text-2xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <NavLink to="/" className={activeClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={activeClass}>
                About
              </NavLink>
            </li>

            {/* ✅ RESPONSIVE SERVICES DROPDOWN */}
            <li>
              <div ref={dropdownRef} className="relative">
                {/* ✅ SERVICES BUTTON - PERFECT RESPONSIVE STYLING */}
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex items-center justify-center sm:justify-start gap-2 font-semibold text-yellow-400 hover:text-yellow-500 transition text-left py-1"
                >
                  Services
                  <FiChevronDown
                    className={`transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* ✅ RESPONSIVE DROPDOWN - MATCHES UI PERFECTLY */}
                <div
                  className={`absolute bottom-full sm:top-full left-0 sm:left-auto sm:right-0 w-full sm:w-[240px] 
                    bg-white rounded-2xl shadow-xl overflow-hidden z-50 border border-gray-200
                    sm:mt-4 mt-2 sm:origin-top origin-bottom transform transition-all duration-200
                    ${
                      open
                        ? "scale-100 opacity-100 translate-y-0"
                        : "scale-95 opacity-0 -translate-y-2 sm:translate-y-0 pointer-events-none"
                    }`}
                >
                  {services.map((service, index) => (
                    <NavLink
                      key={service.to}
                      to={service.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 sm:px-6 py-3 sm:py-4 text-gray-800 hover:bg-gray-100 font-medium text-sm sm:text-base border-b border-gray-100 last:border-b-0 first:rounded-t-2xl last:rounded-b-2xl transition-colors hover:text-gray-900"
                    >
                      {service.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <NavLink to="/contact" className={activeClass}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ✅ COLUMN 3 : CONTACT INFO */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-4">
            Contact Information
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Icon
                name="location"
                size={20}
                className="text-yellow-400 mt-1 flex-shrink-0"
              />
              <p>Glory Homes, Gorewada Ring Rd, Nagpur.</p>
            </div>

            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Icon
                name="location"
                size={20}
                className="text-yellow-400 mt-1 flex-shrink-0"
              />
              <p>10 A Gandhi Nagar Hill road, Nagpur</p>
            </div>

            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Icon
                name="email"
                size={20}
                className="text-yellow-400 mt-1 flex-shrink-0"
              />
              <p className="break-all">kashmirenterprisespvttd@gmail.com</p>
            </div>

            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <Icon
                name="phone2"
                size={20}
                className="text-yellow-400 mt-1 flex-shrink-0"
              />
              <p>+91 98230 00888</p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ COPYRIGHT */}
      <div className="text-center text-gray-400 text-xs sm:text-sm mt-10 pt-8 border-t border-gray-800">
        © {new Date().getFullYear()} Kashmir Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
