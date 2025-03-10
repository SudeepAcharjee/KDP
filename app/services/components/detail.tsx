"use client";

import CustomSection from "@/components/Layout/CustomSection";

import { useRef } from "react";

import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";

const ServiceDetail = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);

  return (
    <div className="relative w-full flex items-center justify-center">
      <CustomSection>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="flex flex-col gap-6 py-10"
        >
          <motion.div variants={slideUpV} className="max-w-[1000px]">
            <p className="text-[2.75rem] md:text-[4rem] font-bold text-[#DE1F3B] leading-[40px] md:leading-[64px]">
              Comprehensive IT Solutions Tailored to Your Success
            </p>
          </motion.div>
          <motion.div variants={slideUpV} className="max-w-[1280px]">
            <p className="text-[1.25rem] leading-[20px]">
              At SherylTech, we offer a wide range of innovative IT services
              designed to empower businesses of all sizes. From cutting-edge
              software development to specialized recruitment process
              outsourcing (RPO) and IT staffing, our solutions are crafted to
              meet the dynamic needs of modern enterprises. With a strong focus
              on quality, efficiency, and scalability, we partner with you to
              navigate technological challenges and unlock new opportunities for
              growth.
            </p>
          </motion.div>
          <motion.div variants={slideUpV} className="mt-7 max-w-[1280px]">
            <p className="text-[1.25rem] leading-[20px]">
              Our services are driven by expertise, innovation, and a commitment
              to excellence. We understand that every business is unique, which
              is why we deliver customized solutions that align with your
              objectives. Whether optimizing your IT systems, enhancing
              workforce efficiency, or providing robust support, SherylTech
              ensures seamless execution and measurable outcomes. Partner with
              us to transform your vision into reality and stay ahead in a
              competitive digital landscape.
            </p>
          </motion.div>
        </motion.div>
      </CustomSection>
    </div>
  );
};

export default ServiceDetail;
