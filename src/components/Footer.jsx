import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

// Import your logo
import logo from "../assets/logo3.png";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 sm:px-10 md:px-16 lg:px-24 py-14">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* COLUMN 1 : LOGO + ABOUT */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
            <h2 className="text-3xl font-semibold text-red-400 leading-tight">
              Kashmir <br /> Enterprises
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
            Kashmir Enterprises builds infrastructure, extracts minerals, and
            moves raw materials with reliable expertise.
          </p>

          {/* EMAIL INPUT */}
          <div className="flex items-center bg-white rounded-full overflow-hidden max-w-xs mt-4">
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-2 flex-1 text-black outline-none"
            />
            <button className="bg-yellow-400 text-black font-semibold px-5 py-2">
              Send
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 pt-3">
            <FaInstagram
              size={22}
              className="hover:text-yellow-400 cursor-pointer"
            />
            <FaFacebookF
              size={22}
              className="hover:text-yellow-400 cursor-pointer"
            />
            <FaTwitter
              size={22}
              className="hover:text-yellow-400 cursor-pointer"
            />
            <FaYoutube
              size={22}
              className="hover:text-yellow-400 cursor-pointer"
            />
          </div>
        </div>

        {/* COLUMN 2 : QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Services</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* COLUMN 3 : CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Contact Information
          </h3>

          <div className="space-y-5 text-gray-300 text-sm">
            {/* Location 1 */}
            <div className="flex items-start gap-3">
              <FiMapPin size={20} className="text-yellow-400 mt-1" />
              <p>
                Glory Homes, 101 1st floor, Gorewada Ring Rd, Nagpur,
                Maharashtra 440013.
              </p>
            </div>

            {/* Location 2 */}
            <div className="flex items-start gap-3">
              <FiMapPin size={20} className="text-yellow-400 mt-1" />
              <p>10 A Gandhi Nagar Hill road, Nagpur – 440010</p>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <FiMail size={20} className="text-yellow-400 mt-1" />
              <p>kashmirenterprisespvttd@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <FiPhone size={20} className="text-yellow-400 mt-1" />
              <p>+91 98230 00888</p>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm mt-12">
        © {new Date().getFullYear()} Kashmir Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
