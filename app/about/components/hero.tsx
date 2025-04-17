"use client";
import Link from 'next/link';
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/about.webp')" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-white bg-opacity-0"></div>

      {/* Content with Framer Motion Animation */}
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">
        Crafting Moments, Elevating Brands
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-10xl">
        At KDP Studios, we turn ideas into unforgettable experiences through expert event planning,<br></br> artist management, PR & marketing, and brand consulting.
        </p>
        <Link href="/events">
  <motion.button
    className="mt-6 px-6 py-3 text-lg font-semibold bg-gray-100 text-black rounded-full hover:bg-gray-300 transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Events We Held
  </motion.button>
</Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;