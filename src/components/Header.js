import React, { useState } from "react";
import logo from "../images/Dev-ab-logo.jpg";
import "../style/nav.css";

const Header = ({ setCurrentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className=" nav-bar fixed top-0 w-full bg-black shadow z-50 p-4 text-white flex justify-around items-center">
      <div className="logo flex items-center">
        <img
          src={logo}
          alt="Dev-ab Logo"
          className="h-10 w-20 md:h-12 md:w-24"
        />
      </div>
      {/* Hamburger menu for mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="focus:outline-none"
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
      {/* Navigation links */}
      <nav className={`hidden md:flex justify-center space-x-6`}>
        <button onClick={() => setCurrentSection("hero")}>Home</button>
        <button onClick={() => setCurrentSection("about")}>About</button>
        <button onClick={() => setCurrentSection("skills")}>Skills</button>
        <button onClick={() => setCurrentSection("projects")}>Projects</button>
        <button onClick={() => setCurrentSection("contact")}>Contact</button>
      </nav>
      {/* Mobile menu */}
      <nav
        className={`md:hidden absolute left-0 right-0 top-16 bg-black flex flex-col items-center space-y-4 py-4 transition-all duration-300 z-40 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <button
          onClick={() => {
            setCurrentSection("hero");
            setMenuOpen(false);
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setCurrentSection("about");
            setMenuOpen(false);
          }}
        >
          About
        </button>
        <button
          onClick={() => {
            setCurrentSection("projects");
            setMenuOpen(false);
          }}
        >
          Projects
        </button>
        <button
          onClick={() => {
            setCurrentSection("contact");
            setMenuOpen(false);
          }}
        >
          Contact
        </button>
        <button
          onClick={() => {
            setCurrentSection("skills");
            setMenuOpen(false);
          }}
        >
          Skills
        </button>
      </nav>
    </header>
  );
};

export default Header;
