"use client";

import Link from "next/link";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon

const services = [
  {
    category: "Event Planning",
    title: "Comprehensive Event Planning",
    description:
      "We handle everything from concept to execution, ensuring a seamless and unforgettable event.",
    image: "/images/event-planning.jpg",
    link: "/services/event-planning",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
  {
    category: "Artist Management",
    title: "Professional Artist Management",
    description:
      "Maximize exposure and career growth with our tailored artist representation and management services.",
    image: "/images/artist-management.webp",
    link: "/services/artist-management",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
  {
    category: "Dj Services",
    title: "DJ AVYAKT",
    description:
      "Dj Avyakt is a talented DJ based in the UK, specializing in a dynamic fusion of Bollywood, Bollytech, Afro, and Techno genres.",
    image: "/images/djavyakt.jpeg",
    link: "/services/pr-media",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
  {
    category: "Wedding Planning",
    title: "Luxury Wedding Planning",
    description:
      "Create the wedding of your dreams with expert planning, decor, and coordination services.",
    image: "/images/wedding-planning.png",
    link: "/services/wedding-planning",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
  {
    category: "DJ Services",
    title: "DJ Radha",
    description:
      "DJ Radha is a talented DJ based in the UK, specializing in a dynamic fusion of Bollywood, Bollytech, Afro, and Techno genres.",
    image: "/images/djradha.jpeg",
    link: "/services/dj-radha",
    instagram: "https://instagram.com/djradha_official",
  },
  {
    category: "Event Technology",
    title: "Advanced Event Technology",
    description:
      "Leverage the latest event tech for ticketing, audience engagement, and virtual event solutions.",
    image: "/images/event-technology.jpg",
    link: "/services/event-technology",
    instagram: "https://www.instagram.com/kdp_studios/",
  },
];

const ServicesSection = () => {
  return (
    <div
      className="relative w-full py-32 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/aservice.png')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      <div className="relative max-w-7xl mx-auto text-center text-black">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-lg">
          Discover how we can help you with event planning, artist management, PR, and brand marketing.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Background Image Container */}
              <div
                className="w-full h-72 bg-gray-300 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Service Details */}
              <div className="p-4 text-black">
                <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
                  {service.category}
                </span>

                {/* Clickable Title */}
                <h3 className="mt-2 text-lg font-semibold">
                  <Link href={service.link} className="text-blue-600 hover:underline hover:text-blue-800 transition">
                    {service.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mt-1 text-sm">{service.description}</p>

                {/* Instagram Link */}
                <div className="mt-4 flex justify-end">
                  <a
                    href={service.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 transition"
                  >
                    <FaInstagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
