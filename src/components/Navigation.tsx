"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import LuxurySidebar from "./LuxurySidebar";
import MagneticButton from "./ui/MagneticButton";

interface NavigationProps {
  onSidebarOpen?: () => void;
}

export default function Navigation({ onSidebarOpen }: NavigationProps = {}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
    setActiveSection(sectionId);
  };

  // Enhanced Navigation link with premium interactions
  const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
    const isActive = activeSection === href.replace('#', '');
    const sectionId = href.replace('#', '');
    return (
      <button
        onClick={() => scrollToSection(sectionId)}
        className={`nav-link relative text-white/85 hover:text-[var(--color-flexiryde-gold)] transition-all duration-300 group font-medium text-sm tracking-wide rounded-2xl border border-transparent focus-visible-luxury ${className} ${
          isActive ? 'text-[var(--color-flexiryde-gold)] bg-[var(--color-flexiryde-gold)]/12 border-[var(--color-flexiryde-gold)]/30 shadow-inner' : ''
        }`}
        style={{
          position: 'relative',
          padding: '0.75rem 1.25rem',
          borderRadius: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
        aria-label={`Navigate to ${children} section`}
        aria-current={isActive ? 'page' : undefined}
        role="navigation"
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
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          isScrolled 
            ? 'backdrop-blur-3xl shadow-xl border-b border-[var(--color-flexiryde-gold)]/30' 
            : 'backdrop-blur-2xl'
        }`}
        style={{
          background: isScrolled 
            ? `linear-gradient(
                to right,
                rgba(18, 18, 18, 0.92),
                rgba(18, 18, 18, 0.95),
                rgba(18, 18, 18, 0.92)
              ),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fed801' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            : `linear-gradient(
                to right,
                rgba(18, 18, 18, 0.60),
                rgba(18, 18, 18, 0.70),
                rgba(18, 18, 18, 0.60)
              ),
              url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fed801' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      >
        {/* Premium navigation glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-[var(--color-flexiryde-gold)]/5 via-transparent to-[var(--color-flexiryde-gold)]/5 opacity-0 transition-opacity duration-700 ${
          isScrolled ? 'opacity-100' : ''
        }`} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`flex items-center justify-between transition-all duration-500 ${
            isScrolled ? 'h-16' : 'h-20'
          }`}>
            
            {/* Enhanced Logo Section - Responsive */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center group transition-all duration-500 hover:scale-105 relative"
            >
              <div className="flex items-center justify-between relative">
                <div className="flex flex-col space-y-1">
                  <img src="/Mini FlexiRyde Logo Design (1).svg" alt="FlexiRyde Logo" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg filter brightness-110 hover:brightness-125 transition-all duration-300" />
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] bg-clip-text text-transparent">
                    FlexiRyde
                  </h1>
                  <div className="hidden sm:flex items-center space-x-2">
                    <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-transparent"></div>
                    <p className="text-xs text-[var(--color-flexiryde-gold-light)]/80 font-medium tracking-wider uppercase">Luxury Experience</p>
                  </div>
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

        {/* Enhanced scroll progress indicator */}
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800/50 transition-all duration-1000 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}>
          <div 
            className="h-full bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-champagne)] transition-all duration-300"
            style={{ width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` }}
          />
        </div>
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