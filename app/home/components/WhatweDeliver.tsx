"use client";
import { motion } from "framer-motion";

// Business Consulting Services
const servicesList = [
  "Strategic Planning",
  "Market Analysis",
  "Financial Consulting",
  "Business Growth",
  "Risk Management",
  "Operational Efficiency",
  "Client Acquisition",
  "Brand Positioning",
];

// Infinite scrolling animation
const marqueeVariants = {
  animate: {
    x: ["0%", "-100%"],
    transition: {
      ease: "linear",
      duration: 100, // Slower speed
      repeat: Infinity,
    },
  },
};

const ScrollingServices = () => {
  return (
    <><section className="w-full flex flex-col justify-center items-center text-center bg-white text-black px-4 py-5">
      {/* Heading Section */}
      <div className="mb">
        <h2 className="text-4xl font-bold">Expert Business Consulting</h2>
        <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">
          Elevate your business with tailored strategies, market insights, and expert guidance.
          Empower your growth with proven solutions.
        </p>
      </div>
    </section><section className="w-full flex flex-col justify-center items-center text-center bg-white text-black px-4 py-1">
        {/* Scrolling Services */}
        <div className="relative w-screen overflow-hidden space-y-6">
          {/* Top Line */}
          <div className="relative w-full overflow-hidden py-3">
            <motion.div
              className="flex space-x-8 w-max"
              variants={marqueeVariants}
              animate="animate"
            >
              {[...servicesList, ...servicesList].map((service, index) => (
                <div
                  key={index}
                  className="px-8 py-3  bg-gray-200 text-black rounded-full font-semibold shadow-lg text-lg"
                >
                  {service}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Middle Line (Same box size, but shorter width) */}
          <div className="relative w-[80%] mx-auto overflow-hidden py-3 ">
            <motion.div
              className="flex space-x-8 w-max"
              variants={marqueeVariants}
              animate="animate"
              style={{ animationDuration: "24s" }} // Even slower
            >
              {[...servicesList, ...servicesList].map((service, index) => (
                <div
                  key={index}
                  className="px-8 py-3  bg-gray-200 text-black rounded-full font-semibold shadow-lg text-lg"
                >
                  {service}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Line */}
          <div className="relative w-full overflow-hidden py-3 pb-20">
            <motion.div
              className="flex space-x-8 w-max"
              variants={marqueeVariants}
              animate="animate"
            >
              {[...servicesList, ...servicesList].map((service, index) => (
                <div
                  key={index}
                  className="px-8 py-3 bg-gray-200 text-black rounded-full font-semibold shadow-lg text-lg "
                >
                  {service}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section></>
  );
};

export default ScrollingServices;