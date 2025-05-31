import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../style/about.css";
import owner from "../images/owner image.png";

// Reusable Card Component with Framer Motion
const Card = ({ title, description, direction = "up" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants based on direction
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="flex-1 p-6 border border-gray-300 rounded-lg bg-[#1e1e1e]"
    >
      <h1 className="text-xl font-bold mb-2 text-orange-400">{title}</h1>
      <p className="text-gray-50">{description}</p>
    </motion.div>
  );
};

// Main About Component
function App() {
  return (
    <div className="about bg-[#0F172A] text-white p-6" id="about">
      {/* Profile Section */}
      <div className="flex items-center justify-center pt-5">
        <div className="text-center">
          <div className="w-full flex justify-center">
            <img
              src={owner}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-500"
            />
          </div>
          <h2 className="text-2xl font-bold text-blue-500">ABDO MOHAMMED</h2>
          <div className="text-white text-lg font-medium">
            Full Stack Web Developer | Mobile App Developer
          </div>
          <div className="text-blue-700 mb-6 text-lg">
            Based in Awash, Ethiopia
          </div>
        </div>
      </div>

      {/* Card Section 1 */}
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap mt-10">
        <Card
          title="Introduction"
          direction="left"
          description="I'm Abdo Mohammed but you can call me Dev-Ab. I'm a passionate web developer with a focus on creating intuitive and engaging user experiences. My journey in web development began with a fascination for how websites work. I've been hooked ever since and have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, and more. I'm always looking for new challenges and opportunities to grow."
        />
        <Card
          title="Education"
          direction="right"
          description="I earned a degree in Computer Science from Semara University, where I honed my skills in web development and software engineering. I worked on projects like a student management system and a fitness tracking mobile app. These experiences solidified my passion for impactful digital solutions."
        />
      </div>

      {/* Card Section 2 */}
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap mt-10">
        <Card
          title="Skills"
          direction="left"
          description="My expertise lies in front-end development using HTML, CSS, and JavaScript. I'm proficient with frameworks like React and Vue.js, and I also build full-stack apps using Node.js and Express. I'm constantly learning to stay ahead in web and mobile dev."
        />
        <Card
          title="Interests"
          direction="right"
          description="Outside of coding, I love exploring new tech, contributing to open-source, and staying active with hiking and cycling. I believe in lifelong learning and always seek ways to level up in the dev game."
        />
      </div>
    </div>
  );
}

export default App;
