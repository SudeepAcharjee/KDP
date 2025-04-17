"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLink } from "react-icons/fa";

const events = [
  {
    name: "New Year Party",
    date: "December 31, 2024",
    viewMoreLink: "https://mega.nz/file/8FgVGDBR#Kl53Uxfo7pi_1GMmoKgg_1UntQTwzE5Aoq_lWdyiPO0",
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
    viewMoreLink: "https://www.dropbox.com/scl/fo/75n0fs9u1tsom9g6oex4d/ALBu_i5opl1FBPgiOI7H5nk?rlkey=evjvbxbsrqacjtvteg7k7zohp&dl=0",
    images: [
      "/images/holi5.jpg",
      "/images/holi6.jpg",
      "/images/holi1.jpg",
      "/images/holi2.jpg",
      "/images/holi3.jpg",
      "/images/holi4.jpg",
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
                <div
                  key={index}
                  className="break-inside-avoid overflow-hidden rounded-lg shadow bg-gray-200"
                >
                  <div className="relative w-full h-auto aspect-[3/2]">
                    <Image
                      src={src}
                      alt={`Event ${idx + 1} - Image ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  {/* Social Icons */}
                  <div className="flex justify-center gap-4 p-2 bg-white">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(src)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(src)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href={`https://www.instagram.com/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-700"
                    >
                      <FaInstagram />
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.origin + src);
                        alert("Image link copied to clipboard!");
                      }}
                      className="text-gray-600 hover:text-black"
                    >
                      <FaLink />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View More Button */}
            <div className="flex justify-center mt-6">
              <a
                href={event.viewMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition duration-300"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
