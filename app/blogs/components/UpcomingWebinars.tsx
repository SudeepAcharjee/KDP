'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const webinarData = [
  {
    id: 1,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/about.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=1Qy7sYwXr6U',
  },
  {
    id: 2,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/about.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=1Qy7sYwXr6U',
  },
  {
    id: 3,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/images/about.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=1Qy7sYwXr6U',
  },
];

const UpcomingWebinars = () => {
  const [, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="w-full bg-white py-[100px] px-4 sm:px-6 md:px-10 lg:px-[100px] flex justify-center">
      <div className="w-full max-w-[1140px] flex flex-col items-center gap-[50px]">
        {/* Header */}
        <div className="w-full flex justify-between items-center">
          <h2 className="text-black text-[26px] sm:text-[28px] md:text-[32px] leading-[1.3] font-normal font-poppins tracking-[-0.02em]">
            Upcoming Events
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[24px] gap-y-[16px] w-full justify-items-center">
          {webinarData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="w-full max-w-[364px] h-[590px] flex flex-col px-4 py-4 gap-[px] border border-black/[0.35] rounded-[12px]"
            >
              {/* Image */}
              <div className="relative w-[332px] h-[250px] rounded-[8px]">
                <Image
                  src={item.image}
                  alt="Webinar"
                  fill
                  className="object-cover rounded-[8px]"
                />
              </div>

              {/* Content */}
              <div className="w-full flex flex-col gap-[10px] pt-4">
                {/* Meta */}
                <div className="flex items-center gap-[8px] h-[12px]">
                  <span className="text-[#0F6CBD] text-[12px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    News
                  </span>
                  <div className="w-[4px] h-[4px] bg-black rounded-full" />
                  <span className="text-black/60 text-[12px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    {item.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-black font-poppins text-[18px] sm:text-[18px] md:text-[18px] leading-[130%] tracking-[-0.02em] font-normal">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-black/60 text-[16px] sm:text-[16px] md:text-[16px] leading-[160%] tracking-[-0.02em] text-justify">
                  {item.excerpt}
                </p>
              </div>

              {/* Read More Button */}
              <div className="pt-[10%]">
                <button
                  onClick={() => setActiveVideo(item.videoUrl)}
                  className="group relative w-[165px] h-[56px] px-[24px] py-[16px] text-black text-[16px] font-light 
                    flex items-center justify-between gap-[0px] rounded-lg bg-white overflow-hidden"
                >
                  <span className="relative z-10 tracking-[-0.02em]">Read More</span>
                  <svg
                    className="relative z-10 w-[24px] h-[24px]"
                    fill="none"
                    stroke="black"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span
                    className="absolute inset-0 rounded-lg p-[1px] transition-transform duration-500 ease-out group-hover:scale-110"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, #1C76FD 0%, #4738F4 43%, #5721F0 65%, #5721F0 93%)',
                    }}
                  />
                  <span className="absolute inset-0 m-[1px] bg-white rounded-lg pointer-events-none" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingWebinars;
