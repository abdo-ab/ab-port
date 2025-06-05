import React from "react";
import { motion } from "framer-motion";
import {
  FaTelegramPlane,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
} from "react-icons/fa";
import "../style/contact.css";

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
    <div className="contact min-h-screen bg-[#0F172A] text-white px-6 py-12 sm:px-10 md:px-20">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Ways to reach me out
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center">
        {/* Business Card */}
        <motion.div
          className="w-full md:w-1/2 bg-[#1E293B] p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-4 text-orange-400 flex items-center gap-2">
            Contact Details
          </h3>
          <div className="space-y-4 text-lg">
            <p className="flex items-center gap-2">
              <FaUser className="text-blue-400" /> Abdo Mohammed
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" /> Qeysabaxa11@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-blue-400" /> +251 937 848 785
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" /> Awash, Ethiopia
            </p>
          </div>
        </motion.div>

        {/* Social Media Card */}
        <motion.div
          className="w-full md:w-1/2 bg-[#1E293B] p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-2xl font-semibold mb-4 text-orange-400 flex items-center gap-2">
            Social Media
          </h3>
          <ul className="space-y-5 text-lg">
            <li>
              <a
                href="https://t.me/Qabuna_matata"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-200"
              >
                <FaTelegramPlane className="text-blue-400" /> Telegram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdo-mohammed-7197b434b?"
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
      </div>
    </div>
  );
};

export default Contact;
