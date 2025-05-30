import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ContactSection = () => {
  return (
    <section className=" px-6 py-12 text-gray-900" id="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-xl mx-auto space-y-6"
      >
        <motion.h2
          className="text-3xl text-gray-50 font-bold text-center"
          variants={fadeUp}
        >
          Get in touch
        </motion.h2>

        <motion.p
          className="text-center text-gray-600"
          variants={fadeUp}
          custom={1}
        >
          I'm currently open to new opportunities. If you have a project in mind
          or just want to chat, feel free to reach out.
        </motion.p>

        <form className="space-y-4">
          <motion.input
            type="text"
            placeholder="Your name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.input
            type="email"
            placeholder="Your email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.textarea
            rows="5"
            placeholder="Your message"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            variants={fadeUp}
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          />

          <motion.button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-full font-medium"
            variants={fadeUp}
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Send message
          </motion.button>
        </form>

        <motion.div
          className="mt-10 text-center"
          variants={fadeUp}
          custom={6}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="mb-4 font-medium">Or connect with me on</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md font-medium"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md font-medium"
            >
              Twitter
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
