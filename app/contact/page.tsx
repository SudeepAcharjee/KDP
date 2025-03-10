"use client";

import React from "react";
import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Form from "@/components/Modal/Form";

import { useRef } from "react";

import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideDownV, slideUpV } from "@/utils/Animation";
// import ContactSection from "./tt";

const Contact = () => {
  const ref = useRef(null);
  const ref2 = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);
  const isInView2 = useIntersectionObserver(ref2, { threshold: 0.1 }, false);

  return (
    <><section className="overflow-hidden w-full relative flex min-h-screen items-center justify-center mt-10 py-20">
      <CustomSection className="flex-col z-10 items-start md:items-center justify-start md:justify-center gap-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
        >
          <motion.p
            variants={slideDownV}
            className="text-black font-bold text-[2.75rem] md:text-[4rem] leading-[40px]"
          >
            Keep The Conversation Going
          </motion.p>
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={isInView2 ? "visible" : "hidden"}
          variants={slideUpV}
        >
          <Form />
        </motion.div>
      </CustomSection>
      <div className="absolute inset-0">
        <Image
          src="/images/conatctbg.jpeg"
          alt=""
          width={1560}
          height={1490}
          className="w-full h-full object-cover object-center" />
      </div>
    </section></>
  );
};

export default Contact;
