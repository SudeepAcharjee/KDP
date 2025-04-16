"use client";

import { motion } from "framer-motion";

export default function EventPlannerSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 overflow-hidden -mt-10 px-8"
      style={{ backgroundImage: "url('/images/vd.png')" }} // Replace with your image path
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl font-bold mb-6 py-2">KDP STUDIOS</h2>
        <p className="text-lg max-w-3xl mx-auto">
          We specialize in curating unforgettable experiences, whether it&apos;s a grand wedding, a star-studded artist showcase, a high-profile PR event, or a corporate gathering. Our seamless planning ensures every detail is executed flawlessly.
        </p>

        {/* Embedded Video */}
        <div className="relative w-full max-w-3xl mx-auto mb-8 pt-10">
          <video
            className="w-full h-auto rounded-xl shadow-lg"
            
            autoPlay
            loop
            muted
          >
            <source src="./videos/hero.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Animated Get in Touch Button */}
        <motion.a
          href="/contact"
          className="inline-block px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-slate-700 to-black text-white shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </div>
    </section>
  );
}
