import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiPhone } from "react-icons/fi";
import logo from "../assets/logo.png"; // your logo
import Loader from "./ui/Loader";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [serviceClicked, setServiceClicked] = useState(false);

  const serviceRef = useRef(null);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        setServiceOpen(false);
        setServiceClicked(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav
        className="
      bg-white shadow-md
      mx-3 sm:mx-6 md:mx-10 lg:mx-30
      mt-4
      rounded-full
      px-4 sm:px-4 md:px-6 lg:px-6
      py-3
      flex items-center justify-between
    "
      >
        {" "}
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-lg">Kashmir</span>
        </div>
        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-800">
          <li>
            <Link to="/" className="hover:text-[#F4B324] transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-[#F4B324] transition">
              About
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            ref={serviceRef}
            className="relative cursor-pointer"
            onMouseEnter={() => {
              if (!serviceClicked) setServiceOpen(true);
            }}
            onMouseLeave={() => {
              if (!serviceClicked) setServiceOpen(false);
            }}
          >
            {/* BUTTON */}
            <div
              onClick={() => {
                setServiceOpen(true);
                setServiceClicked(true);
              }}
              className="flex items-center gap-1 hover:text-[#F4B324] transition select-none"
            >
              Services <FiChevronDown />
            </div>

            {/* DROPDOWN */}
            {serviceOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl overflow-hidden z-50">
                <Link
                  to="/services/infrastructure"
                  onClick={() => {
                    setServiceOpen(false);
                    setServiceClicked(false);
                  }}
                  className="block px-5 py-3 hover:bg-[#F4B324] hover:text-black transition"
                >
                  Infrastructure
                </Link>

                <Link
                  to="/services/civil"
                  onClick={() => {
                    setServiceOpen(false);
                    setServiceClicked(false);
                  }}
                  className="block px-5 py-3 hover:bg-[#F4B324] hover:text-black transition"
                >
                  Civil
                </Link>

                <Link
                  to="/services/plantation"
                  onClick={() => {
                    setServiceOpen(false);
                    setServiceClicked(false);
                  }}
                  className="block px-5 py-3 hover:bg-[#F4B324] hover:text-black transition"
                >
                  Plantation & Resort
                </Link>

                <Link
                  to="/services/mining"
                  onClick={() => {
                    setServiceOpen(false);
                    setServiceClicked(false);
                  }}
                  className="block px-5 py-3 hover:bg-[#F4B324] hover:text-black transition"
                >
                  Mining
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/contact" className="hover:text-[#F4B324] transition">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* CALL BUTTON */}
        <a
          href="tel:+919823000888"
          className="hidden lg:flex items-center gap-2 bg-[#F4B324] text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 transition"
        >
          <FiPhone /> Call Us
        </a>
        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6 space-y-5 text-center rounded-b-2xl">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="block font-medium"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="block font-medium"
          >
            About
          </Link>

          {/* ✅ MOBILE SERVICES */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="flex items-center justify-center gap-2 font-medium"
            >
              Services <FiChevronDown />
            </button>

            {serviceOpen && (
              <div className="mt-3 space-y-2 text-sm text-center">
                <Link
                  to="/services/infrastructure"
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  Infrastructure
                </Link>

                <Link
                  to="/services/civil"
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  Civil
                </Link>

                <Link
                  to="/services/plantation"
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  Plantation & Resort
                </Link>

                <Link
                  to="/services/mining"
                  onClick={() => setMenuOpen(false)}
                  className="block"
                >
                  Mining
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block font-medium"
          >
            Contact Us
          </Link>

          <a
            href="tel:+919823000888"
            className="flex items-center justify-center gap-2 bg-[#F4B324] text-black font-semibold py-2 px-6 rounded-full mx-auto w-fit"
          >
            <FiPhone /> Call Us
          </a>
        </div>
      )}
    </header>
  );
}
