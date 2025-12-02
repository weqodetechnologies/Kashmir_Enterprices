import React, { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX, FiPhone } from "react-icons/fi";
import Icon from "./ui/Icon";
import logo from "../assets/logo2.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const serviceRef = useRef(null);
  const location = useLocation();
  const isServiceActive = location.pathname.startsWith("/services");
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  // Close dropdown on outside click (desktop only)
  useEffect(() => {
    function handleOutsideClick(event) {
      if (serviceRef.current && !serviceRef.current.contains(event.target)) {
        setServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Close everything when route changes (mobile fix)
  function closeAll() {
    setMenuOpen(false);
    setServiceOpen(false);
    setMobileServiceOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-white shadow-md mx-3 sm:mx-6 md:mx-10 lg:mx-20 mt-4 rounded-full px-4 py-3 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <h2 className=" text-xl font-semibold heading-becker text-[#EB1212] leading-6 text-center tracking-[3px] [text-shadow:1px_1px_0_#C5C5C5,-1px_1px_0_#C5C5C5,1px_-1px_0_#C5C5C5,-1px_-1px_0_#C5C5C5]">
            Kashmir Enterprises
          </h2>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-800">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#FCB716]" : "hover:text-[#FCB716]"
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-[#FCB716]" : "hover:text-[#FCB716]"
              }
            >
              About
            </NavLink>
          </li>

          {/* SERVICES DESKTOP */}
          <li ref={serviceRef} className="relative cursor-pointer">
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className={`flex items-center gap-1 transition ${
                isServiceActive ? "text-[#FCB716]" : "hover:text-[#FCB716]"
              }`}
            >
              Services <FiChevronDown />
            </button>

            {serviceOpen && (
              <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-xl rounded-xl overflow-hidden">
                {[
                  ["Infrastructure", "/services/infrastructure"],
                  ["Civil", "/services/civil"],
                  ["Plantation & Resort", "/services/plantation"],
                  ["Mining", "/services/mining"],
                ].map(([name, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => setServiceOpen(false)}
                    className={({ isActive }) =>
                      `block px-5 py-3 transition ${
                        isActive
                          ? "bg-[#FCB716] text-black"
                          : "hover:bg-[#FCB716] hover:text-black"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            )}
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#FCB716]" : "hover:text-[#FCB716]"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/*  CALL BUTTON */}
        <a
          href="tel:+919823000888"
          className="hidden lg:flex items-center gap-2 bg-[#F4B324] text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-400"
        >
          <Icon name="phone" /> Call Us
        </a>

        {/*  MOBILE TOGGLE */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/*  MOBILE MENU */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-6 space-y-4 text-center rounded-b-2xl">
          <NavLink
            to="/"
            onClick={closeAll}
            className={({ isActive }) =>
              `block font-medium ${isActive && "text-[#FCB716]"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeAll}
            className={({ isActive }) =>
              `block font-medium ${isActive && "text-[#FCB716]"}`
            }
          >
            About
          </NavLink>

          {/*  MOBILE SERVICES */}
          <div>
            <button
              onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
              className={`flex items-center justify-center gap-2 font-medium mx-auto ${
                isServiceActive ? "text-[#FCB716]" : ""
              }`}
            >
              Services <FiChevronDown />
            </button>

            {mobileServiceOpen && (
              <div className="mt-3 space-y-2 text-sm">
                {[
                  ["Infrastructure", "/services/infrastructure"],
                  ["Civil", "/services/civil"],
                  ["Plantation & Resort", "/services/plantation"],
                  ["Mining", "/services/mining"],
                ].map(([name, path]) => (
                  <NavLink
                    key={path}
                    to={path}
                    onClick={() => {
                      closeAll();
                      setTimeout(() => {
                        window.scrollTo(0, 0);
                      }, 50);
                    }}
                    className={({ isActive }) =>
                      `block ${
                        isActive ? "text-[#FCB716]" : "hover:text-[#FCB716]"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            onClick={closeAll}
            className={({ isActive }) =>
              `block font-medium ${isActive && "text-[#FCB716]"}`
            }
          >
            Contact Us
          </NavLink>

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
