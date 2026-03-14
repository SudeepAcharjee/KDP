"use client";

import { 
  FaHome, 
  FaBullhorn, 
  FaVideo, 
  FaCamera, 
  FaUsers, 
  FaFingerprint, 
  FaBezierCurve, 
  FaCode,
  FaArrowRight
} from "react-icons/fa";
import Link from "next/link";

const additionalServices = [
  {
    icon: <FaHome size={32} />,
    title: "Real Estate",
    description: "Elevate your business with real estate marketing, enhancing visibility and attracting potential buyers while building brand trust through captivating visuals and strategic targeting.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <FaBullhorn size={32} />,
    title: "Google & Meta Management",
    description: "Expert ad management involving planning, execution, and optimization of campaigns to enhance effectiveness, save time, and improve ROI by reaching target audiences efficiently.",
    color: "from-blue-600 to-indigo-500"
  },
  {
    icon: <FaVideo size={32} />,
    title: "Videography",
    description: "Professional videography that enhances product presentation, creating visually appealing content that captivates audiences and effectively communicates your unique offerings.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <FaCamera size={32} />,
    title: "Photography",
    description: "Transform your brand's image with professional photography capturing stunning visuals that highlight your products, providing a clear and compelling representation of your business.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: <FaUsers size={32} />,
    title: "Social Media Management",
    description: "Strategic planning and creation of intuitive, visually striking content designed to go viral and convert your audience into loyal customers effortlessly.",
    color: "from-orange-400 to-red-500"
  },
  {
    icon: <FaBezierCurve size={32} />,
    title: "Graphic Design",
    description: "From story-rich logos to emotionally expressive illustrations, our talented designers master the art of visual storytelling to elevate your brand's identity.",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: <FaFingerprint size={32} />,
    title: "Branding",
    description: "Encapsulating your identity through the vibrant pulse of your digital realm, forging unforgettable connections that transcend simple logos.",
    color: "from-amber-400 to-orange-500"
  },
  {
    icon: <FaCode size={32} />,
    title: "Web Development",
    description: "The foundation of your digital castle—expertly crafting secure, scalable, and future-proof platforms that provide a seamless experience for your users.",
    color: "from-sky-400 to-blue-600"
  }
];

const AdditionalServices = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 mb-6 uppercase tracking-tight">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Digital Solutions</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-white hover:border-white transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center text-center"
            >
              <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400 group-hover:text-purple-600 transition-colors"
              >
                Learn More <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalServices;
