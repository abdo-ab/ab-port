import React, { useState } from "react";
import logo from "../images/Dev-ab-logo.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header bg-black flex justify-between items-center px-4 md:px-12 h-16 md:h-20 transition-colors duration-300">
      <div className="logo flex items-center">
        <img
          src={logo}
          alt="Dev-ab Logo"
          className="h-10 w-20 md:h-12 md:w-24"
        />
      </div>
      <div className="md:hidden flex items-center">
        {/* Hamburger menu icon with animation */}
        <button
          className="flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-8 h-8">
            <span
              className={`block absolute h-1 w-8 bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 top-3.5" : "top-2"
              }`}
            ></span>
            <span
              className={`block absolute h-1 w-8 bg-white rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : "top-4"
              }`}
            ></span>
            <span
              className={`block absolute h-1 w-8 bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 top-3.5" : "top-6"
              }`}
            ></span>
          </div>
        </button>
      </div>
      <div
        className={`links text-white font-mono font-bold text-lg absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex-col md:flex-row flex md:flex space-y-4 md:space-y-0 md:space-x-6 transition-all duration-300 z-20 ${
          menuOpen ? "flex" : "hidden md:flex"
        }`}
      >
        <a
          href="#home"
          className="hover:underline text-blue-600 md:text-white hover:text-blue-600 px-4 md:px-0"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:underline hover:text-blue-600 px-4 md:px-0"
        >
          About
        </a>
        <a
          href="#projects"
          className="hover:underline hover:text-blue-600 px-4 md:px-0"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="hover:underline hover:text-blue-600 px-4 md:px-0"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
