import React from "react";
import { motion } from "framer-motion";
import "../style/projects.css"; // Optional custom styles if you have any

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-fledged e-commerce platform with user authentication, product catalog, shopping cart, and payment gateway integration. Built with React, Node.js, and MongoDB.",
    image: "https://placehold.co/600x400",
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A dashboard for managing social media accounts, scheduling posts, and analyzing engagement metrics.",
    image: "https://placehold.co/600x400",
    link: "#",
  },
  {
    title: "Personal Finance Tracker",
    description:
      "A web application for tracking personal finances, managing budgets, and visualizing spending patterns.",
    image: "https://placehold.co/600x400",
    link: "#",
  },
  {
    title: "Recipe Sharing App",
    description:
      "A platform for sharing and discovering recipes, with features like user profiles, recipe search, and commenting.",
    image: "https://placehold.co/600x400",
    link: "#",
  },
];

// animation for each card
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const FeaturedProjects = () => {
  return (
    <section
      className="bg-gray-900 text-white py-12 px-6 md:px-16  items-center projects"
      id="projects"
    >
      <motion.h2
        className="text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      <motion.p
        className="text-gray-300 mb-10  intro text-16px lg:text-2xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        A selection of my most impactful and innovative projects, showcasing my
        skills and experience in web development.
      </motion.p>

      <div className="space-y-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6"
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-orange-700 active:bg-orange-800 text-white px-4 py-2 rounded font-medium transition duration-300"
              >
                View Project
              </a>
            </div>
            <motion.div
              className="md:w-1/3"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full shadow-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
