'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExpertiseSection() {
  return (
    <section className="px-6 md:px-16 flex justify-center">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl p-10 flex flex-col md:flex-row items-center">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h4 className="text-lg font-semibold text-red-700">Talent & Hiring Solutions</h4>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
            Connecting Top Talent <br /> with the Right Opportunities
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Smart Job Matching</h3>
              <p className="text-gray-600 mt-1">
                Using AI-driven technology, we connect skilled professionals with companies that need their expertise.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Career Growth & Upskilling</h3>
              <p className="text-gray-600 mt-1">
                Providing job seekers with career development tools, training programs, and mentorship to enhance their skills.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Effortless Hiring for Businesses</h3>
              <p className="text-gray-600 mt-1">
                Helping companies streamline recruitment, reducing hiring time while ensuring quality hires.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
        >
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/work.png"
              alt="Talent & Hiring Solutions"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
