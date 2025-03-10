"use client";

import CustomSection from "@/components/Layout/CustomSection";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";
import { useRef } from "react";
import Link from "next/link";

const TechnologiesUsed = () => {
  const ref = useRef(null);
  const techRef = useRef(null);

  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);
  const techInView = useIntersectionObserver(
    techRef,
    { threshold: 0.1 },
    false
  );

  const technologies = [
    { name: "Cyber Security", path: "/services/cyber-security" },
    { name: "Cloud Computing", path: "/services/cloud-computing" },
    { name: "Sales Force", path: "/services/sales-force" },
    { name: "Mule Soft", path: "/services/mule-soft" },
    { name: "Blockchain", path: "/services/blockchain" },
    { name: ".NET", path: "/services/dot-net" },
    { name: "Machine Learning", path: "/services/machine-learning" },
    { name: "RPA", path: "/services/rpa" },
    { name: "Python", path: "/services/python" },
    { name: "Java", path: "/services/java" },
  ];

  return (
    <div className="relative w-full flex items-center justify-center bg-[#DE1F3B] text-white py-16">
      <CustomSection className="flex-col gap-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="border-b border-white py-4 max-w-[290px]"
        >
          <motion.p
            variants={slideUpV}
            className="font-bold text-[2rem] leading-[28px]"
          >
            Technologies We Use
          </motion.p>
        </motion.div>
        <motion.div
          ref={techRef}
          initial="hidden"
          animate={techInView ? "visible" : "hidden"}
          variants={containerV}
          className="flex flex-col gap-2"
        >
          {technologies.map((technology, index) => (
            <motion.div key={index} variants={slideUpV}>
              <Link
                href={technology.path}
                className="hover:underline"
              >
                {technology.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </CustomSection>
    </div>
  );
};

export default TechnologiesUsed;
