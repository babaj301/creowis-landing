"use client";
import { useState, useEffect } from "react";
import Ribbon from "./components/Ribbon";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Contact from "./sections/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "features", "contact"];
      let currentSection = "hero";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerHeight * 0.4; // Trigger when section is 40% visible

          // Check if section is in view
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    // Scroll to the target section
    const targetSection = section === "faq" ? "contact" : section;

    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // Ensures proper alignment
      });

      // Update active section immediately for better UX
      setActiveSection(section);
    }
  };

  return (
    <div className="relative">
      <Ribbon isVisible={isVisible} />
      <NavBar
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        isVisible={isVisible}
      />
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Features Section */}
      <Features />
      {/* Contact Section */}
      <Contact />
    </div>
  );
}
