"use client";

import CustomSection from "@/components/Layout/CustomSection";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { containerV, slideDownV } from "@/utils/Animation";

const words = [
  "Events | Artist | PR | Wedding Planner",
  "Creating Unforgettable Experiences and Memories",
  "Bringing Your Vision to Life",
  "Elevating Your Events",
];

const HomeHero = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStartTyping(true), 2000);
    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    if (!startTyping) return;

    const currentWord = words[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const typing = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, wordIndex, startTyping]);

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
      
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover z-0" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <CustomSection className="relative z-10 flex flex-col items-center text-center max-w-3xl text-white px-0">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          {text}
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideDownV}
          initial="hidden"
          animate="visible"
          className="text-lg mt-3 max-w-2xl"
        >
          Elevate your events with our expert planning services. From weddings to corporate events, brand marketing, and artist PR, we bring your vision to life with precision and creativity.
        </motion.p>

        {/* Call to Action */}
        <motion.div
  variants={slideDownV}
  initial="hidden"
  animate="visible"
  transition={{ delay: 3 }}
>
  <Link href="/contact">
    <div className="relative mt-6 px-6 py-3 text-white text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 rounded-full overflow-hidden shadow-lg transition-all duration-300 group">
      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
      <span className="relative z-10">Book Your Event</span>
      <span className="absolute -inset-1 bg-white opacity-20 blur-md"></span>
      <span className="absolute w-10 h-10 bg-white opacity-25 rounded-full blur-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></span>
    </div>
  </Link>
</motion.div>

      </CustomSection>
    </div>
  );
};

export default HomeHero;
