"use client";
import { motion } from "motion/react";
import React, { useState } from "react";
import { Card } from "../components/Card";
// Spanning Text Component for Row 3
const SpanningText = () => (
  <motion.div
    className="h-full flex flex-col justify-center space-y-6"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    }}
    viewport={{ once: true }}
  >
    <motion.h3
      className="text-2xl md:text-5xl font-medium text-white/50 leading-tight"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      Creative people worldwide rely on this app to craft ideas into{" "}
      <span className="text-[#00BB77]">digital magic.</span>
    </motion.h3>
  </motion.div>
);

export default function Features() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample card data
  const cards = [
    {
      title: "Creative Tools",
    },
    {
      title: "Smart Workflows",
    },
    {
      title: "Global Community",
    },
    {
      title: "Advanced Analytics",
    },
    {
      title: "Cloud Sync",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div
      id="features"
      className="bg-[#111111] min-h-screen py-30 px-6 relative z-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header and Subtitle */}
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          }}
          viewport={{ once: true }}
        >
          <div className="text-sm bg-[#00BB77]  rounded-full text-center px-3 py-1 font-medium text-black mb-6 w-fit">
            Whats the best
          </div>
          <h2 className="text-5xl md:text-6xl font-medium text-white mb-2">
            Key Features
          </h2>
          <p className="text-xl font-medium text-white/50 max-w-md text-left">
            We're proud to announce with the features that empower creatives
            every day.
          </p>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 grid-rows-4 min-h-[600px]">
          {/* Row 1: Card - Empty - Card */}
          <div className="flex items-center justify-center">
            <Card title={cards[0].title} index={0} />
          </div>
          <div className="flex items-center justify-center">
            {/* Empty cell */}
            <div className="w-full h-32 opacity-0"></div>
          </div>
          <div className="flex items-center justify-center">
            <Card title={cards[1].title} index={1} />
          </div>

          {/* Row 2: Empty - Card - Empty */}
          <div className="flex items-center justify-center">
            <div className="w-full h-32 opacity-0"></div>
          </div>
          <div className="flex items-center justify-center">
            <Card title={cards[2].title} index={2} />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-32 opacity-0"></div>
          </div>

          {/* Row 3: Spanning Text (2 columns) - Card */}
          <div className="col-span-2 flex items-center justify-start">
            <SpanningText />
          </div>
          <div className="flex items-center justify-center">
            <Card title={cards[3].title} index={3} />
          </div>

          {/* Row 4: Card - Card - Empty */}
          <div className="flex items-center justify-center">
            <Card title={cards[4].title} index={4} />
          </div>
          <div className="flex items-center justify-center">
            <Card title={cards[0].title} index={5} />
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full h-32 opacity-0"></div>
          </div>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 pb-4" style={{ width: "max-content" }}>
              {cards.map((card, index) => (
                <div key={index} className="w-80 flex-shrink-0">
                  <Card title={card.title} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Spanning Text for Mobile */}
          <div className="mt-12">
            <SpanningText />
          </div>
        </div>
      </div>
    </div>
  );
}
