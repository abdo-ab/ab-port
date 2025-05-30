import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";
import "aos/dist/aos.css";
import BottomNav from "./Pages/Bottomnav";

// Import the page components used in routes
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import HeroSection from "./Pages/Hero";
import Contact from "./Pages/Contact";
import Header from "./Pages/Header";

export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <BottomNav />
      </Router>

      <footer className="text-center text-gray-500 text-xs p-4">
        &copy; {new Date().getFullYear()} Made by DEV AB with ❤️. All rights
        reserved.
      </footer>
    </>
  );
}
