"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const artists = [
  {
    category: "Percussionist",
    title: "KAY-DEE",
    description:
      "A master percussionist since age 10, KAY-DEE brings rhythmic versatility and high-octane energy to every performance with his expertise in diverse world instruments.",
    image: "/images/kaydee.jpeg",
    link: "/services/percussionist",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
  {
    category: "DJ Services",
    title: "DJ Radha",
    description:
      "The Young Pioneer of Sound: Hailing as the youngest DJ in town, DJ Radha brings a fresh and dynamic perspective to the Bollywood music scene",
    image: "/images/djradha.jpeg",
    link: "/services/dj-radha",
    instagram: "https://instagram.com/djradha_official",
  },
];

const ArtistSection = () => {
  return (
    <section className="relative w-full py-24 px-6 overflow-hidden bg-white text-zinc-900">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-purple-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-orange-100/30 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-purple-600 uppercase bg-purple-50 rounded-full mb-6 border border-purple-100">
              Expertise & Talent
            </span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6 text-zinc-900">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">Curations</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Grid Layout - Adjusted for 2 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {artists.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-zinc-200 rounded-[2.5rem] overflow-hidden hover:border-purple-200 transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(168,85,247,0.15)]"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[10px] font-bold tracking-widest text-white border border-white/20 uppercase">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-600 transition-colors duration-300 text-zinc-900">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-end mt-auto">
                    {/* Learn More removed */}
                    
                    <a
                      href={item.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-zinc-50 rounded-full hover:bg-gradient-to-tr hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-500 group/insta shadow-sm"
                    >
                      <FaInstagram size={18} className="text-zinc-400 group-hover/insta:text-white group-hover/insta:scale-110 transition-transform" />
                    </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-zinc-500 text-sm font-medium mb-8">
            Wanna collaborate with our talent or use our technology for your next big event?
          </p>
          <Link href="/contact">
            <button className="px-12 py-5 bg-zinc-900 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-purple-600 transition-all duration-500 shadow-xl shadow-zinc-200">
              Contact Now
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtistSection;
