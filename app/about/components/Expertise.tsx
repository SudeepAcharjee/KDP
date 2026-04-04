'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExpertiseSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="mb-8">
              <span className="text-purple-600 font-black text-[10px] uppercase tracking-[0.3em] bg-purple-50 px-4 py-1.5 rounded-full border border-purple-100">
                Events & Collaborations
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mt-6 leading-[1.1] tracking-tight">
                How We Organize <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Legendary</span> Events
              </h2>
            </div>

            <div className="space-y-8">
              <div className="group">
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-purple-600 transition-colors">Seamless Event Planning</h3>
                <p className="text-zinc-500 mt-2 leading-relaxed font-medium">
                  From concept to execution, KDP Studios handles every detail of your event—ensuring it&apos;s impactful, creative, and unforgettable.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-purple-600 transition-colors">Creative Team Collaboration</h3>
                <p className="text-zinc-500 mt-2 leading-relaxed font-medium">
                  We bring together photographers, filmmakers, designers, and strategists to create unique experiences that leave lasting impressions.
                </p>
              </div>

              <div className="group">
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-purple-600 transition-colors">Why Join KDP Studios?</h3>
                <p className="text-zinc-500 mt-2 leading-relaxed font-medium">
                  Whether you&apos;re a creator or a client, being part of KDP means tapping into a passionate community, top-tier events, and endless inspiration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image Overlay Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative group"
          >
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
              <Image
                src="/images/holi5.jpg"
                alt="KDP Studios Event Execution"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <p className="text-white text-sm font-bold tracking-wide italic text-center">
                  &quot;Excellence is in the details, magic is in the execution.&quot;
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-100 rounded-full blur-3xl opacity-60 -z-10 animate-pulse transition-delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
