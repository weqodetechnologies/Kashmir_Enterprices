import React, { useState } from "react";
import { FiPhone, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import Logo from "../assets/logo.png";
import Icon from "./ui/icon";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-80 flex justify-center mt-3">
      <div className="bg-white text-black rounded-full w-full mx-[160px] px-2 py-1 flex items-center justify-between shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-14 h-auto" />
        </div>

        {/* Desktop Menu (only show on lg and above) */}
        <ul className="hidden lg:flex items-center gap-12 text-[14px] font-medium">
          <li className="hover:text-[#FFB800] cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-[#FFB800] cursor-pointer transition">
            About
          </li>

          {/* SERVICES Dropdown */}
          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-[#FFB800] transition">
              Services <FiChevronDown />
            </div>

            <div className="absolute hidden group-hover:block top-8 left-0 bg-white text-black rounded-md shadow-lg w-44 py-3 transition z-50">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Infrastructure
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Civil Mining
              </p>
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Plantation
              </p>
            </div>
          </li>

          <li className="hover:text-[#FFB800] cursor-pointer transition">
            Contact Us
          </li>
        </ul>

        {/* Desktop Call Button (lg only) */}
        <button className="hidden lg:flex items-center gap-2 bg-[#FFB800] text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition cursor-pointer">
          <Icon name="phone" />
          Call Us
        </button>

        {/* Hamburger (show on mobile + tablet = md and below) */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile + Tablet Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black text-white px-10 py-5 rounded-b-3xl mx-[80px] w-full">
          <ul className="flex flex-col gap-6 text-lg font-medium">
            <li className="hover:text-[#FFB800] cursor-pointer">Home</li>
            <li className="hover:text-[#FFB800] cursor-pointer">About</li>

            {/* Mobile dropdown */}
            <div>
              <div
                className="flex items-center justify-between cursor-pointer hover:text-[#FFB800]"
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                <span>Services</span>
                <FiChevronDown
                  className={
                    serviceOpen ? "rotate-180 transition" : "transition"
                  }
                />
              </div>

              {serviceOpen && (
                <div className="ml-4 mt-3 flex flex-col gap-3 text-gray-300">
                  <p className="hover:text-[#FFB800] cursor-pointer">
                    Infrastructure
                  </p>
                  <p className="hover:text-[#FFB800] cursor-pointer">
                    Civil Mining
                  </p>
                  <p className="hover:text-[#FFB800] cursor-pointer">
                    Plantation
                  </p>
                </div>
              )}
            </div>

            <li className="hover:text-[#FFB800] cursor-pointer">Contact Us</li>

            {/* Mobile Call Button */}
            <button className="bg-[#FFB800] text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-400 transition flex items-center gap-2">
              <FiPhone className="text-xl" /> Call Us
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
