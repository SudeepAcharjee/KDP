"use client";

import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";

const AboutConnect = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);

  return (
    <div className="text-white relative w-full h-[500px] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/aboutconnect.png"
          alt="Business Consultation"
          width={1560}
          height={1490}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="absolute inset-0 bg-[#1F3BDE] opacity-50"></div> {/* Changed overlay color to a more business-like tone */}
      
      <CustomSection className="text-center ">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="relative w-full flex flex-col items-center justify-center space-y-4 z-10"
        >
          <motion.p
            variants={slideUpV}
            className="font-bold text-[3rem] leading-[44px]"
          >
            Elevate Your Business Strategy
          </motion.p>
          <motion.p
            variants={slideUpV}
            className="text-[1.25rem] leading-[20px] max-w-[600px]"
          >
            Partner with us for expert business consulting, strategic planning, 
            and innovative solutions to drive growth and efficiency.
          </motion.p>
          <motion.div variants={slideUpV} className="pt-7">
            <Link href="/contact">
              <div className="bg-[#ffffff4b] border border-white px-4 py-2 rounded-[33px] w-fit cursor-pointer hover:underline">
                Schedule a Consultation
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </CustomSection>
    </div>
  );
};

export default AboutConnect;