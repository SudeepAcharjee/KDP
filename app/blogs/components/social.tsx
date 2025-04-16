"use client";

import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { motion } from "framer-motion";

const SocialMediaSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center justify-center px-6 py-16 md:py-[64px] gap-6 md:gap-[35px] bg-cover bg-center relative"
      style={{
        backgroundImage: `url('/images/webinar/Container-1.png')`,
        backgroundBlendMode: "color-dodge, color-dodge, normal",
      }}
    >
      {/* Title */}
      <div className="text-center max-w-[884px]">
        <h2 className="text-white text-[32px] md:text-[48px] leading-[58px]  tracking-[-1px]">
          Join us in social media
        </h2>
        <p className="mt-2 text-[#E4E2DF]/70 text-[16px] md:text-[18px] font-poppins leading-[27px]">
          Subscribe to stay up to date with the latest cyber Security trends
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-[36px] md:gap-[72px] justify-center items-center mt-4">
        <a
          href="https://twitter.com/securezeron"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 w-[27px] h-[27px]"
        >
          <FaXTwitter className="w-full h-full" />
        </a>
        <a
          href="https://facebook.com/securezeron"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 w-[13.5px] h-[27px]"
        >
          <FaFacebookF className="w-full h-full" />
        </a>
        <a
          href="https://www.linkedin.com/company/securezeron/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 w-[27px] h-[27px]"
        >
          <FaLinkedinIn className="w-full h-full" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCf5mdIkQ24YmY41HhRhj_DA"
          aria-label="YouTube"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:opacity-80 w-[35.44px] h-[27px]"
        >
          <FaYoutube className="w-full h-full" />
        </a>
      </div>
    </motion.section>
  );
};

export default SocialMediaSection;
