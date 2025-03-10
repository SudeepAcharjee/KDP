"use client";

import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";

import { useRef } from "react";

import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideDownV } from "@/utils/Animation";

const ServiceHero = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);

  return (
    <div className="overflow-hidden w-full min-h-[500px] relative flex items-center justify-center">
      <CustomSection className="flex-col gap-2 z-10 text-white items-center">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
        >
          <motion.p
            variants={slideDownV}
            className="font-bold text-[4rem] md:text-[6rem]"
          >
            Services
          </motion.p>
        </motion.div>
      </CustomSection>
      <div className="absolute inset-0">
        <Image
          src="/images/servicehero.png"
          alt=""
          width={1560}
          height={600}
          className="w-full h-full md:h-[500] object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ServiceHero;
