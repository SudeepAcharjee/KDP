"use client";

import { Calendar, Music, Megaphone, Heart, Briefcase, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

// Fade-Up Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // Stagger each child by 0.2s
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Floating Hint Variant
const floatingHintVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.4, ease: "easeIn" } },
};

const EventPlannerShowcase = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showTutorial, setShowTutorial] = useState(true);

  // Confetti on scroll
  const triggerScrollConfetti = () => {
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { x: 0.5, y: 0 },
      gravity: 0.4,
    });
  };

  // Confetti on tap
  const triggerTapConfetti = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;

    confetti({
      particleCount: 50,
      spread: 100,
      origin: { x: clientX / window.innerWidth, y: clientY / window.innerHeight },
    });

    setShowTutorial(false); // Hide tutorial after first interaction
  };

  // Scroll confetti trigger
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      if (top < window.innerHeight && top > 0) {
        triggerScrollConfetti();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-hide tutorial
  useEffect(() => {
    const timer = setTimeout(() => setShowTutorial(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  // Feature Data
  const features = [
    { icon: <Calendar size={40} className="text-blue-600 mb-4" />, title: "Events", description: "From corporate galas to private parties, we handle it all with flawless execution." },
    { icon: <Music size={40} className="text-green-600 mb-4" />, title: "Artist Management", description: "Connecting you with top talent for performances, concerts, and entertainment shows." },
    { icon: <Megaphone size={40} className="text-yellow-600 mb-4" />, title: "PR & Media", description: "Amplifying your brand with strategic media outreach and public relations." },
    { icon: <Heart size={40} className="text-purple-600 mb-4" />, title: "Wedding Planning", description: "Crafting magical weddings with personalized themes, venues, and entertainment." },
    { icon: <Briefcase size={40} className="text-red-600 mb-4" />, title: "Corporate Events", description: "Organizing impactful conferences, product launches, and networking events." },
    { icon: <Home size={40} className="text-indigo-600 mb-4" />, title: "Venue & Catering", description: "Finding the perfect venue and curating exceptional culinary experiences." },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col items-center text-center px-6 py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      onClick={triggerTapConfetti}
    >
      {/* 🎉 Tap Hint */}
      <AnimatePresence>
        {showTutorial && (
          <motion.div
            className="absolute top-4 right-4 bg-black bg-opacity-80 text-white text-sm px-4 py-2 rounded-full shadow-lg"
            variants={floatingHintVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            🎉 Tap anywhere for a surprise!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Heading */}
      <motion.p className="text-gray-500 font-semibold uppercase tracking-wide" variants={fadeUpVariant}>
        Bringing Your Events to Life
      </motion.p>
      <motion.h2 className="text-4xl font-bold text-gray-900 mt-2 leading-tight" variants={fadeUpVariant}>
        Seamless Event Planning <br /> for Every Occasion
      </motion.h2>
      <motion.p className="text-gray-500 mt-4 max-w-2xl" variants={fadeUpVariant}>
        We create unforgettable experiences with precision and creativity.
      </motion.p>

      {/* Features */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
            variants={fadeUpVariant}
            whileHover={{ scale: 1.03 }}
          >
            <div className="flex flex-col items-center">
              {feature.icon}
              <p className="text-lg font-semibold mt-2">{feature.title}</p>
              <p className="text-gray-500 text-sm mt-2 text-center">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default EventPlannerShowcase;
