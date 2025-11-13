import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

const BottomNav = ({ scrollToSection }) => {
  const navItems = [
    { name: "Home", icon: FaHome, key: "hero" },
    { name: "About", icon: FaUser, key: "about" },
    { name: "Skills", icon: FaCode, key: "skills" },
    { name: "Projects", icon: FaProjectDiagram, key: "projects" },
    { name: "Contact", icon: FaEnvelope, key: "contact" },
  ];

  return (
    <motion.nav
      className="botom fixed bottom-0 left-0 right-0 z-50 bg-[#0F172A] border-t border-gray-700 md:hidden"
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="flex justify-around px-4 py-2">
        {navItems.map(({ name, icon: Icon, key }) => (
          <button
            key={name}
            onClick={() => scrollToSection(key)}
            className="flex flex-col items-center text-xs text-white hover:text-blue-400 transition-colors duration-300"
          >
            <Icon className="text-xl mb-1" />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomNav;
