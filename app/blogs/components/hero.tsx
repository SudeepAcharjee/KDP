'use client';


import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      className="relative w-full  h-auto min-h-[614px] bg-cover bg-center mx-auto flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between px-4 py-12 lg:px-0 lg:py-0"
      style={{ backgroundImage: "url('/images/webinar/webinarbg.png')" }}
    >
      {/* Left Text Block with Fade-Up */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-[608px] flex flex-col justify-center items-start gap-4 lg:gap-[6px] mt-6 lg:mt-0 px-2 lg:px-0 lg:absolute lg:left-[111px] lg:top-[calc(52%-162.5px+50px)]"
      >
        {/* Tagline & Date */}
        <div className="flex flex-wrap items-center gap-2 lg:gap-[9.2px] w-full lg:w-[291px]">
          <span className="text-[#4285F4] font-poppins font-medium text-sm lg:text-[13.8px] leading-[120%] tracking-[-0.03em] capitalize">
            Upcoming
          </span>
          <span className="w-[4.6px] h-[4.6px] rounded-full bg-white" />
          <span className="text-white font-poppins font-medium text-sm lg:text-[13.8px] leading-[120%] tracking-[-0.03em] capitalize">
            04 PM IST
          </span>
          <span className="w-[4.6px] h-[4.6px] rounded-full bg-white" />
          <span className="text-white font-poppins font-medium text-sm lg:text-[13.8px] leading-[120%] tracking-[-0.03em] capitalize">
            26 January 2026
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-white font-medium text-[32px] lg:text-[46px] leading-[42px] lg:leading-[66px] tracking-[-0.0625rem] font-poppins">
          Lorem Ipsum is simply
          <br className="hidden lg:block" /> dummy text <span className="text-white">.</span>
        </h1>

        {/* Paragraph */}
        <p className="text-[#C1C1C1] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[26px] font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          <br className="hidden lg:block" />
          industry. Lorem Ipsum has been the industrys standard dummy
          <br className="hidden lg:block" />
          text ever since the 1500s
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-6 lg:mt-10 z-10"
        >
          <GradientButton
            text={
              <span className="flex items-center gap-[10px]">
                <span className="text-white text-[16px] font-medium tracking-[-0.32px]">
                  Register
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transform rotate-0"
                >
                  <path
                    d="M5 12H19M12 5L19 12L12 19"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            }
            href="/"
            className="w-[144px] h-[56px] px-[24px] rounded-[8px] bg-gradient-to-r from-[#1C76FD] to-[#5721F0]"
          />
        </motion.div>
      </motion.div>

      {/* Right Image with Fade-Up */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-auto flex justify-center items-center lg:absolute lg:right-[40px] lg:top-1/2 lg:-translate-y-1/2 px-4 lg:px-0 mt-12 sm:mt-16 md:mt-20 lg:mt-0"
      >
        <img
          src="/images/webinar/webinarhero.png"
          alt="Visual"
          className="max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[550px] h-auto object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
