import React from 'react';

export default function HeroSection() {
  return (
    <div 
      className="relative w-full h-screen bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/eventhero.jpg')", filter: 'brightness(70%)' }} // Added filter to make the image dull
    >
      {/* Background overlay to darken the image slightly */}
      <div className="absolute inset-0 bg-purple-800 bg-opacity-40 z-10"></div> {/* Increased overlay opacity for duller effect */}
      
      {/* Content container */}
      <div className="relative z-20 flex items-center justify-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Left side - Image would be here */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          {/* Placeholder for an image */}
        </div>
        
        {/* Right side - Text and buttons */}
        <div className="text-white p-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">SBS MTV The Kpop Show Ticket Package</h1>
          <p className="text-lg mb-8">
            Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300">
              Get Ticket
            </button>
            <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white py-3 px-8 rounded-full font-medium border-2 border-white transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile text overlay (shown only on smaller screens) */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-900 to-transparent p-6 z-20 text-white">
        <h1 className="text-3xl font-bold mb-2">SBS MTV The Kpop Show Ticket Package</h1>
        <p className="text-sm mb-4">
          Look no further! Our SBS The Show tickets are the simplest way for you to experience a live Kpop recording.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full text-sm font-medium flex-1 transition-colors duration-300">
            Get Ticket
          </button>
          <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white py-2 px-6 rounded-full text-sm font-medium border border-white flex-1 transition-colors duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
