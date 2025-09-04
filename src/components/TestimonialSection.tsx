"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles, Award, MapPin, Verified, Crown, Zap, Shield } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  rating: number;
  text: string;
  location: string;
  verified: boolean;
  tripCount: number;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Mensah",
    role: "Chief Executive Officer",
    company: "TechVision Global",
    image: "/testimonials/testimonial-1.jpg",
    rating: 5,
    text: "FlexiRyde has revolutionized how our C-suite travels. The attention to detail, from the pristine vehicles to the professional chauffeurs, reflects the premium standard we expect.",
    location: "Accra, Ghana",
    verified: true,
    tripCount: 127,
    highlight: "Exceptional Service"
  },
  {
    id: 2,
    name: "Amara Okafor",
    role: "Luxury Event Curator",
    company: "Elite Weddings Africa",
    image: "/testimonials/testimonial-2.jpg",
    rating: 5,
    text: "For our high-profile weddings, FlexiRyde delivers beyond expectations. Their fleet arrived immaculate, drivers were impeccably dressed, and the coordination was flawless.",
    location: "Lagos, Nigeria",
    verified: true,
    tripCount: 89,
    highlight: "Perfect Coordination"
  },
  {
    id: 3,
    name: "Dr. Sarah Mitchell",
    role: "Tourism Board Director",
    company: "Cape Luxury Tours",
    image: "/testimonials/testimonial-3.jpg",
    rating: 5,
    text: "Our international VIP clients consistently praise FlexiRyde's service. The seamless booking, luxury vehicles, and knowledgeable chauffeurs create unforgettable experiences.",
    location: "Cape Town, South Africa",
    verified: true,
    tripCount: 234,
    highlight: "VIP Standard"
  },
  {
    id: 4,
    name: "Michael Adebayo",
    role: "Managing Partner",
    company: "Adebayo & Associates",
    image: "/testimonials/testimonial-4.jpg",
    rating: 5,
    text: "In the world of executive transportation, FlexiRyde stands alone. Their commitment to excellence, punctuality, and discretion makes them indispensable for our firm.",
    location: "Victoria Island, Lagos",
    verified: true,
    tripCount: 156,
    highlight: "Unmatched Reliability"
  },
  {
    id: 5,
    name: "Fatima Al-Rashid",
    role: "Regional Director",
    company: "MENA Investments",
    image: "/testimonials/testimonial-5.jpg",
    rating: 5,
    text: "FlexiRyde understands luxury travel. From airport transfers to board meetings, every journey is executed with precision and elegance that matches our corporate standards.",
    location: "Cairo, Egypt",
    verified: true,
    tripCount: 312,
    highlight: "Corporate Excellence"
  }
];

export default function EnhancedTestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle card
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Handle navigation
  const navigate = (direction: 'prev' | 'next') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex(prev => {
      if (direction === 'next') {
        return (prev + 1) % testimonials.length;
      }
      return (prev - 1 + testimonials.length) % testimonials.length;
    });
    
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        navigate('next');
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [activeIndex, isPaused]);

  // Get visible testimonials for carousel display
  const getVisibleTestimonials = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return [prev, activeIndex, next];
  };

  const visibleIndices = getVisibleTestimonials();

  return (
    <section id="testimonials" className="relative py-24 pb-32 overflow-hidden bg-gradient-to-b from-[var(--color-flexiryde-dark)] via-[var(--color-flexiryde-dark-light)] to-[var(--color-flexiryde-dark)]">
      {/* 2026 Luxury Background with Advanced Glassmorphism */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dynamic gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[var(--color-flexiryde-gold)]/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[var(--color-flexiryde-champagne)]/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-flexiryde-gold)]/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        
        {/* Premium mesh pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(45deg, var(--color-flexiryde-gold) 1px, transparent 1px),
            linear-gradient(-45deg, var(--color-flexiryde-gold) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Floating luxury particles */}
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-flexiryde-gold)]/30 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      {/* Premium border accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-flexiryde-gold)]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-flexiryde-gold)]/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* 2026 Luxury Header with Enhanced Typography */}
        <div className="text-center mb-20 relative">
          {/* Premium badge */}
          <div className="inline-flex items-center justify-center mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-flexiryde-gold)]/10 via-[var(--color-flexiryde-gold)]/20 to-[var(--color-flexiryde-gold)]/10 backdrop-blur-xl border border-[var(--color-flexiryde-gold)]/30 shadow-gold-sm">
            <Crown className="w-4 h-4 text-[var(--color-flexiryde-gold)] mr-3" />
            <span className="text-[var(--color-flexiryde-gold)] text-sm font-medium tracking-[0.3em] uppercase">
              Elite Client Testimonials
            </span>
            <Crown className="w-4 h-4 text-[var(--color-flexiryde-gold)] ml-3" />
          </div>
          
          {/* Modern luxury typography */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif mb-6 relative leading-[0.9]">
            <span className="block bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-champagne)] bg-clip-text text-transparent font-light">
              Voices of
            </span>
            <span className="block text-[var(--color-flexiryde-text-light)] font-bold mt-2">
              Excellence
            </span>
            
            {/* Luxury accent line */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[var(--color-flexiryde-gold)] to-transparent rounded-full" />
          </h2>
          
          <p className="text-[var(--color-flexiryde-text-gray)] text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover why Africa's most discerning clients choose FlexiRyde for their luxury transportation needs
          </p>
          
          {/* Enhanced stats with glassmorphism */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center group">
              <div className="relative mb-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] bg-clip-text text-transparent">
                  99.8%
                </div>
                <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-sm text-[var(--color-flexiryde-text-gray)] uppercase tracking-wider font-medium">Client Satisfaction</div>
            </div>
            
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--color-flexiryde-gold)]/40 to-transparent" />
            
            <div className="text-center group">
              <div className="relative mb-2">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] bg-clip-text text-transparent">
                  75K+
                </div>
                <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-sm text-[var(--color-flexiryde-text-gray)] uppercase tracking-wider font-medium">Premium Journeys</div>
            </div>
            
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--color-flexiryde-gold)]/40 to-transparent" />
            
            <div className="text-center group">
              <div className="relative mb-2 flex items-center justify-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] bg-clip-text text-transparent">
                  5.0
                </div>
                <Star className="w-6 h-6 text-[var(--color-flexiryde-gold)] fill-[var(--color-flexiryde-gold)] ml-2" />
                <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-sm text-[var(--color-flexiryde-text-gray)] uppercase tracking-wider font-medium">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Modern Carousel Container */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={containerRef}
        >
          {/* 2026 Luxury Navigation with Magnetic Effect */}
          <MagneticButton
            onClick={() => navigate('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-flexiryde-dark)]/80 via-[var(--color-flexiryde-dark)]/90 to-[var(--color-flexiryde-dark)]/80 backdrop-blur-2xl border border-[var(--color-flexiryde-gold)]/20 text-[var(--color-flexiryde-gold)] hover:bg-[var(--color-flexiryde-gold)]/10 hover:border-[var(--color-flexiryde-gold)]/50 transition-all duration-500 hover:scale-110 flex items-center justify-center group shadow-gold-sm hover:shadow-gold-md"
            magneticIntensity={0.4}
            resetSpeed={0.3}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
          </MagneticButton>
          
          <MagneticButton
            onClick={() => navigate('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-flexiryde-dark)]/80 via-[var(--color-flexiryde-dark)]/90 to-[var(--color-flexiryde-dark)]/80 backdrop-blur-2xl border border-[var(--color-flexiryde-gold)]/20 text-[var(--color-flexiryde-gold)] hover:bg-[var(--color-flexiryde-gold)]/10 hover:border-[var(--color-flexiryde-gold)]/50 transition-all duration-500 hover:scale-110 flex items-center justify-center group shadow-gold-sm hover:shadow-gold-md"
            magneticIntensity={0.4}
            resetSpeed={0.3}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </MagneticButton>

          {/* Cards Container */}
          <div className="flex items-center justify-center gap-6 px-20 py-8">
            {testimonials.map((testimonial, index) => {
              const isVisible = visibleIndices.includes(index);
              const isActive = index === activeIndex;
              const position = visibleIndices.indexOf(index);
              
              return (
                <div
                  key={testimonial.id}
                  className={`absolute transition-all duration-700 ease-out ${
                    !isVisible ? 'opacity-0 pointer-events-none scale-50' : ''
                  }`}
                  style={{
                    transform: `
                      translateX(${isVisible ? (position - 1) * 350 : 0}px) 
                      scale(${isActive ? 1 : 0.85})
                      ${isActive ? 'translateZ(50px)' : 'translateZ(0)'}
                    `,
                    zIndex: isActive ? 20 : 10,
                    opacity: isVisible ? (isActive ? 1 : 0.7) : 0,
                  }}
                >
                  <div className={`
                    w-[400px] relative group
                    ${isActive ? 'cursor-default' : 'cursor-pointer'}
                  `}
                  onClick={() => !isActive && setActiveIndex(index)}
                  >
                    {/* 2026 Luxury Card Design with Advanced Glassmorphism */}
                    <div className={`
                      relative bg-gradient-to-br from-[var(--color-flexiryde-dark)]/80 via-[var(--color-flexiryde-dark)]/90 to-[var(--color-flexiryde-dark)]/95
                      backdrop-blur-3xl rounded-3xl p-8 
                      border border-[var(--color-flexiryde-gold)]/10
                      ${isActive ? 'border-[var(--color-flexiryde-gold)]/40 shadow-2xl shadow-[var(--color-flexiryde-gold)]/20' : ''}
                      transition-all duration-700 ease-out
                      hover:border-[var(--color-flexiryde-gold)]/25
                      group-hover:scale-[1.02]
                    `}>
                      {/* Premium Active Glow */}
                      {isActive && (
                        <div className="absolute -inset-px bg-gradient-to-r from-[var(--color-flexiryde-gold)]/30 via-[var(--color-flexiryde-gold-light)]/20 to-[var(--color-flexiryde-gold)]/30 rounded-3xl blur-xl animate-pulse" />
                      )}
                      
                      <div className="relative z-10">
                        {/* Header with Avatar */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center space-x-4">
                            <div className="relative">
                              <div className="w-18 h-18 rounded-3xl overflow-hidden border-2 border-[var(--color-flexiryde-gold)]/30 shadow-gold-sm">
                                <div className="w-full h-full bg-gradient-to-br from-[var(--color-flexiryde-gold)]/40 via-[var(--color-flexiryde-gold-light)]/30 to-[var(--color-flexiryde-champagne)]/20 flex items-center justify-center text-[var(--color-flexiryde-gold)] text-xl font-bold backdrop-blur-sm">
                                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                                </div>
                              </div>
                              {testimonial.verified && (
                                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] rounded-full flex items-center justify-center shadow-gold-sm">
                                  <Shield className="w-4 h-4 text-black" />
                                </div>
                              )}
                            </div>
                            
                            <div>
                              <h4 className="text-[var(--color-flexiryde-text-light)] font-semibold text-lg mb-1">{testimonial.name}</h4>
                              <p className="text-[var(--color-flexiryde-text-gray)] text-sm font-medium">{testimonial.role}</p>
                              <p className="text-[var(--color-flexiryde-gold)]/70 text-xs font-medium">{testimonial.company}</p>
                            </div>
                          </div>
                          
                          <div className="relative">
                            <Quote className="w-10 h-10 text-[var(--color-flexiryde-gold)]/20" />
                            <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)]/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                        </div>

                        {/* Enhanced Testimonial Text */}
                        <blockquote className="mb-8 relative">
                          <p className="text-[var(--color-flexiryde-text-light)]/90 leading-relaxed text-base font-light tracking-wide">
                            "{testimonial.text}"
                          </p>
                          <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-[var(--color-flexiryde-gold)]/50 via-[var(--color-flexiryde-gold)]/20 to-transparent rounded-full" />
                        </blockquote>

                        {/* Footer Info */}
                        <div className="space-y-3">
                          {/* Enhanced Rating Section */}
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex space-x-1">
                              {Array.from({ length: 5 }, (_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 transition-all duration-300 ${
                                    i < testimonial.rating
                                      ? 'text-[var(--color-flexiryde-gold)] fill-[var(--color-flexiryde-gold)] drop-shadow-sm'
                                      : 'text-[var(--color-flexiryde-text-gray)]/30'
                                  }`}
                                />
                              ))}
                            </div>
                            <div className="px-3 py-1 rounded-full bg-[var(--color-flexiryde-gold)]/10 border border-[var(--color-flexiryde-gold)]/20">
                              <span className="text-xs text-[var(--color-flexiryde-gold)] font-medium tracking-wide">
                                {testimonial.highlight}
                              </span>
                            </div>
                          </div>

                          {/* Enhanced Stats */}
                          <div className="flex items-center justify-between pt-4 border-t border-[var(--color-flexiryde-gold)]/10">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-[var(--color-flexiryde-gold)]/60" />
                              <span className="text-[var(--color-flexiryde-text-gray)] text-sm font-medium">{testimonial.location}</span>
                            </div>
                            <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-[var(--color-flexiryde-gold)]/5">
                              <Zap className="w-4 h-4 text-[var(--color-flexiryde-gold)]/70" />
                              <span className="text-[var(--color-flexiryde-gold)]/70 text-sm font-medium">
                                {testimonial.tripCount} journeys
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Progress Indicators */}
          <div className="flex justify-center items-center space-x-4 mt-16">
            {testimonials.map((_, index) => (
              <MagneticButton
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative transition-all duration-700 ${
                  index === activeIndex ? 'w-16 h-3' : 'w-3 h-3'
                } rounded-full overflow-hidden group`}
                magneticIntensity={0.2}
                resetSpeed={0.2}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className={`
                  absolute inset-0 rounded-full transition-all duration-500
                  ${index === activeIndex 
                    ? 'bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] shadow-gold-sm' 
                    : 'bg-[var(--color-flexiryde-text-gray)]/30 hover:bg-[var(--color-flexiryde-gold)]/40'
                  }
                `} />
                {index === activeIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer rounded-full" />
                )}
              </MagneticButton>
            ))}
          </div>
        </div>

        {/* 2026 Luxury Trust Badges */}
        <div className="mt-20 relative">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center group cursor-pointer">
              <div className="relative mb-3">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  Forbes
                </div>
                <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-[var(--color-flexiryde-text-gray)] text-xs uppercase tracking-[0.2em] font-medium">Featured Publication</div>
            </div>
            
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--color-flexiryde-gold)]/30 to-transparent" />
            
            <div className="text-center group cursor-pointer">
              <div className="relative mb-3">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  ISO 9001
                </div>
                <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-[var(--color-flexiryde-text-gray)] text-xs uppercase tracking-[0.2em] font-medium">Quality Certified</div>
            </div>
            
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-[var(--color-flexiryde-gold)]/30 to-transparent" />
            
            <div className="text-center group cursor-pointer">
              <div className="relative mb-3 flex items-center justify-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  A+
                </div>
                <Shield className="w-6 h-6 text-[var(--color-flexiryde-gold)] ml-2 group-hover:rotate-12 transition-transform duration-300" />
                <div className="absolute inset-0 bg-[var(--color-flexiryde-gold)]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-[var(--color-flexiryde-text-gray)] text-xs uppercase tracking-[0.2em] font-medium">Safety Excellence</div>
            </div>
          </div>
          
          {/* Luxury accent line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[var(--color-flexiryde-gold)]/40 to-transparent" />
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
