"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React, { } from "react";

const Hero = () => {
  return (
    <>
      <section id="hero" className="h-screen w-full bg-black flex md:hidden">
        <motion.div className="md:hidden flex-col flex px-4 mt-12">
          <div className="gap-2 flex flex-col mb-14 mt-10 px-6">
            <p className="text-5xl font-medium text-white text-left w-fit text-nowrap">
              Note Taking
            </p>
            <p className="text-5xl font-medium text-[#00BB77] text-left ">
              Redefined
            </p>
          </div>
          <Image
            src="/octo-mob.svg"
            alt="hero"
            width={900}
            height={800}
            className=" object-cover h-150 w-150"
          />
        </motion.div>
      </section>

      {/* Desktop */}
      <section
        id="hero"
        className="h-screen w-full bg-black hidden md:flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.9, ease: "easeOut" },
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {" "}
          <Image
            src="/octo-desk.svg"
            alt="hero"
            width={1190}
            height={725}
            className=" object-cover"
          />
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
