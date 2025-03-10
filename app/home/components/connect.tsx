"use client";

import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";

const Connect = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);

  return (
    <div className="text-white relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/images/connect.png"
          alt=""
          width={1560}
          height={1490}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-white opacity-40"></div>
      <div className="absolute inset-0 bg-[#DE1F3B] opacity-50"></div>
      <CustomSection className="text-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="w-full relative flex flex-col items-center justify-center space-y-4 z-10"
        >
          <motion.p
            variants={slideUpV}
            className="font-bold text-[3rem] leading-[44px]"
          >
            Take the Next Step in IT Excellence
          </motion.p>
          <motion.p
            variants={slideUpV}
            className="text-[1.25rem] leading-[20px] max-w-[600px]"
          >
            Connect with SherylTech to elevate your business with transformative
            IT solutions and reliable support.
          </motion.p>
          <motion.div variants={slideUpV} className="pt-7">
            <Link href="/contact">
              <div className="bg-[#ffffff4b] border border-white px-4 py-2 rounded-[33px] w-fit cursor-pointer hover:underline">
                Connect Now
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </CustomSection>
    </div>
  );
};

export default Connect;
