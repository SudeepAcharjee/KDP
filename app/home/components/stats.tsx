"use client";

import Image from "next/image";

const services = [
  {
    category: "Event Planning",
    title: "Comprehensive Event Planning",
    description:
      "We handle everything from concept to execution, ensuring a seamless and unforgettable event.",
    image: "/images/event-planning.jpg",
  },
  {
    category: "Artist Management",
    title: "Professional Artist Management",
    description:
      "Maximize exposure and career growth with our tailored artist representation and management services.",
    image: "/images/artist-management.webp",
  },
  {
    category: "PR & Media",
    title: "Strategic Public Relations",
    description:
      "Enhance your brand’s visibility with media outreach, press releases, and PR campaigns that make an impact.",
    image: "/images/pr-media.png",
  },
  {
    category: "Wedding Planning",
    title: "Luxury Wedding Planning",
    description:
      "Create the wedding of your dreams with expert planning, decor, and coordination services.",
    image: "/images/wedding-planning.png",
  },
  {
    category: "Brand Marketing",
    title: "Innovative Brand Marketing",
    description:
      "Boost your brand presence with targeted marketing strategies, social media campaigns, and engagement tactics.",
    image: "/images/brand-marketing.jpg",
  },
  {
    category: "Event Technology",
    title: "Advanced Event Technology",
    description:
      "Leverage the latest event tech for ticketing, audience engagement, and virtual event solutions.",
    image: "/images/event-technology.jpg",
  },
];

const ServicesSection = () => {
  return (
    <div
      className="relative w-full py-32 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/aservice.png')" }} // Update with your background image path
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-0"></div>

      <div className="relative max-w-7xl mx-auto text-center text-black">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-lg">
          Discover how we can help you with event planning, artist management, PR, and brand marketing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-black">
                <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded-full">
                  {service.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-1 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
