"use client";

import React, { useState, useRef, useEffect } from "react";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  magneticIntensity?: number;
  resetSpeed?: number;
  onClick?: () => void;
}

export const MagneticButton = ({
  children,
  className = "",
  magneticIntensity = 0.3,
  resetSpeed = 0.2,
  ...props
}: MagneticButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setPosition({ x: x * magneticIntensity, y: y * magneticIntensity });
  };

  const handleMouseLeave = () => {
    // Reset position with animation
    buttonRef.current?.style.setProperty('transition', `transform ${resetSpeed}s ease-out`);
    setPosition({ x: 0, y: 0 });
    
    // Remove transition after animation completes
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.removeProperty('transition');
      }
    }, resetSpeed * 1000);
  };

  return (
    <button
      ref={buttonRef}
      className={`luxury-btn-magnetic ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
};

export default MagneticButton;