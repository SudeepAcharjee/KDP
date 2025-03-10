"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Lamp() {
    return (
        <LampContainer className=" pt-24">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="mt-12 bg-gradient-to-br from-slate-300 to-slate-500 py-20 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
            <br />
           
                YOUR BUISNESS CONSULTANT
               
            </motion.h1>
        </LampContainer>
    );
}

export const LampContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0 pt-24",
                className
            )}
        >
            <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
                <motion.div
                    initial={{ opacity: 0.5, width: "100%" }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    transition={{
                        delay: 0.5,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(from 75deg at center top, #5F4B8B, transparent 80%)`,
                    }}
                    className="absolute inset-auto right-1/2 h-72 overflow-visible w-[30rem] bg-gradient-conic text-white"
                >
                    <div className="absolute w-full left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-full left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.5, width: "100%" }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    style={{
                        backgroundImage: `conic-gradient(from 285deg at center top, transparent, #5F4B8B 80%)`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic text-white"
                >
                    <div className="absolute w-40 h-full right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-full right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>
                <div className="absolute top-1/2 h-48 w-full translate-y-16 scale-x-150 bg-black blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
                <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-[#5F4B8B] opacity-60 blur-3xl"></div>
                <motion.div
                    initial={{ width: "100%" }}
                    whileInView={{ width: "100%" }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-30 h-36 w-64 -translate-y-[4rem] rounded-full bg-[#5F4B8B] blur-2xl"
                ></motion.div>
                <motion.div
                    initial={{ width: "100%" }}
                    whileInView={{ width: "100%" }}
                    transition={{
                        delay: 0.3,
                        duration: 1,
                        ease: "easeInOut",
                    }}
                    className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[6rem] bg-[#6343a9]"
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[10rem] bg-black"></div>
            </div>

            <div className="relative z-50 flex -translate-y-72 flex-col items-center px-5">
                {children}
                <div className="flex items-center justify-center ">
                    
    <Image src="/images/logo.png" alt="Logo" width={400} height={400} className="align-middle" />
</div>

            </div>
        </div>
    );
};