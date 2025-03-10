/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { 
    FaWhatsapp, 
    FaFacebook, 
    FaInstagram, 
    FaDiscord, 
    FaLinkedin, 
    FaTelegram 
} from "react-icons/fa";

const Transition: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const newSectionRef = useRef<HTMLDivElement | null>(null);
    const toHide = useRef<HTMLDivElement | null>(null);
    
    const squareRefs = Array.from({ length: 7 }, () => useRef<HTMLDivElement | null>(null));

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (sectionRef.current) {
            const sectionHeight = sectionRef.current.clientHeight;
            const scaleFactor = (sectionHeight / window.innerHeight) * 10;
            const isMobile = window.innerWidth <= 768;
            const endValue = isMobile ? "50% top" : "100% top";

            gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: endValue,
                    scrub: 1,
                    pin: true,
                }
            }).fromTo(
                imageRef.current,
                { scaleY: 0 },
                { scaleY: scaleFactor, ease: "none" }
            );
        }

        if (newSectionRef.current) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: newSectionRef.current,
                    start: "top 80%",
                    end: "bottom top",
                    scrub: true,
                }
            }).fromTo(
                newSectionRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, ease: "power2.out" }
            );
        }

        // Animate squares to move to the center and hide behind the logo
        squareRefs.forEach((squareRef) => {
            if (squareRef.current && toHide.current) {
                const square = squareRef.current;
                const toHideBounds = toHide.current.getBoundingClientRect();
                const squareBounds = square.getBoundingClientRect();

                const centerX = toHideBounds.left + toHideBounds.width / 2;
                const centerY = toHideBounds.top + toHideBounds.height / 2;

                const deltaX = centerX - (squareBounds.left + squareBounds.width / 2);
                const deltaY = centerY - (squareBounds.top + squareBounds.height / 2);

                gsap.fromTo(
                    square,
                    { scale: 1, x: 0, y: 0 },
                    {
                        scale: 0,
                        x: deltaX,
                        y: deltaY,
                        duration: 1,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top 25%",
                            end: "50% center",
                            scrub: 4,
                        },
                        ease: "power2.inOut",
                    }
                );
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [squareRefs]);

    return (
        <><section ref={sectionRef} className="pointer-events-none relative z-10 h-[100vh] bg-black overflow-hidden">
<div className="bg-black py-16">
            <h2 className="text-white text-5xl font-bold mb-8 text-center ">Connect with us</h2>
        </div>

                <div ref={toHide} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center h-full w-full">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={400}
                        height={400}
                        className="inline-block p-4 px-10 rounded-xl relative z-10" />

                    {/* Social Media Icons */}
                    <div ref={squareRefs[0]} className="absolute top-[20%] md:top-1/3 left-[10%] md:left-1/3 opacity-100 text-white">
                        <FaWhatsapp size={64} />
                    </div>
                    <div ref={squareRefs[1]} className="absolute top-[25%] right-[10%] md:right-[35%] opacity-1000 text-white">
                        <FaLinkedin size={64} />
                    </div>
                    <div ref={squareRefs[2]} className="absolute top-[30%] left-[20%] opacity-100 text-white">
                        <FaFacebook size={64} />
                    </div>
                    <div ref={squareRefs[3]} className="absolute top-[35%] right-[20%] opacity-100 text-white">
                        <FaInstagram size={64} />
                    </div>
                    <div ref={squareRefs[4]} className="absolute top-[15%] left-[30%] opacity-100 text-white">
                        <FaTelegram size={64} />
                    </div>
                    <div ref={squareRefs[5]} className="absolute top-[14%] right-[25%] opacity-100 text-white">
                        <FaDiscord size={64} />
                    </div>
                </div>

                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="sticky top-0 flex h-screen w-full items-end">
                        <div className="absolute left-0 h-auto w-full -bottom-[5px] top-auto">
                            <div className="flex origin-bottom flex-row">
                                <Image
                                    ref={imageRef as never}
                                    alt="Image"
                                    src="/images/transition.png"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-[50vh]"
                                    style={{ transformOrigin: "bottom" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    );
};

export default Transition;