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
        <h2 className="text-5xl font-bold text-red-700 text-center">
          Discover Your Next Opportunity
        </h2>
      </motion.div>

      {/* Vision and Mission - Properly aligned */}
      <div className="mt-10 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Vision */}
        <motion.div
          className="md:w-1/2 text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-3xl font-semibold text-[#5F4B8B]">Our Vision</h3>
          <p className="mt-2 text-gray-600 leading-relaxed">
            To be the go-to platform for connecting top talent with companies that value skill, innovation, and expertise, creating meaningful career opportunities worldwide.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          className="md:w-1/2 text-right"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-2 text-[#5F4B8B] leading-relaxed">
            To empower businesses with exceptional talent and individuals with career-defining opportunities, leveraging technology and human potential to build the workforce of the future.
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
          src="/images/staff.webp"
          alt="Connecting Talent with Opportunity"
          width={1100}
          height={600}
          className="rounded-lg shadow-md"
        />
      </motion.div>
    </section>
  );
}
