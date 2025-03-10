'use client';
import Image from "next/image";
import CustomSection from "../Layout/CustomSection";
import { motion } from "framer-motion";
import { slideDownV } from "@/utils/Animation";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <div className="flex items-center justify-center w-full bg-slate-900 text-white">
        <CustomSection className="flex-col gap-2">
          <div className="w-full flex flex-col md:flex-row justify-between py-6 text-[1rem] gap-6">
            {/* Business Overview */}
            <div className="flex flex-col space-y-6 gap-1 max-w-[350px]">
            <motion.div variants={slideDownV} className="justify-self-start">
  <Link href="/" className="flex items-center space-x-2">
    <Image
      src="/images/logo.jpg" 
      alt="KDP Studios Logo"
      width={50}
      height={50}
      className="w-[50px] h-[50px] object-contain"
    /> 
    <span className="text-white text-3xl font-bold ">KDP Studios</span>
  </Link>
</motion.div>
              <div className="flex flex-col space-y-4">
                <p>
                  We specialize in event planning, artist management, PR, and wedding planning.
                  Whether it’s a corporate event, a private party, or a dream wedding, we bring 
                  creativity and expertise to craft unforgettable experiences.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Image src="/icons/ig.svg" alt="Instagram" width={32} height={32} />
                <Image src="/icons/in.svg" alt="LinkedIn" width={32} height={32} />
                <Image src="/icons/x.svg" alt="Twitter" width={32} height={32} />
                <Image src="/icons/fb.svg" alt="Facebook" width={32} height={32} />
              </div>
            </div>

            {/* Our Services */}
            <div className="flex flex-col space-y-6 gap-3">
              <p className="font-bold text-[1.5rem]">Our Services</p>
              <div className="flex flex-col gap-1">
                <span>Event Planning</span>
                <span>Artist Management</span>
                <span>Public Relations</span>
                <span>Wedding Planning</span>
                <span>Corporate Events</span>
              </div>
            </div>

            {/* Support & Contact */}
            <div className="flex flex-col space-y-6 gap-3">
              <p className="font-bold text-[1.5rem]">Support & Contact</p>
              <div className="flex flex-col gap-1">
                <span>Customer Support</span>
                <span>Vendor Partnerships</span>
                <span>Event Consultation</span>
                <span>FAQs</span>
                <span>Careers</span>
              </div>
            </div>

            {/* Policies */}
            <div className="flex flex-col space-y-6 gap-3">
              <p className="font-bold text-[1.5rem]">Policies</p>
              <div className="flex flex-col gap-1">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
                <span>Refund & Cancellation</span>
                <span>Code of Conduct</span>
              </div>
            </div>
          </div>
        </CustomSection>
      </div>
    </footer>
  );
};

export default Footer;
