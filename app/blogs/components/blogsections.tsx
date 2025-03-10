"use client";

import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import { blogs } from "@/data/blog";

import { useRef } from "react";

import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";

const BlogSection = () => {
  const ref = useRef(null);
  const blogRef = useRef(null);

  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);
  const blogInView = useIntersectionObserver(
    blogRef,
    { threshold: 0.1 },
    false
  );

  return (
    <div className="relative w-full flex items-center justify-center">
      <CustomSection className="flex-col">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="flex flex-col gap-4"
        >
          <motion.p
            variants={slideUpV}
            className="text-[4rem] font-bold text-red-700 leading-[56px]"
          >
            Opportunities for Growth and Success
          </motion.p>
          <motion.div variants={slideUpV} className="max-w-[1280px]">
            <p className="text-[1.25rem] leading-[20px]">
              This platform provides great opportunities for both companies and individuals. 
              Companies can discover top-skilled candidates for a variety of roles, 
              while individuals can find job opportunities that match their skill sets.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          ref={blogRef}
          initial="hidden"
          animate={blogInView ? "visible" : "hidden"}
          variants={containerV}
          className="flex flex-col gap-10 mt-10"
        >
          {blogs.map((blog) => (
            <motion.div
              variants={slideUpV}
              key={blog.id}
              className="bg-red-700 text-white flex flex-col lg:flex-row justify-between px-2 md:px-10 py-6 gap-10"
            >
              <div className="w-full lg:w-1/3 flex flex-col justify-between gap-4 md:gap-6 py-4">
                <p className="font-bold text-[2.5rem] leading-[40px]">
                  {blog.title}
                </p>
                <p className="text-[1.25rem] leading-[20px]">
                  {blog.description}
                </p>
              </div>
              <div className="w-full lg:w-3/4 flex justify-center lg:justify-end">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={1120}
                  height={747}
                  className="object-center object-cover w-full max-w-[700px] h-[300px] md:h-[400px] transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </CustomSection>
    </div>
  );
};

export default BlogSection;