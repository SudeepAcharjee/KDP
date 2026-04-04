"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function EventPlannerSection() {
  return (
    <section
      className="relative w-full py-24 px-8 overflow-hidden bg-zinc-950 text-white"
    >
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/vd.png')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Subtle Label */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-purple-400 uppercase bg-purple-900/30 backdrop-blur-md rounded-full mb-8 border border-purple-500/30"
        >
          Why Choose Us
        </motion.span>

        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black mb-8 py-2 tracking-tight"
        >
          KDP <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">STUDIOS</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto mb-16 leading-relaxed"
        >
          We specialize in curating unforgettable experiences, whether it&apos;s a grand wedding, a star-studded artist showcase, a high-profile PR event, or a corporate gathering.
        </motion.p>

        {/* Instagram Reel Container */}
        <div className="flex justify-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[340px] aspect-[9/16] rounded-[2rem] overflow-hidden shadow-[0_30px_100px_-20px_rgba(168,85,247,0.3)] border-8 border-zinc-900/50 backdrop-blur-sm"
          >
            <iframe
              src="https://www.instagram.com/reels/DQtzKcbiEoX/embed"
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </motion.div>
        </div>

        {/* Animated Get in Touch Button */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-block px-12 py-5 text-xs font-black uppercase tracking-widest rounded-full bg-white text-zinc-950 hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-xl shadow-black/40 group"
          >
            Get in Touch
            <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
