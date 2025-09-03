"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import LuxurySidebar from "./LuxurySidebar";
import MagneticButton from "./ui/MagneticButton";

export default function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Handle scroll effects and active section detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Detect active section
      const sections = ['home', 'how-it-works', 'book-ride', 'list-car', 'app', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section === 'home' ? 'hero' : section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const targetId = sectionId === 'home' ? 'hero' : sectionId;
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setActiveSection(sectionId);
  };

  // Enhanced Navigation link with premium interactions
  const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
    const isActive = activeSection === href.replace('#', '');
    return (
      <button
        onClick={() => scrollToSection(href.replace('#', ''))}
        className={`relative text-white/85 hover:text-[var(--color-flexiryde-gold)] transition-all duration-500 group font-medium text-sm tracking-wide p-3 rounded-2xl hover:bg-[var(--color-flexiryde-gold-light)]/10 backdrop-blur-sm border border-transparent hover:border-[var(--color-flexiryde-gold)]/20 ${className} ${
          isActive ? 'text-[var(--color-flexiryde-gold)] bg-[var(--color-flexiryde-gold)]/12 border-[var(--color-flexiryde-gold)]/30 shadow-inner' : ''
        }`}
      >
        <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider">{children}</span>
        
        {/* Premium underline animation */}
        <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] transform origin-center transition-all duration-500 ${
          isActive ? 'w-8 opacity-100' : 'w-0 opacity-0 group-hover:w-6 group-hover:opacity-100'
        }`} />
        
        {/* Luxury hover glow */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--color-flexiryde-gold)]/5 via-[var(--color-flexiryde-gold-light)]/10 to-[var(--color-flexiryde-gold)]/5 opacity-0 group-hover:opacity-100 transition-all duration-500 ${
          isActive ? 'opacity-100' : ''
        }`} />
        
        {/* Active status indicator */}
        {isActive && (
          <div className="absolute -top-1 -right-1 flex items-center justify-center">
            <div className="w-2 h-2 bg-[var(--color-flexiryde-gold)] rounded-full animate-pulse">
              <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)] rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
        )}
        
        {/* Micro interaction on hover */}
        <div className="absolute top-1 left-1 w-1 h-1 bg-[var(--color-flexiryde-gold)]/40 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500" />
      </button>
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        isScrolled 
          ? 'bg-gradient-to-r from-[var(--color-flexiryde-dark)]/95 via-[var(--color-flexiryde-dark)]/98 to-[var(--color-flexiryde-dark)]/95 backdrop-blur-3xl shadow-xl border-b border-[var(--color-flexiryde-gold)]/30' 
          : 'bg-gradient-to-r from-[var(--color-flexiryde-dark)]/60 via-[var(--color-flexiryde-dark)]/70 to-[var(--color-flexiryde-dark)]/60 backdrop-blur-2xl'
      }`}>
        {/* Premium navigation glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-[var(--color-flexiryde-gold)]/5 via-transparent to-[var(--color-flexiryde-gold)]/5 opacity-0 transition-opacity duration-700 ${
          isScrolled ? 'opacity-100' : ''
        }`} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* Enhanced Logo Section */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-4 group transition-all duration-500 hover:scale-105 relative"
            >
              {/* Enhanced Logo - Larger, More Visible */}
              <div className="relative w-16 h-16 group-hover:scale-105 transition-all duration-500">
                {/* Logo image - full size, no container constraints */}
                <img 
                  src="/Mini%20FlexiRyde%20Logo%20Design%20(1).svg" 
                  alt="FlexiRyde Logo" 
                  className="w-full h-full object-contain filter brightness-110 contrast-110 group-hover:brightness-125 group-hover:contrast-125 transition-all duration-500"
                  onError={(e) => {
                    // Create elegant fallback with luxury design
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    
                    const fallback = document.createElement('div');
                    fallback.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-dark)] rounded-xl text-black font-bold text-2xl shadow-inner';
                    fallback.innerHTML = 'F<sub class="text-sm">R</sub>';
                    
                    target.parentNode.appendChild(fallback);
                  }}
                />
                
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

            {/* Enhanced Brand Text with Luxury Typography */}
            <div className="hidden sm:block ml-4">
              <div className="relative group-hover:translate-x-1 transition-transform duration-500">
                <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] bg-clip-text text-transparent group-hover:from-[var(--color-flexiryde-gold-light)] group-hover:via-[var(--color-flexiryde-champagne)] group-hover:to-[var(--color-flexiryde-gold-light)] transition-all duration-500 drop-shadow-sm">
                  FlexiRyde
                </h1>
                <p className="text-xs text-[var(--color-flexiryde-gold-light)]/70 -mt-1 font-medium tracking-[0.15em] uppercase group-hover:text-[var(--color-flexiryde-gold-light)]/90 group-hover:tracking-[0.2em] transition-all duration-500">
                  Luxury Transport
                </p>
                
                {/* Premium accent line */}
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
                
                {/* Floating micro-particle */}
                <div className="absolute -top-1 -right-2 w-1 h-1 bg-[var(--color-flexiryde-gold-light)]/60 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500" />
              </div>
            </div>
            </button>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 bg-[var(--color-flexiryde-dark)]/20 backdrop-blur-xl rounded-2xl px-6 py-3 border border-[var(--color-flexiryde-gold)]/10">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#how-it-works">How It Works</NavLink>
              <NavLink href="#book-ride">Book a Ride</NavLink>
              <NavLink href="#list-car">List Your Car</NavLink>
              <NavLink href="#app">Download App</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Premium CTA Button with Magnetic Effect */}
            <div className="hidden md:block">
              <MagneticButton 
                onClick={() => scrollToSection('contact')}
                className="relative bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] text-black hover:from-[var(--color-flexiryde-gold-light)] hover:via-[var(--color-flexiryde-champagne)] hover:to-[var(--color-flexiryde-gold-light)] transition-all duration-700 px-8 py-4 font-bold rounded-3xl shadow-gold-md hover:shadow-gold-lg group overflow-hidden border-2 border-[var(--color-flexiryde-gold)]/20 hover:border-[var(--color-flexiryde-gold-light)]/40"
                magneticIntensity={0.4}
                resetSpeed={0.3}
              >
                {/* Premium shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out" />
                
                {/* Button content with enhanced spacing */}
                <span className="relative flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
                  <span className="tracking-wide">Experience Luxury</span>
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-black/30 rounded-full group-hover:animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-black/20 rounded-full group-hover:animate-bounce" style={{ animationDelay: '0.1s' }} />
                  </div>
                </span>
                
                {/* Enhanced border glow */}
                <div className="absolute inset-0 rounded-3xl border-2 border-yellow-200/0 group-hover:border-yellow-200/40 transition-all duration-500" />
                
                {/* Inner glow effect */}
                <div className="absolute inset-1 rounded-3xl bg-gradient-to-r from-yellow-200/10 to-yellow-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </MagneticButton>
            </div>

            {/* Premium Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleSidebar}
                className="relative w-12 h-12 rounded-3xl bg-gradient-to-br from-black/50 via-black/70 to-black/50 backdrop-blur-2xl border border-yellow-400/25 flex items-center justify-center text-yellow-200 hover:text-yellow-300 hover:border-yellow-400/60 transition-all duration-500 group overflow-hidden shadow-lg shadow-black/20 hover:shadow-yellow-400/20"
                aria-label="Toggle menu"
              >
                {/* Premium background animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-yellow-300/10 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                {/* Enhanced menu icon */}
                <div className="relative transition-transform duration-300 group-hover:scale-110">
                  {isSidebarOpen ? (
                    <X className="w-6 h-6 transition-all duration-300 group-hover:rotate-90" />
                  ) : (
                    <Menu className="w-6 h-6 transition-all duration-300 group-hover:rotate-12" />
                  )}
                </div>
                
                {/* Luxury floating particles */}
                <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-400/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
                <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-yellow-300/60 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.2s' }} />
                <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-yellow-400/40 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" style={{ animationDelay: '0.4s' }} />
                
                {/* Subtle inner glow */}
                <div className="absolute inset-1 rounded-3xl bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation bottom border animation */}
        <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition-all duration-1000 ${
          isScrolled ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`} />
      </nav>

      {/* Luxury Sidebar */}
      <LuxurySidebar 
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />
    </>
  );
}