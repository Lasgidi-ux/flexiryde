"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "../hooks/useAnimations";
import { ChevronUp } from "lucide-react";

export function ScrollToTopButton() {
  const { scrollY } = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when user scrolls down 300px
    setIsVisible(scrollY > 300);
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2 transition-all duration-300 z-50"
          aria-label="Scroll to top of page"
          title="Back to top"
        >
          <ChevronUp className="w-6 h-6 text-neutral-950" />
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 rounded-full bg-gold-400/30 blur-md -z-10 animate-pulse-slow" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}