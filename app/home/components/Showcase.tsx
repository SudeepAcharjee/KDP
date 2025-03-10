"use client";

import { Calendar, Music, Megaphone, Heart, Briefcase, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

// Fade-Up Animation Variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Floating Tutorial Hint Variant
const floatingHintVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, y: 10, transition: { duration: 0.4, ease: "easeIn" } },
};

const EventPlannerShowcase = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showTutorial, setShowTutorial] = useState(true); // Manage hint visibility

  // Confetti Falling Effect (Top to Bottom)
  const triggerScrollConfetti = () => {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { x: 0.5, y: 0 },
      gravity: 0.5,
    });
  };

  // Confetti Burst on Tap
  const triggerTapConfetti = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;

    confetti({
      particleCount: 50,
      spread: 100,
      origin: { x: clientX / window.innerWidth, y: clientY / window.innerHeight },
    });

    setShowTutorial(false); // Hide tutorial after first tap
  };

  // Trigger Confetti on Scroll
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

  // Auto-hide tutorial after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowTutorial(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="relative flex flex-col items-center text-center px-6 py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      onClick={triggerTapConfetti}
    >
      {/* Tap Anywhere Tutorial Hint */}
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

      <motion.p className="text-gray-500 font-semibold uppercase tracking-wide" variants={fadeUpVariant}>
        Bringing Your Events to Life
      </motion.p>
      <motion.p className="text-4xl font-bold text-gray-900 mt-2" variants={fadeUpVariant}>
        Seamless Event Planning <br /> for Every Occasion
      </motion.p>
      <motion.p className="text-gray-500 mt-4" variants={fadeUpVariant}>
        We create unforgettable experiences with precision and creativity.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-6xl">
        {[
          { icon: <Calendar size={40} className="text-blue-600 mb-4" />, title: "Events", description: "From corporate galas to private parties, we handle it all with flawless execution." },
          { icon: <Music size={40} className="text-green-600 mb-4" />, title: "Artist Management", description: "Connecting you with top talent for performances, concerts, and entertainment shows." },
          { icon: <Megaphone size={40} className="text-yellow-600 mb-4" />, title: "PR & Media", description: "Amplifying your brand with strategic media outreach and public relations." },
          { icon: <Heart size={40} className="text-purple-600 mb-4" />, title: "Wedding Planning", description: "Crafting magical weddings with personalized themes, venues, and entertainment." },
          { icon: <Briefcase size={40} className="text-red-600 mb-4" />, title: "Corporate Events", description: "Organizing impactful conferences, product launches, and networking events." },
          { icon: <Home size={40} className="text-indigo-600 mb-4" />, title: "Venue & Catering", description: "Finding the perfect venue and curating exceptional culinary experiences." },
        ].map((feature, index) => (
          <motion.div
            key={index}
            className="beam-border p-6 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
            variants={fadeUpVariant}
          >
            <div className="flex flex-col items-center">
              {feature.icon}
              <p className="text-lg font-semibold">{feature.title}</p>
              <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EventPlannerShowcase;
