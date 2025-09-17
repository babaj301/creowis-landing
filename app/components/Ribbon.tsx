"use client";
import { useState, useEffect } from "react";

interface RibbonProps {
  isVisible?: boolean;
}

export default function Ribbon({ isVisible }: RibbonProps) {
  if (!isVisible) return null;

  return (
    <div className="hidden md:block fixed top-0 left-0 right-0 z-[60] bg-[#166E4E] text-white text-center py-3 text-sm font-medium overflow-hidden">
      <div className="animate-marquee gap-12">
        {/* copy 1 */}
        <div className="flex items-center space-x-12">
          <p>Get one year FREE</p>
          <span>✦</span>
          <p>Only for limited users</p>
          <span>✦</span>
          <p>Join the launch event</p>
          <span>✦</span>
        </div>
        {/* copy 2 */}
        <div className="flex items-center space-x-12">
          <p>Get one year FREE</p>
          <span>✦</span>
          <p>Only for limited users</p>
          <span>✦</span>
          <p>Join the launch event</p>
          <span>✦</span>
        </div>
        {/* copy 3 */}
        <div className="flex items-center space-x-12">
          <p>Get one year FREE</p>
          <span>✦</span>
          <p>Only for limited users</p>
          <span>✦</span>
          <p>Join the launch event</p>
          <span>✦</span>
        </div>
      </div>
    </div>
  );
}
