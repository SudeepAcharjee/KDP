"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowRight, FaMagic } from "react-icons/fa";
import Image from "next/image";

const words = [
  "Event Management",
  "Artist Management",
  "Digital Marketing",
  "Brand Strategy",
];

const HomeHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[5%] w-[40%] h-[60%] bg-purple-100/50 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[70%] bg-pink-50/60 rounded-full blur-[120px]"
        />
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50/40 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <FaMagic className="animate-pulse" />
            Leading Creative Agency
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-4xl lg:text-4xl font-black tracking-tight leading-[1.5] text-zinc-900 mb-8 pb-2"
          >
            Transforming <span className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
              {words[index]}
            </span> Into Legacies
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-500 font-medium leading-relaxed max-w-xl mb-8"
          >
            KDP Studios blends artistic vision with strategic excellence to elevate your brand and create unforgettable moments that resonate globally.
          </motion.p>

          {/* Service Points Line - Fixed to Single Line */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-row items-center gap-x-2 md:gap-x-4 mb-10 overflow-hidden whitespace-nowrap"
          >
            {[
              "Event Management",
              "Artist Management",
              "Digital Marketing",
              "Brand Strategy"
            ].map((point, i, arr) => (
              <div key={point} className="flex items-center gap-4 md:gap-5">
                <span className="text-[10px] md:text-xs font-bold text-zinc-700 uppercase tracking-widest">
                  {point}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-zinc-300 font-light text-sm md:text-lg">||</span>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/events">
              <button className="group relative px-8 py-4 bg-zinc-900 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-purple-600 transition-all duration-300 shadow-xl shadow-zinc-200">
                Explore Our Work
                <FaArrowRight className="inline-block ml-3 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            
            <Link href="/contact" className="text-zinc-900 font-bold text-sm uppercase tracking-widest hover:text-purple-600 transition-colors">
              Get In Touch
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-zinc-100 flex flex-wrap gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-sm font-bold text-zinc-400 uppercase tracking-tighter">Event Management</div>
            <div className="text-sm font-bold text-zinc-400 uppercase tracking-tighter">Artist Booking</div>
            <div className="text-sm font-bold text-zinc-400 uppercase tracking-tighter">Digital PR</div>
          </div>
        </div>

        {/* Right Content - Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-square w-full max-w-[500px] ml-auto">
            {/* Main Center Image */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl z-20">
              <Image 
                src="/images/eventhero.jpg" 
                alt="Highlight Event" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Decorative Glass Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 p-6 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 z-30 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-2xl flex items-center justify-center text-white font-bold animate-pulse">
                500+
              </div>
              <div>
                <p className="text-xs font-black text-zinc-900 uppercase">Live Events</p>
                <p className="text-[10px] text-zinc-500">Successfully Executed</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
