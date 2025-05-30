import React from "react";

export default function HeroSection() {
  return (
    <div className="relative z-10 flex items-center justify-center p-12 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-lg text-center border border-white/20 animate-slideIn">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Hey 👋 I'm <span className="text-blue-400">DEV-AB</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Full Stack Developer | Mobile App Developer | <br /> <br />I build
          sleek, responsive websites and bring bold ideas to life on the web.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-md"
        >
          🚀 View Projects
        </a>
      </div>
    </div>
  );
}
