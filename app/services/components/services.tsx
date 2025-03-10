"use client";

import CustomSection from "@/components/Layout/CustomSection";
import Image from "next/image";

import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideUpV } from "@/utils/Animation";
import { useRef } from "react";
import Link from "next/link";

const ServiceSection = () => {
  const ref = useRef(null);

  const serviceRef1 = useRef(null);
  const serviceRef2 = useRef(null);
  const serviceRef3 = useRef(null);
  const serviceRef4 = useRef(null);
  const serviceRef5 = useRef(null);
  const service1InView = useIntersectionObserver(
    serviceRef1,
    { threshold: 0.1 },
    false
  );
  const service2InView = useIntersectionObserver(
    serviceRef2,
    { threshold: 0.1 },
    false
  );
  const service3InView = useIntersectionObserver(
    serviceRef3,
    { threshold: 0.1 },
    false
  );
  const service4InView = useIntersectionObserver(
    serviceRef4,
    { threshold: 0.1 },
    false
  );
  const service5InView = useIntersectionObserver(
    serviceRef5,
    { threshold: 0.1 },
    false
  );


  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);

  return (
    <div className="relative w-full flex items-center justify-center">
      <CustomSection className="flex-col gap-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="flex flex-col gap-3 max-w-[620px]"
        >
          <motion.div variants={slideUpV} className="pb-4">
            <div className="bg-[#DE1F3B] text-white px-4 py-2 rounded-[33px] w-fit">
              Our services
            </div>
          </motion.div>
          <motion.p
            variants={slideUpV}
            className="font-bold text-[2.25rem] md:text-[3rem] leading-[30px] md:leading-[44px]"
          >
            Solutions That <span className="text-[#DE1F3B]">Empower</span>{" "}
            Growth
          </motion.p>
          <motion.p
            variants={slideUpV}
            className="text-[1.25rem] leading-[20px]"
          >
            Innovative services designed to meet your unique business needs and
            drive success.
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {/* SERVICE 1 */}
          <motion.div
            ref={serviceRef1}
            initial="hidden"
            animate={service1InView ? "visible" : "hidden"}
            variants={slideUpV}
            className={`flex flex-col
               md:flex-row
               justify-between gap-8`}
          >
            <motion.div variants={slideUpV} className="w-full md:w-1/2">
              <Image
                src="/images/service1.png"
                alt=""
                width={975}
                height={650}
                className="object-center object-cover w-full max-w-[600px] h-[400px] rounded-[10px]"
              />
            </motion.div>
            <motion.div
              variants={slideUpV}
              className="w-full md:w-1/2 flex flex-col justify-between gap-6"
            >
              <p className="text-[3rem] font-bold leading-[40px]">
                1. Software Development
              </p>
              <div className="max-w-[650px]">
                <p className="text-[1.25rem] leading-[20px]">
                  Delivering innovative, scalable, and high-performance software
                  solutions tailored to meet your business objectives. Our
                  expert team leverages cutting-edge technologies and agile
                  methodologies to build robust, user-centric applications. From
                  concept to deployment, we ensure seamless integration and
                  unparalleled functionality. Partner with us to transform your
                  ideas into impactful digital solutions.
                </p>
              </div>
              <div className="flex">
                <Link href="/services/software-development" className="group">
                  <div className="group-hover:bg-[#DE1F3B] bg-black text-white px-4 py-2 rounded-[33px] w-fit transition-all duration-300">
                    View More
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* SERVICE 2 */}
          <motion.div
            ref={serviceRef2}
            initial="hidden"
            animate={service2InView ? "visible" : "hidden"}
            variants={slideUpV}
            className={`flex flex-col
               md:flex-row-reverse
               justify-between gap-8`}
          >
            <motion.div variants={slideUpV} className="w-full md:w-1/2">
              <Image
                src="/images/service2.png"
                alt=""
                width={975}
                height={650}
                className="object-center object-cover w-full max-w-[600px] h-[400px] rounded-[10px]"
              />
            </motion.div>
            <motion.div
              variants={slideUpV}
              className="w-full md:w-1/2 flex flex-col justify-between gap-6"
            >
              <p className="text-[3rem] font-bold leading-[40px]">
                2. US Staffing
              </p>
              <div className="max-w-[650px]">
                <p className="text-[1.25rem] leading-[20px]">
                  Providing top-tier staffing solutions to connect businesses
                  with the right talent efficiently and effectively. Our
                  comprehensive approach ensures alignment with your
                  organizational needs, delivering skilled professionals who
                  drive success. With a focus on quality and reliability, we
                  streamline the hiring process, saving time and resources.
                  Trust us to build your dream team and empower your growth.
                </p>
              </div>
              <div className="flex">
                <Link href="/services/us-staffing" className="group">
                  <div className="group-hover:bg-[#DE1F3B] bg-black text-white px-4 py-2 rounded-[33px] w-fit transition-all duration-300">
                    View More
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* SERVICE 3 */}
          <motion.div
            ref={serviceRef3}
            initial="hidden"
            animate={service3InView ? "visible" : "hidden"}
            variants={slideUpV}
            className={`flex flex-col
               md:flex-row
               justify-between gap-8`}
          >
            <motion.div variants={slideUpV} className="w-full md:w-1/2">
              <Image
                src="/images/service3.png"
                alt=""
                width={975}
                height={650}
                className="object-center object-cover w-full max-w-[600px] h-[400px] rounded-[10px]"
              />
            </motion.div>
            <motion.div
              variants={slideUpV}
              className="w-full md:w-1/2 flex flex-col justify-between gap-6"
            >
              <p className="text-[3rem] font-bold leading-[40px]">
                3. IPO
              </p>
              <div className="max-w-[650px]">
                <p className="text-[1.25rem] leading-[20px]">
                  Empowering businesses with comprehensive insurance solutions
                  tailored to protect their assets and mitigate risks. Our
                  expertise spans a wide range of policies, ensuring
                  personalized coverage that aligns with your unique
                  requirements. With a commitment to reliability and trust, we
                  help you navigate the complexities of the insurance landscape.
                  Safeguard your future with our dedicated support and industry
                  insights.
                </p>
              </div>
              <div className="flex">
                <Link href="/services/IPO" className="group">
                  <div className="group-hover:bg-[#DE1F3B] bg-black text-white px-4 py-2 rounded-[33px] w-fit transition-all duration-300">
                    View More
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>
          {/* SERVICE 4 */}
          <motion.div
            ref={serviceRef4}
            initial="hidden"
            animate={service4InView ? "visible" : "hidden"}
            variants={slideUpV}
            className={`flex flex-col
               md:flex-row-reverse
               justify-between gap-8`}
          >
            <motion.div variants={slideUpV} className="w-full md:w-1/2">
              <Image
                src="/images/service4.png"
                alt=""
                width={975}
                height={650}
                className="object-center object-cover w-full max-w-[600px] h-[400px] rounded-[10px]"
              />
            </motion.div>
            <motion.div
              variants={slideUpV}
              className="w-full md:w-1/2 flex flex-col justify-between gap-6"
            >
              <p className="text-[3rem] font-bold leading-[40px]">4. BPO</p>
              <div className="max-w-[650px]">
                <p className="text-[1.25rem] leading-[20px]">
                  Streamlining operations and enhancing efficiency with our
                  end-to-end BPO solutions designed to meet your business goals.
                  From customer support to back-office processes, we deliver
                  exceptional service through a combination of expertise and
                  advanced technology. Focus on your core objectives while we
                  handle the complexities, driving cost savings and operational
                  excellence.
                </p>
              </div>
              <div className="flex">
                <Link href="/services/bpo" className="group">
                  <div className="group-hover:bg-[#DE1F3B] bg-black text-white px-4 py-2 rounded-[33px] w-fit transition-all duration-300">
                    View More
                  </div>
                </Link>
              </div>
            </motion.div>


            
          </motion.div>

          {/* Service 5 */}
          {/* SERVICE 5 */}
<motion.div
  ref={serviceRef5}
  initial="hidden"
  animate={service5InView ? "visible" : "hidden"}
  variants={slideUpV}
  className={`flex flex-col
     md:flex-row
     justify-between gap-8`}
>
  <motion.div variants={slideUpV} className="w-full md:w-1/2">
    <Image
      src="/images/RPO.jpg" // Replace with your RPO service image
      alt="RPO Service"
      width={975}
      height={650}
      className="object-center object-cover w-full max-w-[600px] h-[400px] rounded-[10px]"
    />
  </motion.div>
  <motion.div
    variants={slideUpV}
    className="w-full md:w-1/2 flex flex-col justify-between gap-6"
  >
    <p className="text-[3rem] font-bold leading-[40px]">
      5. RPO
    </p>
    <div className="max-w-[650px]">
      <p className="text-[1.25rem] leading-[20px]">
        Transform your talent acquisition with our RPO solutions. We manage
        your recruitment processes, from sourcing and screening to onboarding,
        ensuring you find the best-fit candidates quickly and efficiently. Our
        data-driven strategies and expert team deliver scalable, customizable
        solutions aligned with your business goals. Focus on your core
        objectives while we build your winning workforce.
      </p>
    </div>
    <div className="flex">
      <Link href="/services/rpo" className="group">
        <div className="group-hover:bg-[#DE1F3B] bg-black text-white px-4 py-2 rounded-[33px] w-fit transition-all duration-300">
          View More
        </div>
      </Link>
    </div>
  </motion.div>
</motion.div>

        </div>
      </CustomSection>
    </div>
  );
};

export default ServiceSection;
