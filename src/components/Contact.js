import React from "react";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  return (
    <section className="contact w-full min-h-screen bg-[#0F172A] text-white px-6 py-20 sm:px-10 md:px-20">
      {/* Header */}
      <motion.h2
        className="text-[clamp(2rem,5vw,3rem)] font-bold mb-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Ways to Reach Me
      </motion.h2>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {/* Social Media Card */}
        <motion.div
          className="bg-[#1E293B] p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {/* Floating ✦ badge */}
          <span className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-lg animate-bounce">
            ✦
          </span>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
            Social Media
          </h3>
          <ul className="space-y-5 text-lg">
            <li>
              <a
                href="https://t.me/Dev_abdo_ab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-200"
              >
                <FaTelegramPlane className="text-blue-400" /> Telegram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdo-mohammed-3853aa397/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-200"
              >
                <FaLinkedin className="text-blue-400" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/abdo-ab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-200"
              >
                <FaGithub className="text-blue-400" /> GitHub
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info Card */}
        <motion.div
          className="bg-[#1E293B] p-8 rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md text-lg animate-bounce">
            ✦
          </span>

          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400 flex items-center gap-2">
            Contact Info
          </h3>
          <ul className="space-y-5 text-lg">
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" /> Qeysabaxa11@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-400" /> +251 937 848 785
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-orange-400" /> Internet
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
