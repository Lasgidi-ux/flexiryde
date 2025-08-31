"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

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
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Navigation link component
  const NavLink = ({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) => {
    const isActive = activeSection === href.replace('#', '');
    return (
      <button
        onClick={() => scrollToSection(href.replace('#', ''))}
        className={`relative text-white hover:text-[var(--color-gold-primary)] transition-all duration-300 group ${className} ${
          isActive ? 'text-[var(--color-gold-primary)]' : ''
        }`}
      >
        {children}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[var(--color-gold-primary)] transform origin-left transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`} />
      </button>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect backdrop-blur-xl bg-black/80 shadow-2xl border-b border-[var(--color-gold-primary)]/20' 
        : 'glass-effect'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-14' : 'h-16'
        }`}>
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2 group transition-transform duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden shadow-lg group-hover:shadow-[var(--color-gold-primary)]/50 transition-shadow duration-300">
              <img src="/flexiryde-logo.jpeg" alt="FlexiRyde Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-serif font-bold gold-text-gradient">
              FlexiRyde
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#book-ride">Book a Ride</NavLink>
            <NavLink href="#list-car">List Your Car</NavLink>
            <NavLink href="#app">Download App</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gold-gradient text-black hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-gold-primary)]/30 transition-all duration-300 px-6 py-2 font-semibold">
              Join the Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[var(--color-gold-primary)] transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 glass-effect border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 py-4 space-y-4">
            <NavLink href="#home" className="block py-2">Home</NavLink>
            <NavLink href="#how-it-works" className="block py-2">How It Works</NavLink>
            <NavLink href="#book-ride" className="block py-2">Book a Ride</NavLink>
            <NavLink href="#list-car" className="block py-2">List Your Car</NavLink>
            <NavLink href="#app" className="block py-2">Download App</NavLink>
            <NavLink href="#contact" className="block py-2">Contact</NavLink>
            <Button className="gold-gradient text-black hover:opacity-90 hover:scale-105 transition-all duration-300 w-full mt-4 font-semibold">
              Join the Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}