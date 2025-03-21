"use client";

import React from "react";
import Image from "next/image";

const events = [
  {
    name: "New Year Party",
    date: "December 31, 2024",
    images: [
      "/images/newyear1.jpeg",
      "/images/newyear2.jpeg",
      "/images/newyear3.jpeg",
      "/images/newyear4.jpeg",
      "/images/newyear5.jpeg",
      "/images/newyear6.jpeg",
    ],
  },
  {
    name: "Bolly Refreshers",
    date: "January 23, 2025",
    images: [
      "/images/holi5.jpg",
      "/images/holi6.jpg",
      "/images/holi1.jpg",
      "/images/holi2.jpg",
      "/images/holi3.jpg",
      "/images/holi4.jpg",
    ],
  },
  {
    name: "Kubernetes Live Workshop",
    date: "May 20, 2024",
    images: [
      "/images/kube1.jpg",
      "/images/kube2.jpg",
      "/images/kube3.jpg",
      "/images/kube4.jpg",
      "/images/kube5.jpg",
    ],
  },
];

const Gallery = () => {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-12">
         KDP Event Gallery
        </h2>

        {events.map((event, idx) => (
          <div key={idx} className="mb-20 relative">
            {/* Event Info */}
            <div className="flex justify-end mb-6">
              <div className="bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow text-right">
                <h3 className="text-xl font-bold text-gray-800">{event.name}</h3>
                <p className="text-sm text-gray-600">{event.date}</p>
              </div>
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
              {event.images.map((src, index) => (
                <div key={index} className="break-inside-avoid overflow-hidden rounded-lg shadow bg-gray-200">
                  <div className="relative w-full h-auto aspect-[3/2]">
                    <Image
                      src={src}
                      alt={`Event ${idx + 1} - Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
