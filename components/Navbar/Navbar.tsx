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
  const isGallery = pathname === "/gallery";
  const isEvents = pathname === "/events";
  
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
    <nav className="bg-white text-black fixed top-0 w-full flex items-center justify-center z-[99999]">
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
              <span className="text-black text-3xl font-bold">KDP Studios</span>
            </Link>
          </motion.div>

          <motion.div
            variants={slideDownV}
            className="hidden lg:flex gap-6 text-[1rem] justify-self-center"
          >
            {[
              { label: "Home", path: "/", active: isHome },
              { label: "About", path: "/about", active: isAbout },
              { label: "Events", path: "/events", active: isEvents },
              { label: "Gallery", path: "/gallery", active: isGallery },
              { label: "Blog", path: "/blogs", active: isBlog },
            ].map((link) => (
              <motion.div key={link.label} className="group transition-all duration-300 relative">
                <div
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#5F4B8B] transition-transform transform ${
                    link.active ? "scale-x-100" : "scale-x-0"
                  } group-hover:scale-x-100`}
                ></div>
                <Link href={link.path}>{link.label}</Link>
              </motion.div>
            ))}
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

        {/* Mobile Sidebar */}
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
              onClick={toggleSidebar}
            />
          </div>

          <div className="flex flex-col gap-4 w-full items-center flex-grow pt-4">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Events", path: "/events" },
              { label: "Gallery", path: "/gallery" },
              { label: "Blog", path: "/blogs" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.path}
                onClick={toggleSidebar}
                className="border border-gray-400 w-full max-w-lg font-semibold text-text-2xl flex items-center justify-between rounded-full px-6 py-2"
              >
                <span>{link.label}</span>
              </Link>
            ))}
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
