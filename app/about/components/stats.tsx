"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DiscoverCatalyst() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] text-purple-600 uppercase bg-purple-50 rounded-full mb-6 border border-purple-100">
            Our Essence
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-zinc-900 mb-6">
            Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">KDP Studios</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <motion.div
            className="group p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-purple-100 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.1)]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-purple-100 rounded-2xl text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-purple-600 transition-colors">Our Vision</h3>
            <p className="text-zinc-500 leading-relaxed font-medium">
              To be the creative force behind the most iconic events, campaigns, and collaborations — where artistry meets strategy, and every story leaves a lasting impact.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="group p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-pink-100 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(236,72,153,0.1)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-2xl text-pink-600 mb-6 group-hover:scale-110 transition-transform duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-pink-600 transition-colors">Our Mission</h3>
            <p className="text-zinc-500 leading-relaxed font-medium">
              At KDP Studios, we aim to craft immersive experiences, empower artists, amplify brand narratives, and deliver dynamic marketing solutions that inspire and connect.
            </p>
          </motion.div>
        </div>

        {/* Feature Image */}
        <motion.div
          className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-zinc-200 border border-zinc-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
          <Image
            src="/images/holi4.jpg"
            alt="KDP Studios Creative Vision"
            width={1400}
            height={800}
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
          />
        </motion.div>
      </div>
    </section>
  );
}
