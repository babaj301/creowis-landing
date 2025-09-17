"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Button() {
  return (
    <motion.button
      initial="initial"
      whileHover="hover"
      className="relative flex items-center gap-3 bg-white rounded-full pl-3 pr-6 py-3 border border-transparent overflow-hidden cursor-pointer"
    >
      {/* Expanding black background */}
      <motion.div
        variants={{
          initial: {
            width: "43px", // Start with just the cart circle size
          },
          hover: {
            width: "100%", // Expand to full button width
          },
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="absolute left-0 top-0 h-full bg-black rounded-full"
      />

      {/* Cart icon - always stays in the same position */}
      <div className="relative z-8 w-5 h-5 flex items-center justify-center ">
        <Image
          src="/cart.svg"
          alt="cart"
          width={20}
          height={20}
          className="w-5 h-5 text-[#00BB77]" // Keep cart white always
        />
      </div>

      {/* Text that changes color */}
      <motion.span
        variants={{
          initial: {
            color: "#000000",
          },
          hover: {
            color: "#ffffff",
          },
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
        className="text-sm md:text-base font-medium relative z-10"
      >
        Try Now
      </motion.span>
    </motion.button>
  );
}
