"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";

const Services = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);

  const services = [
    {
      image: "/images/event-management.png",
      title: "Event Management",
      description: "Meticulous planning and flawless execution for luxury events and grand celebrations.",
      link: "/services/event-management",
      color: "from-purple-600/80 to-indigo-600/80"
    },
    {
      image: "/images/artist-management.png",
      title: "Artist Management",
      description: "Representing world-class talent and handling career trajectory with global precision.",
      link: "/services/artist-management",
      color: "from-pink-600/80 to-rose-600/80"
    },
    {
      image: "/images/h2.jpeg",
      title: "House Party",
      description: "Unforgettable house parties with professional DJs, themed decor, and premium sound.",
      link: "/services/house-party",
      color: "from-orange-600/80 to-red-600/80"
    },
    {
      image: "/images/digital-marketing.png",
      title: "Digital Marketing",
      description: "Data-driven strategies that amplify your brand's presence and engagement online.",
      link: "/services/digital-marketing",
      color: "from-blue-600/80 to-cyan-600/80"
    },
    {
      image: "/images/pr-media.png",
      title: "PR & Media",
      description: "Elevating your brand identity through strategic storytelling and media connections.",
      link: "/services/pr-media",
      color: "from-emerald-600/80 to-teal-600/80"
    },
  ];

  return (
    <div className="relative w-full py-24 bg-white text-black overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="flex flex-col"
        >
          <motion.div
            variants={containerV}
            className="flex flex-col gap-6 max-w-2xl text-left mb-16"
          >
            <motion.div variants={slideUpV}>
              <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-purple-600 uppercase bg-purple-50 rounded-full border border-purple-100">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              variants={slideUpV}
              className="text-4xl md:text-6xl font-black tracking-tight leading-tight"
            >
              Exceeding <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Expectations</span> In Every Aspect
            </motion.h2>
            <motion.p
              variants={slideUpV}
              className="text-lg md:text-xl text-zinc-500 font-medium leading-relaxed"
            >
              We blend artistic vision with strategic excellence to elevate your brand and create unforgettable moments that resonate globally.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerV}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                variants={slideUpV}
                key={index}
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Only show description on hover */}
                    <p className="text-white/0 group-hover:text-white/90 text-sm leading-relaxed transition-all duration-500 h-0 group-hover:h-auto overflow-hidden">
                      {service.description}
                    </p>
                    
                    <div className="mt-6">
                      <Link
                        href={service.link}
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-black transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-lg"
                      >
                        <FaArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
