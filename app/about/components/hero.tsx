"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center text-center text-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/about.jpeg')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      {/* Content with Framer Motion Animation */}
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Transform Your Job Vancancy.
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-800 max-w-10xl">
          Unlock growth opportunities, optimize strategies, and drive success with our tailored consulting solutions.
        </p>
        <motion.button
          className="mt-6 px-6 py-3 text-lg font-semibold bg-gray-100 text-black rounded-full hover:bg-gray-300 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;