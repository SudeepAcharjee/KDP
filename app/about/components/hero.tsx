"use client";
import Link from 'next/link';
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[90vh] min-h-[600px] flex flex-col items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/images/about_hero_bg.png')" }}
    >
      {/* Premium Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>

      {/* Content with Framer Motion Animation */}
      <motion.div
        className="relative z-10 px-6 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
      >
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-purple-400 uppercase bg-purple-900/30 backdrop-blur-md rounded-full mb-8 border border-purple-500/30"
        >
          Our Story & Vision
        </motion.span>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-8 text-white">
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">Moments</span>, <br />
          Elevating Brands
        </h1>
        
        <p className="mt-4 text-lg md:text-xl text-zinc-100 max-w-3xl mx-auto leading-relaxed font-medium">
          At KDP Studios, we turn ideas into unforgettable experiences through expert event planning, artist management, PR & marketing, and brand consulting.
        </p>

        <div className="mt-12">
          <Link href="/events">
            <motion.button
              className="px-10 py-4 text-xs font-black uppercase tracking-widest bg-white text-zinc-900 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-2xl shadow-black/50 overflow-hidden group relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Events We Held</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;