"use client";
import Image from "next/image";
import Button from "../components/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

interface NavBarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  isVisible?: boolean;
}

export default function NavBar({
  activeSection,
  onSectionClick,
  isVisible,
}: NavBarProps) {
  const sections = ["About", "Features", "FAQ", "Contact"];
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav
        className={`${
          isVisible ? "md:fixed top-10 bg-black/80" : "fixed top-0 bg-black/80"
        } left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-10 shadow-md backdrop-filter backdrop-blur-lg`}
      >
        {/* Mobile View */}
        <div className="flex items-center justify-between w-full">
          <div
            onClick={() => onSectionClick("hero")}
            className="flex items-center space-x-2 justify-center"
          >
            <Image
              src={"/logomark.svg"}
              alt="Logo"
              height={24}
              width={24}
              className="h-6 w-6"
            />
            <button
              onClick={() => onSectionClick("hero")}
              className="text-xl md:text-2xl font-bold text-white"
            >
              CirriNote
            </button>
          </div>

          {/* Desktop Links */}
          <div className="gap-14 hidden md:flex font-medium text-sm">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => {
                  onSectionClick(item.toLowerCase());

                  setIsOpen(false);
                }}
                className={`px-2 py-2 text-white font-medium hover:text-[#166E4E] ${
                  activeSection === item.toLowerCase()
                    ? "underline text-[#166E4E]"
                    : ""
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="">
              <Button />
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              <MenuIcon className="text-white/50" fontSize="large" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[60] md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <Image
                    src={"/logomark.svg"}
                    alt="Logo"
                    height={24}
                    width={24}
                    className="h-6 w-6"
                  />
                  <p className="text-xl font-bold text-white">CirriNote</p>
                </div>
                <button onClick={() => setIsOpen(false)}>
                  <CloseIcon className="text-white/70" fontSize="large" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex-1 flex flex-col justify-center items-center space-y-8"
              >
                {sections.map((item, index) => (
                  <motion.button
                    key={item}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                    onClick={() => {
                      onSectionClick(item.toLowerCase());
                      setIsOpen(false);
                    }}
                    className={`text-2xl font-medium transition-colors ${
                      (item.toLowerCase() === "faq" &&
                        activeSection === "contact") ||
                      activeSection === item.toLowerCase()
                        ? "text-[#00BB77] underline underline-offset-4"
                        : "text-white hover:text-[#00BB77]"
                    }`}
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="px-4 pb-8"
              >
                <Button />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
