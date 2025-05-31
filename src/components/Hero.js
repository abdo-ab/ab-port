import React from "react";
import "../style/hero.css"; // Import your custom styles for the hero section

export default function HeroSection() {
  return (
    <div
      className=" hero relative z-10 flex items-center justify-center p-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4"
      id="hero"
    >
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-center border border-white/20 animate-slideIn">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          I'm <span className="text-blue-400">DEV-AB</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Full Stack web Developer | Mobile App Developer | <br /> <br />I build
          sleek, responsive websites and bring bold ideas to life on the web.
        </p>
        <div className="flex justify-center space-x-10 ">
          <a
            href="#projects"
            className="inline-block bg-blue-600 hover:bg-orange-700 active:bg-orange-800 text-white py-3 px-6 rounded-full transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 sm:w-auto w-full text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-orange-700 active:bg-orange-800 text-white  py-3 px-6 rounded-full transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 sm:w-auto w-full text-center"
          >
            contact me
          </a>
        </div>
      </div>
    </div>
  );
}
