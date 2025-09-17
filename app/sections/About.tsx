"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  return (
    <div id="about">
      <div className="bg-[#191919] h-[70vh]  md:sticky md:top-0 z-10 w-full flex flex-col items-center justify-center gap-12">
        {/* First text section - slides in from left */}
        <motion.div
          className="text-center max-w-4xl"
          initial={{ x: -150, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3, // Delay to let card drop first
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="md:text-5xl text-2xl font-medium text-white">
            An extra ordinary note
          </p>
          <p className="md:text-5xl text-2xl font-medium text-white">
            for <span className="text-[#00BB77]">makers, creators..</span>
          </p>
        </motion.div>

        {/* Card image - drops down from top */}
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              type: "spring",
              stiffness: 200,
              damping: 10,
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={"/cards.svg"}
            alt="cards"
            width={160}
            height={160}
            className="md:h-40 md:w-40 h-34 w-34"
          />
        </motion.div>

        {/* Second text section - slides in from left */}
        <motion.div
          className="text-center max-w-4xl"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut",
              delay: 0.3, //
            },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="md:text-xl font-medium text-white">
            Creators around the planet use this
          </p>
          <p className="md:text-xl font-medium text-white">
            app for creating <span className="text-[#00BB77]">magic</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
