import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../style/skills.css"; // Optional custom styles if you have any

const skills = {
  Languages: ["JavaScript", "React-native", "SQL", "TypeScript", "TailwindCSS"],
  "Frameworks & Libraries": [
    "React",
    "Node.js",
    "Express.js",
    "Next.js",
    "jQuery",
  ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Tools & Platforms": ["Git", "AWS", "Heroku"],
};

// 🔹 Skill badge UI
const SkillCard = ({ name }) => (
  <div className="bg-[#1E293B] text-white text-sm px-4 py-2 rounded-md border border-gray-700">
    {name}
  </div>
);

// 🔹 Category section (like Languages or Tools)
const SkillsSection = ({ title, skills }) => (
  <div className="flex-1 mb-10 md:mb-0 md:mr-8 last:mr-0">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill} name={skill} />
      ))}
    </div>
  </div>
);

// 🔹 Scroll-triggered animation wrapper
const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// 🔹 Main Skills Component
const Skills = () => {
  return (
    <section className="skills bg-[#0F172A] min-h-screen text-white px-6 py-12 sm:px-10 md:px-20">
      {/* Header */}
      <div className="items-center text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 text-white">
          Tools I Use to Make Alive Your Ideas
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          This is just a glimpse of my skills and the tools I use to build
          exceptional web experiences. I am always eager to learn new
          technologies and improve my expertise.
        </p>
      </div>

      {/* Group 1: Languages & Frameworks */}
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:space-x-10 mb-12">
          <SkillsSection title="Languages" skills={skills["Languages"]} />
          <SkillsSection
            title="Frameworks & Libraries"
            skills={skills["Frameworks & Libraries"]}
          />
        </div>
      </AnimatedSection>

      {/* Group 2: Databases & Tools */}
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:space-x-10">
          <SkillsSection title="Databases" skills={skills["Databases"]} />
          <SkillsSection
            title="Tools & Platforms"
            skills={skills["Tools & Platforms"]}
          />
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills;
