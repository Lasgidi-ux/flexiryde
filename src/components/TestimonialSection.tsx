"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "./ui/button";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "David Mensah",
    role: "CEO, TechVision",
    image: "/testimonials/testimonial-1.jpg",
    rating: 5,
    text: "As a CEO, I need reliable and prestigious transportation. FlexiRyde delivers exactly that with their premium service.",
    location: "Accra, Ghana"
  },
  {
    id: 2,
    name: "Amara Okafor",
    role: "Wedding Planner",
    image: "/testimonials/testimonial-2.jpg",
    rating: 5,
    text: "FlexiRyde transformed our wedding transportation. The luxury fleet and professional service exceeded all expectations.",
    location: "Lagos, Nigeria"
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "Tourism Executive",
    image: "/testimonials/testimonial-3.jpg",
    rating: 5,
    text: "Our VIP clients love the seamless booking experience and luxury vehicles. FlexiRyde is our go-to partner.",
    location: "Cape Town, South Africa"
  },
  {
    id: 4,
    name: "Michael Adebayo",
    role: "Business Executive",
    image: "/testimonials/testimonial-4.jpg",
    rating: 5,
    text: "FlexiRyde's attention to detail and commitment to excellence makes them the premier choice for executive transportation across Africa.",
    location: "Lagos, Nigeria"
  },
  {
    id: 5,
    name: "Fatima Al-Rashid",
    role: "Corporate Director",
    image: "/testimonials/testimonial-5.jpg",
    rating: 5,
    text: "The professionalism and luxury experience provided by FlexiRyde consistently exceeds our expectations for corporate travel.",
    location: "Cairo, Egypt"
  }
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section id="testimonials" className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-[var(--color-flexiryde-dark)] to-[var(--color-flexiryde-dark-light)]">
      {/* Luxury background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-flexiryde-gold)]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-flexiryde-gold)]/30 to-transparent"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-flexiryde-gold)]/20 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
        
        {/* Large decorative quote mark */}
        <div className="absolute top-10 left-10 opacity-5">
          <Quote className="w-40 h-40 text-[var(--color-flexiryde-gold)]" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5 transform rotate-180">
          <Quote className="w-40 h-40 text-[var(--color-flexiryde-gold)]" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-[var(--color-flexiryde-gold-light)] text-sm font-medium tracking-wider uppercase mb-2">Client Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] bg-clip-text text-transparent">
            Voices of Excellence
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-transparent mx-auto mb-6"></div>
          <p className="text-[var(--color-flexiryde-text-light)]/80 max-w-2xl mx-auto">
            Discover why industry leaders across Africa trust FlexiRyde for their most important journeys
          </p>
        </div>
        
        {/* Testimonial carousel */}
        <div className="max-w-6xl mx-auto relative">
          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20 -ml-5">
            <Button 
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-[var(--color-flexiryde-gold)]/30 bg-[var(--color-flexiryde-dark)]/50 backdrop-blur-lg text-[var(--color-flexiryde-gold)] hover:bg-[var(--color-flexiryde-gold)]/10 hover:border-[var(--color-flexiryde-gold)] hover:text-[var(--color-flexiryde-gold-light)] shadow-gold-sm hover:shadow-gold-md transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 right-0 z-20 -mr-5">
            <Button 
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-[var(--color-flexiryde-gold)]/30 bg-[var(--color-flexiryde-dark)]/50 backdrop-blur-lg text-[var(--color-flexiryde-gold)] hover:bg-[var(--color-flexiryde-gold)]/10 hover:border-[var(--color-flexiryde-gold)] hover:text-[var(--color-flexiryde-gold-light)] shadow-gold-sm hover:shadow-gold-md transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          
          {/* Testimonial cards */}
          <div className="relative overflow-hidden rounded-3xl shadow-gold-lg border border-[var(--color-flexiryde-gold)]/20">
            <div 
              className={`flex transition-transform duration-500 ease-out ${isAnimating ? 'opacity-90' : 'opacity-100'}`}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 p-8 md:p-12"
                >
                  <div className="bg-gradient-to-br from-[var(--color-flexiryde-dark)]/80 via-[var(--color-flexiryde-dark)]/90 to-[var(--color-flexiryde-dark)]/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[var(--color-flexiryde-gold)]/10 shadow-gold-sm hover:shadow-gold-md transition-all duration-500 group relative overflow-hidden">
                    {/* Luxury glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-flexiryde-gold)]/5 via-transparent to-[var(--color-flexiryde-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
                      {/* Client image and info */}
                      <div className="flex flex-col items-center text-center md:w-1/3">
                        <div className="relative mb-4 group-hover:scale-105 transition-transform duration-500">
                          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[var(--color-flexiryde-gold)]/30 shadow-gold-sm">
                            <div className="w-full h-full bg-gradient-to-br from-[var(--color-flexiryde-gold)]/20 to-[var(--color-flexiryde-champagne)]/20 flex items-center justify-center text-[var(--color-flexiryde-gold)] text-2xl font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[var(--color-flexiryde-gold)] flex items-center justify-center shadow-gold-sm">
                            <Quote className="w-3 h-3 text-black" />
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-bold text-[var(--color-flexiryde-gold)]">{testimonial.name}</h4>
                        <p className="text-sm text-[var(--color-flexiryde-text-light)]/70">{testimonial.role}</p>
                        <p className="text-xs text-[var(--color-flexiryde-gold-light)]/80 mt-1">{testimonial.location}</p>
                        
                        {/* Rating */}
                        <div className="flex items-center mt-3 space-x-1">
                          {Array.from({ length: 5 }, (_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < testimonial.rating ? 'text-[var(--color-flexiryde-gold)]' : 'text-gray-400'} ${i < testimonial.rating ? 'fill-[var(--color-flexiryde-gold)]' : ''}`} 
                            />
                          ))}
                        </div>
                      </div>
                      
                      {/* Testimonial content */}
                      <div className="md:w-2/3">
                        <div className="relative">
                          <Quote className="w-8 h-8 text-[var(--color-flexiryde-gold)]/30 absolute -top-4 -left-2" />
                          <p className="text-[var(--color-flexiryde-text-light)] leading-relaxed text-lg italic">
                            {testimonial.text}
                          </p>
                          <Quote className="w-8 h-8 text-[var(--color-flexiryde-gold)]/30 absolute -bottom-4 -right-2 transform rotate-180" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setIsAnimating(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-[var(--color-flexiryde-gold)] w-6' : 'bg-[var(--color-flexiryde-gold)]/30 hover:bg-[var(--color-flexiryde-gold)]/50'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-12 text-center">
          <Button 
            className="relative bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] text-black hover:from-[var(--color-flexiryde-gold-light)] hover:via-[var(--color-flexiryde-champagne)] hover:to-[var(--color-flexiryde-gold-light)] transition-all duration-700 px-8 py-6 font-bold rounded-3xl shadow-gold-md hover:shadow-gold-lg group overflow-hidden border-2 border-[var(--color-flexiryde-gold)]/20 hover:border-[var(--color-flexiryde-gold-light)]/40"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out" />
            <span className="relative">Experience Luxury Transport</span>
          </Button>
        </div>
      </div>
    </section>
  );
}