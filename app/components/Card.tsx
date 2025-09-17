import { motion } from "motion/react";
import Image from "next/image";

interface CardProps {
  title: string;
  index: number;
}

// Sample Card Component
export const Card = ({ title, index }: CardProps) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, scale: 1 }}
    whileInView={{
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: index * 0.1, ease: "easeOut" },
    }}
    whileHover="hover"
    viewport={{ once: true }}
    className="bg-[#1C1C1C] rounded-xl p-6 border border-transparent hover:border-[#00BB77] hover:bg-black transition-colors h-full min-h-[300px] w-full flex flex-col justify-end text-left relative"
  >
    {/* Arrow positioned absolutely in top-right corner */}
    <motion.div
      className="absolute top-9 right-9"
      initial={{ opacity: 0, scale: 0, x: -40, y: 30 }}
      variants={{
        hover: {
          opacity: 1,
          scale: 4,
          x: 0,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        },
      }}
    >
      <Image src={"/arrow.svg"} alt="arrow" width={20} height={20} />
    </motion.div>

    <motion.h3
      className="text-3xl font-medium text-white/80 w-fit max-w-[150px]"
      variants={{
        hover: {
          scale: 1.1,
          transition: { duration: 0.2 },
        },
      }}
    >
      {title}
    </motion.h3>
  </motion.div>
);
