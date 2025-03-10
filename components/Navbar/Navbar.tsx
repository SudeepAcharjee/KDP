"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import CustomSection from "../Layout/CustomSection";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideDownV } from "@/utils/Animation";
const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isBlog = pathname === "/blogs";
  const isContact = pathname === "/contact";
  const [sidebarOpen, setSidebarOpen] = useState(false);
 const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => {
      document.body.style.overflow = prev ? "auto" : "hidden";
      return !prev;
    });
  };

  return (
    <nav className="bg-white text-black fixed top-0 w-full flex items-center justify-center  z-[99999]">
      <CustomSection className="px-4 py-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerV}
          className="w-full grid grid-cols-2 lg:grid-cols-3 items-center"
        >
<motion.div variants={slideDownV} className="justify-self-start">
  <Link href="/" className="flex items-center space-x-2">
    <Image
      src="/images/logo.jpg" 
      alt="KDP Studios Logo"
      width={50}
      height={50}
      className="w-[50px] h-[50px] object-contain"
    /> 
    <span className="text-black text-3xl font-bold ">KDP Studios</span>
  </Link>
</motion.div>
          <motion.div
            variants={slideDownV}
            className="hidden lg:flex gap-6 text-[1rem] justify-self-center"
          >
            <motion.div className="group transition-all duration-300 relative">
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#5F4B8B] transition-transform transform ${
                  isHome ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></div>
              <Link href="/">Home</Link>
            </motion.div>
            <motion.div className="group transition-all duration-300 relative">
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#5F4B8B] transition-transform transform ${
                  isHome ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></div>
              <Link href="">Events</Link>
            </motion.div>
            <motion.div className="group transition-all duration-300 relative">
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#5F4B8B] transition-transform transform ${
                  isAbout ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></div>
              <Link href="/about">About Us</Link>
            </motion.div>
            <motion.div className="group relative transition-all duration-300">
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#5F4B8B] transition-transform transform ${
                  isBlog ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></div>
              <Link href="/blogs">Blog</Link>
            </motion.div>
            <motion.div className="group relative transition-all duration-300">
              <div
                className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#5F4B8B] transition-transform transform ${
                  isContact ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100`}
              ></div>
              <Link href="/contact">Contact</Link>
            </motion.div>
          </motion.div>
          <div className="block lg:hidden justify-self-end">
            <Image
              src="/icons/Menu_Ham.svg"
              alt="Open Menu"
              width={32}
              height={32}
              className="text-white"
              onClick={toggleSidebar}
            />
          </div>
          <motion.div
            variants={slideDownV}
            className="hidden lg:block justify-self-end"
          >
            <Link href="/contact">
              <div className="relative group hover:bg-[#5F4B8B] bg-[#FFFFFF] hover:text-white text-black border hover:border-white border-black px-4 py-2 rounded-[33px] transition-all duration-300 cursor-pointer">
               Contact Us
                <div className="absolute top-0 left-0 w-full h-full rounded-[33px] group-hover:bg-[#5F4B8B] blur-lg px-6 py-5 -z-10"></div>
              </div>
            </Link>
          </motion.div>
        </motion.div>
        <div
          className={`z-[99999] sideBar fixed top-0 right-0 w-full min-h-[100dvh] lg:hidden flex flex-col justify-between items-center p-6 transition-transform transform ease-in-out duration-700 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="w-full flex justify-end">
            <Image
              src="/icons/Close_X.svg"
              alt="Close"
              width={32}
              height={32}
              className=""
              onClick={toggleSidebar}
            />
          </div>
          <div className="flex flex-col gap-4 w-full items-center flex-grow pt-4">
            <Link
              href="/"
              onClick={toggleSidebar}
              className="border border-red-400 w-full max-w-lg font-semibold text-text-2xl flex items-center justify-between rounded-full px-6 py-2"
            >
              <span>Home</span>
            </Link>
            <Link
              href="/"
              onClick={toggleSidebar}
              className="border border-blue-400 w-full max-w-lg font-semibold text-text-2xl flex items-center justify-between rounded-full px-6 py-2"
            >
              <span>About</span>
            </Link>
           z
            <Link
              href="/blogs"
              onClick={toggleSidebar}
              className="border border-blue-400 w-full max-w-lg font-semibold text-text-2xl flex items-center justify-between rounded-full px-6 py-2"
            >
              <span>Blogs</span>
            </Link>
            <Link
              href="/contact"
              onClick={toggleSidebar}
              className="border border-blue-400 w-full max-w-lg font-semibold text-text-2xl flex items-center justify-between rounded-full px-6 py-2"
            >
              <span>Contact</span>
            </Link>
          </div>
          <footer className="text-center py-4 w-full border-t border-gray-600">
            <p className="text-lg">© 2024 KDP Studios</p>
          </footer>
        </div>
      </CustomSection>
    </nav>
  );
};

export default Navbar;

