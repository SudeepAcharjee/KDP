"use client";

import Link from "next/link";
import { FaInstagram, FaArrowRight } from "react-icons/fa";

const services = [
  {
    category: "Event Management",
    title: "Bespoke Event Excellence",
    description:
      "Turning visions into reality with meticulous planning and flawless execution for luxury events and grand celebrations.",
    image: "/images/event-management.png",
    link: "/services/event-management",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
  {
    category: "Artist Management",
    title: "Talent & Representation",
    description:
      "Nurturing creativity and maximizing potential. We represent world-class talent and handle career trajectory with precision.",
    image: "/images/artist-management.png",
    link: "/services/artist-management",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
  {
    category: "Digital Marketing",
    title: "Strategic Digital Growth",
    description:
      "Innovating the digital landscape with data-driven strategies that amplify your brand's presence and engagement online.",
    image: "/images/digital-marketing.png",
    link: "/services/digital-marketing",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
  {
    category: "Brand Strategy",
    title: "Identity & Vision",
    description:
      "Crafting unique brand stories and long-term strategies that resonate with audiences and build lasting market impact.",
    image: "/images/brand-strategy.png",
    link: "/services/brand-strategy",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-zinc-50 text-zinc-900">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-zinc-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
            We blend artistic vision with strategic excellence to elevate your brand and create unforgettable moments.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-zinc-200 rounded-[2rem] overflow-hidden hover:border-purple-200 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.15)]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative w-full md:w-5/12 h-72 md:h-auto overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-white/40"></div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-center">
                  <div>
                    <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-purple-600 uppercase bg-purple-50 rounded-full mb-6 border border-purple-100">
                      {service.category}
                    </span>
                    <h3 className="text-3xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300 text-zinc-900">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 text-base leading-relaxed mb-8">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <Link 
                      href="/contact"
                      className="group/link inline-flex items-center gap-3 text-xs font-black tracking-widest uppercase text-zinc-900 hover:text-purple-600 transition-colors"
                    >
                      Contact us
                      <FaArrowRight className="text-purple-500 transform group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                    
                    <a
                      href={service.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-500 group/insta shadow-sm"
                    >
                      <FaInstagram size={18} className="group-hover/insta:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

