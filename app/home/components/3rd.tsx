"use client";

import Image from "next/image";

const steps = [
  {
    id: "01",
    title: "DEFINE YOUR EVENT GOALS",
    description: "Understand your vision and objectives to create an unforgettable event experience tailored to your needs.",
  },
  {
    id: "02",
    title: "PLAN THE STRUCTURE AND ACTIVITIES",
    description: "Outline the event flow, schedule activities, and ensure seamless coordination from start to finish.",
  },
  {
    id: "03",
    title: "SET A TIMELINE FOR EXECUTION",
    description: "Establish a detailed timeline for event planning, ensuring every aspect is executed with precision.",
  },
  {
    id: "04",
    title: "FINALIZE LOGISTICS AND PROMOTION",
    description: "Secure venues, coordinate vendors, and execute a strategic promotional plan for maximum engagement.",
  },
];

const LearningSteps = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center gap-12 text-white py-16 px-6"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Left Section */}
      <div className="flex flex-col items-center md:items-start max-w-lg text-center md:text-left">
        <Image
          src="/images/dj.webp"
          alt="Event Planning Icon"
          width={600}
          height={400}
          className="mb-6"
        />
        <h2 className="text-3xl md:text-5xl font-bold">Follow These Steps to Plan the Perfect Event</h2>
        
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col p-4 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
            <span className="text-gray-300 text-3xl font-bold">{step.id}</span>
            <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
            <p className="text-gray-300 mt-2 text-lg">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningSteps;
