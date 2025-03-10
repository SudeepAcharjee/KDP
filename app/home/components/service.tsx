"use client";
import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";

const Services = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);

  const services = [
    {
      icon: "/icons/monitorwhite.svg",
      title: "Talent Acquisition & Recruitment",
      description:
        "Helping companies connect with top-skilled professionals through advanced AI-driven hiring solutions and targeted recruitment strategies.",
      link: "/services/talent-acquisition",
    },
    {
      icon: "/icons/userwhite.svg",
      title: "Job Opportunities for Individuals",
      description:
        "Providing individuals with personalized job recommendations that match their skills, experience, and career goals.",
      link: "/services/job-opportunities",
    },
    {
      icon: "/icons/insurancewhite.svg",
      title: "Career Development & Upskilling",
      description:
        "Empowering job seekers with skill enhancement programs, career coaching, and training opportunities to boost employability.",
      link: "/services/career-development",
    },
    {
      icon: "/icons/bpowhite.svg",
      title: "Business & Workforce Solutions",
      description:
        "Delivering workforce planning, HR solutions, and business consulting to help companies build agile and high-performing teams.",
      link: "/services/workforce-solutions",
    },
    {
      icon: "/icons/bpowhite.svg",
      title: "Freelance & Contract Hiring",
      description:
        "Enabling businesses to hire freelancers and contract-based professionals for flexible, short-term, or project-based work.",
      link: "/services/freelance-hiring",
    },
  ];

  return (
    <div className="relative w-full flex items-center justify-center bg-white text-black">
      <CustomSection className="flex-col">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="flex flex-col space-y-3"
        >
          <motion.div
            variants={containerV}
            className="flex flex-col gap-3 max-w-[620px] text-left"
          >
            <motion.div variants={slideUpV} className="pb-7">
              <div className="bg-red-700 text-white px-4 py-2 rounded-[33px] w-fit">
                Our Services
              </div>
            </motion.div>
            <motion.p
              variants={slideUpV}
              className="font-bold text-[2.25rem] md:text-[3rem] leading-[30px] md:leading-[44px] text-left"
            >
              Connecting <span className="text-red-700">Companies</span> and{" "}
              <span className="text-[#5F4B8B]">Talent</span> for Success
            </motion.p>
            <motion.p
              variants={slideUpV}
              className="text-[1.25rem] leading-[24px] text-left"
            >
              Our platform simplifies hiring for businesses and empowers job seekers by offering tailored job opportunities, career growth resources, and seamless recruitment solutions.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerV}
            className="pt-10 md:pt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-left"
          >
            {services.map((service, index) => (
              <motion.div
                variants={slideUpV}
                key={index}
                className="max-w-[250px] min-h-[300px] h-full flex flex-col space-y-4 items-start justify-between text-left p-4"
              >
                {/* Icon */}
                <div className="mt-1 bg-red-700 rounded-full p-3 w-[60px] h-[60px] flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={36}
                    height={36}
                    className="w-[36px] h-[36px]"
                  />
                </div>
                {/* Title */}
                <Link
                  href={service.link}
                  className="font-bold text-[1.25rem] leading-[20px] hover:underline text-left"
                >
                  {service.title}
                </Link>
                {/* Description */}
                <p className="text-[1rem] leading-[24px] max-w-[220px] text-left">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </CustomSection>
    </div>
  );
};

export default Services;
