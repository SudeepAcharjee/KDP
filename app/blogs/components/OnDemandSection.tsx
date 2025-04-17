'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ReactPlayer from 'react-player';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

const onDemandData = [
  {
    id: 1,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard .",
    image: '/images/webinar/1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 2,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.",
    image: '/images/webinar/2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=tgbNymZ7vqY',
  },
  {
    id: 3,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    image: '/images/webinar/3.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
  {
    id: 4,
    date: '26 January 2025',
    title: 'Lorem Ipsum is simply dummy text of the printing demi text',
    excerpt:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    image: '/images/webinar/4.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  },
  {
    id: 5,
    date: '30 January 2025',
    title: 'Advanced Kubernetes Workshop for Beginners',
    excerpt:
      'Learn the foundations of Kubernetes and how to deploy scalable apps in real cloud environments.',
    image: '/images/webinar/2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
  },
  {
    id: 6,
    date: '02 February 2025',
    title: 'Infrastructure as Code with Terraform Deep Dive',
    excerpt:
      'Master Terraform workflows, modules, and state management in real-world scenarios.',
    image: '/images/webinar/1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=9G2o5WzlyS4',
  },
  {
    id: 7,
    date: '05 February 2025',
    title: 'CI/CD Pipelines using GitHub Actions',
    excerpt:
      'Learn to build, test, and deploy applications using GitHub Actions for end-to-end automation.',
    image: '/images/webinar/2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=MLW8Mi8fFI4',
  },
  {
    id: 8,
    date: '08 February 2025',
    title: 'Monitoring with Prometheus & Grafana',
    excerpt:
      'Get hands-on with monitoring infrastructure and apps using open-source observability stacks.',
    image: '/images/webinar/3.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=1Qy7sYwXr6U',
  },
];

const OnDemandSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3); // Change to 3 initially
  const visibleData = onDemandData.slice(0, visibleCount);

  return (
    <section className="w-full bg-white py-[100px] px-4 flex justify-center">
      <div className="max-w-[1140px] w-full flex flex-col items-center gap-[70px]">
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-black text-[32px] leading-[42px] font-normal font-poppins tracking-[-0.02em]">
            Events Held
          </h2>
          <div className="flex items-center justify-between w-full md:w-[351px] h-[42px] px-4 bg-[rgba(0,136,255,0.1)] border border-black rounded-md">
            <div className="flex items-center gap-[6px] w-full">
              <svg className="w-[16px] h-[16px] text-black" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM14 8a6 6 0 11-12 0 6 6 0 0112 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-black placeholder-white/10 text-sm focus:outline-none w-full"
              />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full"> {/* Change to 3 columns */}
          {visibleData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="w-full flex flex-col p-[16px] gap-[28px] border border-black rounded-[16px] h-[447.83px]"
            >
              {/* Image */}
              <div className="relative h-full rounded-[8px]  ">
                <Image
                  src={item.image}
                  alt="On-Demand Thumbnail"
                  fill
                  className="object-cover rounded-[8px] h-[165px] "
                />
              </div>

              {/* Content */}
              <div className="w-full flex flex-col gap-[10px]">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[#0F6CBD] text-[12px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    On-Demand
                  </span>
                  <div className="w-[6px] h-[6px] bg-black rounded-full" />
                  <span className="text-black text-[12px] font-medium leading-[120%] tracking-[-0.03em] uppercase">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-black font-poppins text-[18px] md:text-[18px] leading-[130%] tracking-[-0.02em] font-normal">
                  {item.title}
                </h3>

                <p className="text-black  text-[16px] md:text-[16px] leading-[160%] tracking-[-0.02em] text-justify pb-[28px]">
                  {item.excerpt}
                </p>

                <div className="">
                  <button
                    onClick={() => setActiveVideo(item.videoUrl)}
                    className="group relative w-[117px] h-[38px] px-[10px] py-[16px] text-white text-[16px] font-light 
                      flex items-center justify-between gap-[0px] rounded-lg bg-black overflow-hidden"
                  >
                    <span className="relative z-10 text-[12px] tracking-[-0.02em]">Watch Now</span>
                    <svg
                      className="relative z-10 w-[12px] h-[12px]"
                      fill="none"
                      stroke="white"
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
                    <span className="absolute inset-0 m-[1px] bg-black rounded-lg pointer-events-none" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < onDemandData.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)} // Load 3 more at once
            className="group relative w-[127px] h-[48px] px-6 py-4 text-white text-sm 
              flex items-center justify-center gap-[10px] rounded-lg bg-black overflow-hidden"
          >
            <span className="relative z-10">Load More</span>
            <span
              className="absolute inset-0 rounded-lg p-[1px] transition-transform duration-500 ease-out group-hover:scale-110"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #1C76FD 0%, #4738F4 43%, #5721F0 65%, #5721F0 93%)',
              }}
            />
            <span className="absolute inset-0 m-[1px] bg-black rounded-lg pointer-events-none" />
          </button>
        )}
      </div>

      {/* Modal */}
      {activeVideo &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
            <div className="relative w-full max-w-3xl p-4">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-2 right-2 text-white text-2xl"
              >
                ✕
              </button>
              <div className="aspect-video w-full">
                <ReactPlayer
                  url={activeVideo}
                  controls
                  width="100%"
                  height="100%"
                  className="rounded-md overflow-hidden"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};


export default OnDemandSection;
