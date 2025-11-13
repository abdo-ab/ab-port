import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = {
  Languages: ["JavaScript", "typescript", "Php", ],
  "Frameworks & Libraries": ["Vuejs", "Laravel", "React", ],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Tools & Platforms": ["Git", "github", "vercel"],
};
const SkillCard = ({ name }) => (
  <div className="bg-[#1E293B] text-white text-[clamp(0.875rem,1.5vw,1rem)] px-4 py-2 rounded-xl border border-gray-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-shadow duration-300">
    {name}
  </div>
);

//  Category section 
const SkillsSection = ({ title, skills }) => (
  <div className="flex-1 mb-8 md:mb-0">
    <h3 className="text-[clamp(1.5rem,3vw,1.75rem)] font-bold mb-4 text-white relative">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <SkillCard key={skill} name={skill} />
      ))}
    </div>
  </div>
);

// Scroll-triggered animation wrapper
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

//  Main Skills Component
const Skills = () => {
  return (
    <section className="w-full bg-[#0F172A] text-white px-4 sm:px-8 md:px-12 py-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold mb-4">
          My Technical Skills
        </h2>
        <p className="text-gray-400 text-[clamp(1rem,2vw,1.125rem)]">
          A glimpse of the technologies and tools I use to craft scalable, modern, and responsive web applications. Always eager to learn and improve.
        </p>
      </div>

      {/* Skills Grid */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-10">
            <SkillsSection title="Languages" skills={skills["Languages"]} />
            <SkillsSection title="Frameworks & Libraries" skills={skills["Frameworks & Libraries"]} />
          </div>
          <div className="space-y-10">
            <SkillsSection title="Databases" skills={skills["Databases"]} />
            <SkillsSection title="Tools & Platforms" skills={skills["Tools & Platforms"]} />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Skills;
