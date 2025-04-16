"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DiscoverCatalyst() {
  return (
    <section className="bg-white py-4 px-6 md:px-16">
      {/* Heading */}
      <motion.div
        className="max-w-6xl mx-auto flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h2 className="text-5xl font-bold text-[#5F4B8B] text-center">
          Discover KDP Studios 
        </h2>
      </motion.div>

      {/* Vision and Mission */}
      <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Vision */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-3xl font-semibold text-[#5F4B8B]">Our Vision</h3>
          <p className="mt-2 text-gray-700 leading-relaxed">
            To be the creative force behind the most iconic events, campaigns, and collaborations — where artistry meets strategy, and every story leaves a lasting impact.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-3xl font-semibold text-[#5F4B8B]">Our Mission</h3>
          <p className="mt-2 text-gray-700 leading-relaxed">
            At KDP Studios, we aim to craft immersive experiences, empower artists, amplify brand narratives, and deliver dynamic marketing solutions that inspire and connect.
          </p>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/images/about.jpg"
          alt="Creative minds at work"
          width={1100}
          height={600}
          className="rounded-lg shadow-md"
        />
      </motion.div>
    </section>
  );
}
