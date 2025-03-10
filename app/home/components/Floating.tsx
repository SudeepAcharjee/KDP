"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { containerV, slideDownV } from "@/utils/Animation";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FaBusinessTime, FaRegLightbulb, FaRegHandshake, FaChartLine, FaDollarSign, FaRegBuilding, FaShoppingCart, FaRegCreditCard, FaUserTie, FaPeopleCarry, FaGlobe, FaCog } from "react-icons/fa";

const cardData = [
  { title: "Business Strategy", description: "Develop winning business models and growth plans tailored for success.", icon: <FaBusinessTime size={30} /> },
  { title: "Digital Transformation", description: "Leverage technology to streamline operations and enhance productivity.", icon: <FaRegLightbulb size={30} /> },
  { title: "Tax & Accounting Services", description: "Simplify tax filing and manage business accounts with expert advice.", icon: <FaRegCreditCard size={30} /> },
  { title: "Hiring & HR Management", description: "Build a strong team with expert recruitment and HR solutions.", icon: <FaUserTie size={30} /> },
  { title: "Business Expansion", description: "Plan and execute strategies to scale your business effectively.", icon: <FaRegBuilding size={30} /> },
  { title: "Financial Planning", description: "Develop strong financial strategies for long-term business success.", icon: <FaDollarSign size={30} /> },
  { title: "Marketing & Branding", description: "Create a powerful brand identity and effective marketing strategies.", icon: <FaChartLine size={30} /> },
  { title: "Funding & Investment", description: "Connect with investors and secure the right funding for your venture.", icon: <FaRegHandshake size={30} /> },
  { title: "E-commerce & Online Presence", description: "Establish and grow your digital presence with cutting-edge solutions.", icon: <FaShoppingCart size={30} /> },
  { title: "Operational Consulting", description: "Optimize processes for efficiency and maximize profitability.", icon: <FaCog size={30} /> },
  { title: "Global Expansion", description: "Leverage international strategies to expand your business globally.", icon: <FaGlobe size={30} /> }
];

const cardAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FloatingBoxes = () => {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.1 }, false);
  const [shuffledCards, setShuffledCards] = useState(cardData);

  // Shuffle cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
    }, 3000); // Adjust timing to control shuffle speed

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  // Particle generation logic
  useEffect(() => {
    const particleContainer = document.querySelector(".particle-container");
    const generateParticle = () => {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random falling speed
      particleContainer?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 5000); // Remove particle after animation ends
    };

    const interval = setInterval(generateParticle, 150); // Generate new particle every 150ms
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg.png')", // Replace with actual image path
        filter: "brightness(110%)", // Increased brightness by 10%
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div> {/* Dark overlay for better readability */}

      {/* Particle Container */}
      <div className="absolute inset-0 particle-container"></div>

      {/* Main Content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerV}
        className="relative z-10 flex flex-col items-center justify-center gap-6 px-4 pt-20 text-center "
      >
        <motion.p variants={slideDownV} className="font-bold text-4xl leading-[40px] max-w-[860px]">
          Master Your Business with Expert Consulting.
        </motion.p>
        <motion.p variants={slideDownV} className="text-lg leading-6 max-w-[760px]">
          We offer tailored strategies, expert advice, and actionable insights to grow and scale your business.
        </motion.p>
        <motion.div variants={slideDownV}>
          <Link href="/contact">
            <div className="relative group mt-6 hover:bg-purple-600 bg-white hover:text-white text-black border hover:border-white border-black px-6 py-3 rounded-full transition-all duration-300 cursor-pointer">
              Get Started Today
            </div>
          </Link>
        </motion.div>

        {/* Shuffling Card Section */}
        <motion.div className="mt-16 relative flex overflow-hidden w-full max-w-[90vw]">
          <motion.div className="flex gap-6">
            {/* Display only the first 4 shuffled cards */}
            {shuffledCards.slice(0, 4).map((card, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-20 border border-white rounded-lg w-64 h-56 flex flex-col gap-4 px-5 py-4 text-center shadow-lg backdrop-blur-lg"
                initial="hidden"
                animate="visible"
                variants={cardAnimation}
              >
                {/* Icon and Text */}
                <div className="flex justify-center mb-2">
                  {card.icon}
                </div>
                <p className="font-semibold text-lg leading-5">{card.title}</p>
                <p className="text-sm leading-5">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FloatingBoxes;