"use client";

import { motion } from "framer-motion";

import { FaStar, FaUsers, FaCalendarCheck, FaMusic } from "react-icons/fa"; // Icons for events

const CoreValuesSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 -mt-10 overflow-hidden px-8"
      style={{ backgroundImage: "url('/images/core.jpg')" }} // Replace with your image path
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Left Box - Our Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-black bg-opacity-80 p-8 rounded-xl"
        >
          <h2 className="text-3xl font-bold">Our Passion for Events</h2>
          <p className="text-gray-300 mt-3">
            At **KDP Studios**, we transform moments into unforgettable experiences. Whether it&apos;s a luxurious wedding, an electrifying music event, or a high-profile PR launch, we bring your vision to life.
          </p>

          {/* Values */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <div className="text-3xl text-yellow-400">
                <FaStar />
              </div>
              <h3 className="text-lg font-semibold mt-2">Premium Events</h3>
            </div>
            <div>
              <div className="text-3xl text-blue-400">
                <FaUsers />
              </div>
              <h3 className="text-lg font-semibold mt-2">Elite Networking</h3>
            </div>
            <div>
              <div className="text-3xl text-green-400">
                <FaCalendarCheck />
              </div>
              <h3 className="text-lg font-semibold mt-2">Seamless Planning</h3>
            </div>
            <div>
              <div className="text-3xl text-red-400">
                <FaMusic />
              </div>
              <h3 className="text-lg font-semibold mt-2">Iconic Experiences</h3>
            </div>
          </div>

          <p className="text-gray-400 text-sm mt-6">Precision ・ Creativity ・ Excellence</p>
        </motion.div>

        {/* Right Side - Achievements & Call to Action */}
        <div className="grid gap-4">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="bg-black bg-opacity-80 p-6 rounded-xl"
          >
            <h2 className="text-3xl font-bold">Our Impact & Achievements</h2>
            <p className="text-gray-300 mt-3">
              Bringing magic to over **500+ successful events**, crafting seamless **wedding experiences**, and hosting **top-tier artist performances**.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              className="bg-pink-100 p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-3xl font-bold text-yellow-500">500+</h4>
              <p className="text-gray-600 text-sm">Events Hosted</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
              className="bg-pink-100 p-6 rounded-xl shadow-lg"
            >
              <h4 className="text-3xl font-bold text-blue-500">100+</h4>
              <p className="text-gray-600 text-sm">Artists & Celebrities</p>
            </motion.div>
          </div>

          {/* Call to Action Button */}

        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
