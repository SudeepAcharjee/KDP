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
          <h4 className="text-lg font-semibold text-red-700">Events & Collaborations</h4>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 leading-tight">
            How We Organize Events <br /> & Why You Should Join Us
          </h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Seamless Event Planning</h3>
              <p className="text-gray-600 mt-1">
                From concept to execution, KDP Studios handles every detail of your event—ensuring it&apos;s impactful, creative, and unforgettable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Creative Team Collaboration</h3>
              <p className="text-gray-600 mt-1">
                We bring together photographers, filmmakers, designers, and strategists to create unique experiences that leave lasting impressions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">Why Join KDP Studios?</h3>
              <p className="text-gray-600 mt-1">
                Whether you&apos;re a creator or a client, being part of KDP means tapping into a passionate community, top-tier events, and endless inspiration.
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
              src="/images/kdp.jpg"
              alt="KDP Studios Event"
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
