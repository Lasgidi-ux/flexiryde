"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import MagneticButton from "./ui/MagneticButton";
import { 
  Menu, 
  X, 
  Home, 
  Settings, 
  MapPin, 
  Car, 
  Download, 
  Phone, 
  Crown,
  ChevronRight,
  Zap,
  MessageSquare
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home, description: 'Welcome' },
  { id: 'how-it-works', label: 'How It Works', icon: Settings, description: 'Process' },
  { id: 'book-ride', label: 'Book Ride', icon: MapPin, description: 'Journey' },
  { id: 'list-car', label: 'List Vehicle', icon: Car, description: 'Partner' },
  { id: 'app', label: 'Download', icon: Download, description: 'Mobile' },
  { id: 'contact', label: 'Contact', icon: Phone, description: 'Support' },
  { id: 'testimonials', label: 'Testimonials', icon: MessageSquare, description: 'Reviews' },
];

export default function LuxurySidebar({ isOpen, onToggle, activeSection, onSectionChange }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedItemIndex, setFocusedItemIndex] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onToggle();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setFocusedItemIndex((prev) => (prev + 1) % navigationItems.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedItemIndex((prev) => (prev - 1 + navigationItems.length) % navigationItems.length);
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          scrollToSection(navigationItems[focusedItemIndex].id);
          onToggle();
          break;
      }
    };

    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, focusedItemIndex]);

  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId === 'home' ? 'hero' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    onSectionChange(sectionId);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={onToggle}
      />

      {/* Sidebar - Now positioned on the right */}
      <div 
        className={`fixed top-0 right-0 h-full z-50 transition-all duration-700 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '320px' }}
      >
        {/* Glassmorphism Container */}
        <div className="h-full relative overflow-hidden">
          {/* Enhanced Premium Glass Background with Advanced Glass Morphism */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-flexiryde-dark)]/40 via-[var(--color-flexiryde-dark)]/60 to-[var(--color-flexiryde-dark)]/80 backdrop-blur-[20px] backdrop-saturate-[180%] border-l border-[var(--color-flexiryde-gold)]/20 shadow-gold-sm" style={{
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)'
          }} />
          
          {/* Dynamic gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-flexiryde-gold)]/5 via-transparent to-[var(--color-flexiryde-gold)]/10 opacity-70" />
          
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[var(--color-flexiryde-gold)]/30 rounded-full animate-pulse shadow-gold-sm"
                style={{
                  left: `${15 + i * 12}%`,
                  top: `${8 + i * 10}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: `${3 + i * 0.5}s`
                }}
              />
            ))}
          </div>

          {/* Content - Made Scrollable */}
          <div className="relative h-full flex flex-col">
            {/* Fixed Header */}
            <div className="flex-shrink-0 p-6 pb-4 border-b border-yellow-400/10">
              {/* Header content stays here */}
              <div className="flex items-center justify-between relative">
                <div className="flex flex-col space-y-1">
                  <img src="/Mini FlexiRyde Logo Design (1).svg" alt="FlexiRyde Logo" className="w-12 h-12 rounded-lg filter brightness-110 hover:brightness-125 transition-all duration-300" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] bg-clip-text text-transparent">
                    FlexiRyde
                  </h1>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-transparent"></div>
                    <p className="text-xs text-[var(--color-flexiryde-gold-light)]/80 font-medium tracking-wider uppercase">Luxury Experience</p>
                  </div>
                </div>

                {/* Close Button - Redesigned */}
                <button
                  onClick={onToggle}
                  className="group relative w-12 h-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-red-600/20 border border-red-400/30 flex items-center justify-center text-red-300 hover:text-red-400 hover:border-red-400/60 transition-all duration-300 hover:scale-105 hover:rotate-90 shadow-gold-sm hover:shadow-gold-md"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-2xl bg-red-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6">
              {/* Premium Badge */}
              <div className="mt-6 mb-8">
                <div className="relative bg-gradient-to-br from-[var(--color-flexiryde-gold)]/10 via-[var(--color-flexiryde-gold-light)]/10 to-[var(--color-flexiryde-champagne)]/10 backdrop-blur-sm rounded-3xl p-5 border border-[var(--color-flexiryde-gold)]/20 hover:scale-[1.02] transition-all duration-500 overflow-hidden group shadow-gold-sm hover:shadow-gold-md">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-flexiryde-gold)]/5 via-[var(--color-flexiryde-gold-light)]/5 to-[var(--color-flexiryde-champagne)]/5 animate-pulse"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-2 right-2 w-2 h-2 bg-[var(--color-flexiryde-gold)]/60 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-2 left-4 w-1 h-1 bg-[var(--color-flexiryde-gold-light)]/60 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  
                  <div className="relative flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--color-flexiryde-gold)]/20 to-[var(--color-flexiryde-gold-light)]/20 flex items-center justify-center backdrop-blur-sm border border-[var(--color-flexiryde-gold)]/30 shadow-gold-sm">
                      <Crown className="w-6 h-6 text-[var(--color-flexiryde-gold)] group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-bold text-[var(--color-flexiryde-gold)] mb-1">Premium Access</p>
                      <p className="text-sm text-[var(--color-flexiryde-gold-light)]/80 font-medium">Elite Experience Unlocked</p>
                    </div>
                    <div className="w-3 h-8 bg-gradient-to-b from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] rounded-full opacity-60 shadow-gold-sm"></div>
                  </div>
                </div>
              </div>

            {/* Navigation Items - Enhanced Design */}
            <nav className="space-y-3 mb-8">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onFocus={() => setFocusedItemIndex(index)}
                    className={`w-full group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-[1.03] focus-visible-luxury ${
                      isActive 
                        ? 'bg-gradient-to-r from-yellow-400/20 via-orange-400/15 to-red-400/10 border-yellow-400/50 shadow-lg shadow-yellow-400/20' 
                        : 'hover:bg-gradient-to-r hover:from-blue-500/5 hover:via-purple-500/5 hover:to-cyan-500/5 border-transparent hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-400/10'
                    } ${focusedItemIndex === index ? 'ring-2 ring-[var(--color-flexiryde-gold)] ring-offset-2 ring-offset-black' : ''} border-2 p-5 backdrop-blur-sm`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      transform: `translateX(${isHovered ? '4px' : '0px'})`
                    }}
                    aria-label={`Navigate to ${item.label} section - ${item.description}`}
                    aria-current={isActive ? 'page' : undefined}
                    tabIndex={isOpen ? 0 : -1}
                  >
                    {/* Dynamic Glow Effect */}
                    <div className={`absolute inset-0 transition-all duration-500 ${
                      isActive 
                        ? 'bg-gradient-to-r from-yellow-400/15 via-orange-400/10 to-red-400/5' 
                        : isHovered 
                        ? 'bg-gradient-to-r from-cyan-400/10 via-blue-400/5 to-purple-400/5'
                        : 'bg-transparent'
                    }`} />

                    {/* Floating Particles */}
                    {isHovered && (
                      <>
                        <div className="absolute top-2 right-3 w-1 h-1 bg-cyan-400/80 rounded-full animate-ping"></div>
                        <div className="absolute bottom-3 right-6 w-0.5 h-0.5 bg-purple-400/80 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      </>
                    )}

                    {/* Content */}
                    <div className="relative flex items-center space-x-4">
                      {/* Enhanced Icon Container */}
                      <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 backdrop-blur-sm ${
                        isActive 
                          ? 'bg-gradient-to-br from-yellow-400 to-orange-400 text-black shadow-lg shadow-yellow-400/30' 
                          : 'bg-gradient-to-br from-gray-700/50 to-gray-800/50 text-cyan-300 group-hover:from-cyan-400/20 group-hover:to-blue-500/20 group-hover:text-cyan-200 border border-gray-600/30 group-hover:border-cyan-400/50'
                      }`}>
                        <Icon className={`w-6 h-6 transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`} />
                        
                        {/* Icon glow effect */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-2xl bg-yellow-400/20 animate-pulse"></div>
                        )}
                      </div>

                      {/* Enhanced Text Section */}
                      <div className="flex-1 text-left">
                        <p className={`text-lg font-bold transition-all duration-300 ${
                          isActive ? 'text-yellow-300' : 'text-white group-hover:text-cyan-200'
                        }`}>
                          {item.label}
                        </p>
                        <p className={`text-sm font-medium transition-all duration-300 ${
                          isActive ? 'text-yellow-200/80' : 'text-gray-400 group-hover:text-cyan-300/80'
                        }`}>
                          {item.description}
                        </p>
                      </div>

                      {/* Enhanced Arrow with Animation */}
                      <div className="relative">
                        <ChevronRight className={`w-5 h-5 transition-all duration-500 ${
                          isActive 
                            ? 'text-yellow-300 translate-x-2 scale-110' 
                            : 'text-gray-500 group-hover:text-cyan-300 group-hover:translate-x-2'
                        }`} />
                        {isHovered && (
                          <div className="absolute inset-0 animate-ping">
                            <ChevronRight className="w-5 h-5 text-cyan-400/60" />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Enhanced Active Indicator */}
                    {isActive && (
                      <>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-12 bg-gradient-to-b from-yellow-400 via-orange-400 to-red-400 rounded-l-full shadow-lg shadow-yellow-400/50"></div>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/60 rounded-l-full animate-pulse"></div>
                      </>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Enhanced CTA Section with Magnetic Buttons */}
            <div className="space-y-4 mb-6">
              <MagneticButton 
                className="w-full relative group overflow-hidden bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-black hover:from-red-400 hover:via-orange-400 hover:to-yellow-400 transition-all duration-700 py-6 rounded-3xl font-bold text-lg hover:scale-105 hover:rotate-1 shadow-xl shadow-yellow-400/25"
                magneticIntensity={0.3}
                resetSpeed={0.4}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <Zap className="w-6 h-6 mr-3 group-hover:rotate-180 group-hover:scale-125 transition-transform duration-700" />
                  Book Elite Ride
                </div>
                {/* Animated border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </MagneticButton>

              <MagneticButton 
                className="w-full relative group overflow-hidden border-3 border-cyan-400/50 text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 hover:border-cyan-300 transition-all duration-700 py-6 rounded-3xl font-semibold text-lg hover:scale-105 hover:-rotate-1 backdrop-blur-sm"
                magneticIntensity={0.3}
                resetSpeed={0.4}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center justify-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:animate-ping"></div>
                  Join Waitlist
                </div>
              </MagneticButton>
            </div>

            {/* Enhanced Footer */}
            <div className="pt-6 border-t border-gradient-to-r from-transparent via-yellow-400/20 to-transparent">
              <div className="text-center space-y-2">
                <p className="text-sm text-yellow-200/80 font-medium">
                  &copy; 2025 FlexiRyde
                </p>
                <p className="text-xs text-gray-400">
                  Premium Transport Experience
                </p>
                <div className="flex justify-center space-x-2 mt-3">
                  <div className="w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-cyan-400/60 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-2 h-2 bg-purple-400/60 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </>
  );
}