import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo3.png";
import Icon from "./ui/Icon";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full bg-black text-white px-5 sm:px-8 md:px-12 lg:px-24 py-12">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* COLUMN 1 : LOGO + ABOUT */}
        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <img src={logo} alt="Logo" className="w-16 h-16 rounded-full" />
            <h2 className=" text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold heading-becker text-[#EB1212] leading-10 text-center tracking-[3px] [text-shadow:1px_1px_0_#C5C5C5,-1px_1px_0_#C5C5C5,1px_-1px_0_#C5C5C5,-1px_-1px_0_#C5C5C5]">
              Kashmir <br /> Enterprises
            </h2>
          </div>

          <p className="text-gray-300 text-sm leading-normal max-w-md ">
            Kashmir Enterprises builds infrastructure, extracts minerals, and
            moves raw materials with reliable expertise.
          </p>

          {/* EMAIL INPUT */}
          <div
            className="
    flex items-center
    bg-white rounded-full overflow-hidden 
    w-full max-w-full sm:max-w-[320px] md:max-w-[360px]
    mt-4
  "
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="
      px-3 sm:px-4 
      py-2.5 sm:py-2 
      flex-1 
      text-black outline-none 
      text-xs sm:text-sm md:text-base
      min-w-0
    "
            />

            <button
              onClick={() => navigate("/contact#inquiry-form")}
              className="
      bg-yellow-400 text-black rounded-full 
      font-semibold 
      px-4 sm:px-5 md:px-6
      py-2 sm:py-2.5
      text-xs sm:text-sm md:text-base
      cursor-pointer 
      hover:bg-yellow-500 
      shrink-0
      transition
    "
            >
              Send
            </button>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 sm:gap-5 pt-4 flex-wrap">
            {[
              {
                name: "instagram",
                link: "https://www.instagram.com/YOUR_USERNAME",
              },
              {
                name: "facebook",
                link: "https://www.facebook.com/YOUR_PAGE",
              },
              {
                name: "twitter",
                link: "https://twitter.com/YOUR_USERNAME",
              },
              {
                name: "youtube",
                link: "https://www.youtube.com/@YOUR_CHANNEL",
              },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] 
                 flex items-center justify-center rounded-full 
                 border border-gray-600 hover:bg-yellow-400 
                 transition-all duration-300 group"
              >
                <Icon
                  name={item.name}
                  size={18}
                  className="text-white group-hover:text-black cursor-pointer leading-none"
                />
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 2 : QUICK LINKS */}
        <div className="sm:ml-10">
          <h3 className="text-xl sm:text-2xl font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 : CONTACT INFO */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Contact Information
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">
            <div className="flex items-start gap-3">
              <Icon
                name="location"
                size={20}
                className="text-yellow-400 mt-1"
              />
              <p>
                Glory Homes, 101 1st floor, Gorewada Ring Rd, Nagpur,
                Maharashtra 440013.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Icon
                name="location"
                size={20}
                className="text-yellow-400 mt-1"
              />
              <p>10 A Gandhi Nagar Hill road, Nagpur – 440010</p>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="email" size={20} className="text-yellow-400 mt-1" />
              <p className="break-all">kashmirenterprisespvttd@gmail.com</p>
            </div>

            <div className="flex items-start gap-3">
              <Icon name="phone2" size={20} className="text-yellow-400 mt-1" />
              <p>+91 98230 00888</p>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm mt-10">
        © {new Date().getFullYear()} Kashmir Enterprises. All rights reserved.
      </div>
    </footer>
  );
}
