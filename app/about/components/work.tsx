"use client";

import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";

import { useRef } from "react";

import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";

const HowWeWork = () => {
  const ref = useRef(null);
  const isWorkRef = useRef(null);
  const isTimelineRef = useRef(null);

  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);
  const isWorkInView = useIntersectionObserver(isWorkRef, { threshold: 0.1 }, false);
  const isTimelineInView = useIntersectionObserver(isTimelineRef, { threshold: 0.1 }, false);

  return (
    <div className="relative w-full flex items-center justify-center bg-red-700 text-white py-2 md:py-36">
      <CustomSection className="flex-col gap-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
        >
          <motion.p
            variants={slideUpV}
            className="font-bold text-[4rem] leading-[60px] md:leading-[44px]"
          >
            How We Connect Talent & Companies
          </motion.p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <motion.div
              ref={isWorkRef}
              initial="hidden"
              animate={isWorkInView ? "visible" : "hidden"}
              variants={slideUpV}
            >
              <Image
                src="/images/work.png"
                alt="Talent Acquisition Process"
                width={1200}
                height={700}
                className="object-center object-cover rounded-[8px] min-h-[300px] md:min-h-[450px] max-h-[500px] w-full md:max-w-[400px] transition-all duration-500"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex px-10 md:border-l-4 border-white">
            <motion.div
              ref={isTimelineRef}
              initial="hidden"
              animate={isTimelineInView ? "visible" : "hidden"}
              variants={containerV}
              className="flex flex-col justify-between gap-10"
            >
              <motion.div
                variants={slideUpV}
                className="pl-0 md:pl-6 pt-10 md:pt-0 relative flex flex-col gap-6 md:gap-1"
              >
                <p className="text-[2.25rem] font-bold leading-[40px]">
                  AI-Driven Job Matching
                </p>
                <p className="text-[1.25rem] leading-[20px]">
                  We leverage intelligent algorithms to match skilled professionals with companies looking for top talent, ensuring the best fit for both.
                </p>
                <div className="absolute top-0 md:top-1/2 -left-10 md:-left-20 transform -translate-y-1/2 w-[75px] h-[75px] rounded-full bg-white blur-[12px]"></div>
                <div className="text-black absolute top-0 md:top-1/2 -left-10 md:-left-20 transform -translate-y-1/2 w-[75px] h-[75px] rounded-full flex items-center justify-center">
                  <p className="text-[3rem] font-bold">1</p>
                </div>
              </motion.div>
              <motion.div
                variants={slideUpV}
                className="pl-0 md:pl-6 pt-10 md:pt-0 relative flex flex-col gap-6 md:gap-1"
              >
                <p className="text-[2.25rem] font-bold leading-[40px]">
                  Career Development & Upskilling
                </p>
                <p className="text-[1.25rem] leading-[20px]">
                  We provide career growth resources, training programs, and skill enhancement opportunities to help professionals stay competitive.
                </p>
                <div className="absolute top-0 md:top-1/2 -left-10 md:-left-20 transform -translate-y-1/2 w-[75px] h-[75px] rounded-full bg-white blur-[12px]"></div>
                <div className="text-black absolute top-0 md:top-1/2 -left-10 md:-left-20 transform -translate-y-1/2 w-[75px] h-[75px] rounded-full flex items-center justify-center">
                  <p className="text-[3rem] font-bold">2</p>
                </div>
              </motion.div>
              <motion.div
                variants={slideUpV}
                className="pl-0 md:pl-6 pt-10 md:pt-0 relative flex flex-col gap-6 md:gap-1"
              >
                <p className="text-[2.25rem] font-bold leading-[40px]">
                  Seamless Hiring Process
                </p>
                <p className="text-[1.25rem] leading-[20px]">
                  Our platform streamlines recruitment, reducing hiring time for businesses while providing job seekers with fast-track opportunities.
                </p>
                <div className="absolute top-0 md:top-1/2 -left-10 md:-left-20 transform -translate-y-1/2 w-[75px] h-[75px] rounded-full bg-white blur-[12px]"></div>
                <div className="text-black absolute top-0 md:top-1/2 -left-10 md:-left-20 transform -translate-y-1/2 w-[75px] h-[75px] rounded-full flex items-center justify-center">
                  <p className="text-[3rem] font-bold">3</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </CustomSection>
    </div>
  );
};

export default HowWeWork;
