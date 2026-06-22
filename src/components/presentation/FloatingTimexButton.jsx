"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

const FloatingTimexButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://timexmedia.com"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-28 right-6 z-[9999] 
        flex items-center gap-2 
        rounded-full 
        px-4 py-2.5 
        text-white font-medium text-xs md:text-sm
        transition-all duration-500 
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
        ${isHovered ? "scale-105 shadow-2xl" : "scale-100 shadow-lg"}
        group
        overflow-hidden
        bg-gradient-to-r from-[#1a0033] via-[#2d004d] to-[#4a1a7a]
        hover:from-[#2d004d] hover:to-[#6b2fa0]
        shadow-[0_10px_40px_-10px_rgba(128,0,255,0.5)]
        hover:shadow-[0_15px_50px_-10px_rgba(128,0,255,0.7)]
        border border-white/20
        hover:border-white/40
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Shine effect overlay */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {/* Sparkle icon */}
      <Sparkles 
        size={14} 
        className="relative z-10 text-purple-300 group-hover:rotate-180 transition-transform duration-500" 
      />

      {/* Main text */}
      <span className="relative z-10 tracking-wide">
        Timex Media
      </span>

      {/* Arrow */}
      <ArrowUpRight 
        size={14} 
        className="relative z-10 text-purple-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
      />

      {/* Floating particles on hover */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-400 rounded-full blur-sm" />
        <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-purple-300 rounded-full blur-sm" />
        <div className="absolute top-1/2 -left-2 w-1 h-1 bg-purple-500 rounded-full blur-sm" />
      </div>
    </a>
  );
};

export default FloatingTimexButton;