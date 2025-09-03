"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "../../hooks/useAnimations";
import { cn } from "../../lib/utils";
import MagneticButton from "./MagneticButton";

type FloatingNavigationProps = {
  logo: React.ReactNode;
  children: React.ReactNode;
  cta?: React.ReactNode;
  className?: string;
};

export default function FloatingNavigation({
  logo,
  children,
  cta,
  className,
}: FloatingNavigationProps) {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    // Show navigation when scrolling up or at the top
    if (scrollPosition < lastScrollPosition || scrollPosition < 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    
    // Update last scroll position
    setLastScrollPosition(scrollPosition);
  }, [scrollPosition, lastScrollPosition]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-7xl",
            className
          )}
        >
          <div className="glass-morphism rounded-2xl py-3 px-4 md:px-6 flex items-center justify-between shadow-gold-md">
            {/* Logo */}
            <div className="flex-shrink-0">
              {logo}
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {children}
            </div>
            
            {/* CTA Button */}
            {cta && (
              <div className="flex-shrink-0">
                {cta}
              </div>
            )}
            
            {/* Mobile Menu Button - Only visible on mobile */}
            <div className="md:hidden">
              <MagneticButton 
                className="p-2 rounded-full bg-gold-500/10 text-gold-500"
                magneticIntensity={0.3}
                resetSpeed={0.4}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" x2="20" y1="12" y2="12"/>
                  <line x1="4" x2="20" y1="6" y2="6"/>
                  <line x1="4" x2="20" y1="18" y2="18"/>
                </svg>
              </MagneticButton>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

// Navigation Link Component
export function FloatingNavLink({
  href,
  children,
  active = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "relative px-3 py-2 text-sm font-medium transition-colors",
        "hover:text-gold-500",
        active ? "text-gold-500" : "text-neutral-100",
        className
      )}
    >
      {children}
      {active && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </a>
  );
}