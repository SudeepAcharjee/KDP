"use client";

import CustomSection from "@/components/Layout/CustomSection";

import { useRef } from "react";

import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";

const MoreDetails = () => {
  const isMissionRef = useRef(null);
  const isVissionRef = useRef(null);

  const missionisInView = useIntersectionObserver(
    isMissionRef,
    { threshold: 0.1 },
    false
  );
  const visionInView = useIntersectionObserver(
    isVissionRef,
    { threshold: 0.1 },
    false
  );

  return (
    <div className="relative w-full flex items-center justify-center py-10">
      <CustomSection>
        <div className="flex flex-col gap-16">
          <motion.div
            ref={isVissionRef}
            initial="hidden"
            animate={visionInView ? "visible" : "hidden"}
            variants={containerV}
            className="flex flex-col gap-2"
          >
            <motion.p
              variants={slideUpV}
              className="text-[4rem] font-bold text-[#DE1F3B]"
            >
              Vision
            </motion.p>
            <motion.div variants={slideUpV} className="max-w-[1280px]">
              <p className="text-[1.25rem] leading-[20px]">
                Our vision is to deliver superior-quality products at optimal
                costs, ensuring unparalleled customer satisfaction. We aspire to
                become the most trusted and reliable name in the industry by
                fostering an extensive network of valued clients and strategic
                partners, driving innovation, and creating enduring
                relationships.
              </p>
            </motion.div>
          </motion.div>
          <motion.div
            ref={isMissionRef}
            initial="hidden"
            animate={missionisInView ? "visible" : "hidden"}
            variants={containerV}
            className="flex flex-col gap-2"
          >
            <motion.p
              variants={slideUpV}
              className="text-[4rem] font-bold text-[#DE1F3B]"
            >
              Mission
            </motion.p>
            <motion.div variants={slideUpV} className="max-w-[1280px]">
              <p className="text-[1.25rem] leading-[20px]">
                Our mission is to empower your business by driving success
                across the entire recruitment lifecycle, from recruitment process
                outsourcing (RPO) to employer branding. At SherylTech, we excel
                in delivering world-class customer experiences, continuously
                enhancing our expertise and capabilities to meet and exceed
                client expectations. We remain committed to understanding your
                unique needs and translating them into actionable improvements
                that yield measurable results, ensuring mutual growth and
                long-term success.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </CustomSection>
    </div>
  );
};

export default MoreDetails;
