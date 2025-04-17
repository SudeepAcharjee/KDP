import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/eventhero.jpg')", filter: 'brightness(70%)' }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-purple-800 bg-opacity-40 z-10"></div>

      {/* Content container */}
      <div className="relative z-20 flex items-center justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-white p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            SBS MTV The Kpop Show Ticket Package
          </h1>
          <p className="text-lg mb-8">
            Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/events">
              <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300">
                Get Ticket
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white py-3 px-8 rounded-full font-medium border-2 border-white transition-colors duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile version */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-6 z-20 text-white">
        <h1 className="text-3xl font-bold mb-2">SBS MTV The Kpop Show Ticket Package</h1>
        <p className="text-sm mb-4">
          Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/events" className="flex-1">
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full text-sm font-medium w-full transition-colors duration-300">
              Get Ticket
            </button>
          </Link>
          <Link href="/contact" className="flex-1">
            <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white py-2 px-6 rounded-full text-sm font-medium border border-white w-full transition-colors duration-300">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
