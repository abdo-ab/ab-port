import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import BottomNav from "./components/Bottomnav";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <main className="pt-16 overflow-x-hidden scroll-smooth">
        <section id="hero">
          <HeroSection />
        </section>

         <section id="projects">
          <Projects />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <BottomNav scrollToSection={scrollToSection} />

      <footer className="text-center text-gray-500 text-xs p-4">
        &copy; {new Date().getFullYear()} Made by DEV AB 
      </footer>
    </>
  );
}
