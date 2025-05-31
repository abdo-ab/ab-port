import React, { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import BottomNav from "./components/Bottomnav";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function App() {
  const [currentSection, setCurrentSection] = useState("hero");

  const renderSection = () => {
    switch (currentSection) {
      case "hero":
        return <HeroSection setCurrentSection={setCurrentSection} />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      case "skills":
        return <Skills />;
      default:
        return <HeroSection />;
    }
  };

  return (
    <>
      <Header setCurrentSection={setCurrentSection} />
      <div className="min-h-screen pt-16">{renderSection()}</div>
      <BottomNav setCurrentSection={setCurrentSection} />
      <footer className="text-center text-gray-500 text-xs p-4">
        &copy; {new Date().getFullYear()} Made by DEV AB with ❤️. All rights
        reserved.
      </footer>
    </>
  );
}
