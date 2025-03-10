"use client";
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineSmartToy } from "react-icons/md";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Job Matching",
    description:
      "Utilizing intelligent algorithms to connect top talent with the right job opportunities, ensuring a perfect fit for both employers and job seekers.",
  },
  {
    title: "Career Development",
    description:
      "Providing resources, mentorship, and training programs to help professionals enhance their skills and grow in their careers.",
  },
  {
    title: "Seamless Hiring Process",
    description:
      "Helping businesses streamline recruitment, reduce hiring time, and ensure they hire top-quality candidates efficiently.",
  },
  {
    title: "Diverse Talent Network",
    description:
      "Access a broad pool of skilled professionals across multiple industries, from entry-level positions to executive roles.",
  },
  {
    title: "Remote & Hybrid Opportunities",
    description:
      "Enabling businesses to find remote, hybrid, and flexible work arrangements that meet modern workforce demands.",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Providing analytics and hiring insights to help companies make informed recruitment decisions and optimize workforce strategies.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyWeShine = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Our Talent & Hiring Platform?
        </h2>
        <p className="mt-4 text-gray-600">
          Connecting skilled professionals with leading companies while making hiring effortless and effective.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col gap-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <MdOutlineSmartToy className="text-gray-800 text-2xl" />
              <FaRegLightbulb className="text-gray-600 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyWeShine;
