'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const SubscribeCTA = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full flex justify-center items-center px-4 py-20 md:py-[100px] overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/webinar/subsbg.png')`,
          backgroundBlendMode: 'plus-lighter',
        }}
      />

      {/* Glass Card Container */}
      <div className="relative z-10 w-full max-w-[1196px] rounded-[15px] bg-[rgba(25,19,63,0.5)] backdrop-blur-[16px] flex flex-col items-center px-6 md:px-[100px] py-[80px] gap-[56px]">
        {/* Title Section */}
        <div className="flex flex-col items-center gap-[22px] max-w-[676px] text-center">
          <h2 className="text-white font-poppins text-[32px] md:text-[48px] leading-[130%] tracking-[-0.02em]">
            Get the Latest Cyber Insights Delivered
          </h2>
          <p className="text-white/60  text-[16px] leading-[160%] tracking-[-0.02em] max-w-[460px]">
            At a ipsum bibendum non massa. Tristique tristique odio sed eget eget mauris non et.
            Aliquam erat neque ornare sed facilisis.
          </p>
        </div>

        {/* Email Input & Button */}
        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-[575px]">
          <input
            type="email"
            placeholder="Business Email*"
            className="w-full sm:w-[417px] h-[44px] rounded-md bg-white/20 text-white placeholder-[#909090] px-4 text-sm focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto h-[44px] px-6 flex items-center justify-center gap-2 rounded-[8px] bg-[#003CF5] text-white font-poppins text-[15px] font-medium"
          >
            Subscribe
            <FaArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default SubscribeCTA;
