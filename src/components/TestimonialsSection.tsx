"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    name: "Amara Okafor",
    role: "Wedding Planner",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612c1c6?q=80&w=200",
    quote: "FlexiRyde transformed our wedding transportation. The luxury fleet and professional service exceeded all expectations.",
    rating: 5
  },
  {
    name: "David Mensah",
    role: "CEO, Tech Startup",
    location: "Accra, Ghana",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    quote: "As a CEO, I need reliable and prestigious transportation. FlexiRyde delivers exactly that with their premium service.",
    rating: 5
  },
  {
    name: "Sarah Mitchell",
    role: "Tourism Executive",
    location: "Cape Town, South Africa",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    quote: "Our VIP clients love the seamless booking experience and luxury vehicles. FlexiRyde is our go-to partner.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleTestimonialChange = (index: number) => {
    if (index !== currentTestimonial) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[var(--color-gold-primary)] to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-[var(--color-gold-primary)] to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block mb-4">
            <span className="text-sm font-medium text-[var(--color-gold-primary)] tracking-widest uppercase border border-[var(--color-gold-primary)]/30 px-4 py-2 rounded-full backdrop-blur-sm">Testimonials</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif mb-8 text-white leading-tight">
            What Our <span className="gold-text-gradient text-reveal">Distinguished</span> Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience excellence through the words of industry leaders who trust FlexiRyde for their most important journeys
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial Showcase */}
          <div className="relative">
            <div className="luxury-testimonial-card glass-effect rounded-3xl p-16 relative overflow-hidden border border-[var(--color-gold-primary)]/20 backdrop-blur-xl">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-primary)] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-[var(--color-gold-primary)] to-transparent"></div>
              
              {/* Quote Decoration */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote className="w-24 h-24 text-[var(--color-gold-primary)] transform rotate-12" />
              </div>
              <div className="absolute bottom-8 right-8 opacity-20">
                <Quote className="w-24 h-24 text-[var(--color-gold-primary)] transform rotate-180 scale-x-[-1]" />
              </div>

              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
                <div className="text-center relative z-10">
                  {/* Testimonial Text */}
                  <p className="text-2xl lg:text-3xl text-white mb-12 leading-relaxed font-light italic max-w-4xl mx-auto">
                    "{testimonials[currentTestimonial].quote}"
                  </p>

                  {/* Luxury Rating Display */}
                  <div className="flex justify-center space-x-2 mb-10">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-6 h-6 fill-[var(--color-gold-primary)] text-[var(--color-gold-primary)] animate-shimmer" 
                        style={{animationDelay: `${i * 0.1}s`}}
                      />
                    ))}
                  </div>

                  {/* Enhanced Author Section */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-gold-primary)] to-[var(--color-gold-primary)]/50 rounded-full blur-md opacity-50"></div>
                      <ImageWithFallback
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="relative w-20 h-20 rounded-full object-cover border-3 border-[var(--color-gold-primary)] shadow-lg"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-2xl text-white font-serif mb-1">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-[var(--color-gold-primary)] font-medium text-lg">{testimonials[currentTestimonial].role}</p>
                      <p className="text-gray-400 text-sm flex items-center mt-1">
                        <span className="w-2 h-2 bg-[var(--color-gold-primary)] rounded-full mr-2"></span>
                        {testimonials[currentTestimonial].location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Luxury Navigation */}
          <div className="flex justify-center space-x-4 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialChange(index)}
                className={`group relative transition-all duration-500 ${
                  index === currentTestimonial
                    ? "scale-110"
                    : "hover:scale-105"
                }`}
              >
                <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "gold-gradient shadow-lg shadow-[var(--color-gold-primary)]/50"
                    : "bg-gray-600 group-hover:bg-gray-400"
                }`}></div>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/90 text-white text-xs px-3 py-1 rounded-lg border border-[var(--color-gold-primary)]/30 whitespace-nowrap">
                    {testimonial.name}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Luxury Preview Cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`luxury-card glass-effect rounded-2xl p-8 cursor-pointer transition-all duration-500 group relative overflow-hidden ${
                index === currentTestimonial
                  ? "border-2 border-[var(--color-gold-primary)] scale-105 shadow-2xl shadow-[var(--color-gold-primary)]/20"
                  : "border border-white/10 hover:border-[var(--color-gold-primary)]/50 hover:scale-102"
              }`}
              onClick={() => handleTestimonialChange(index)}
            >
              {/* Card Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-[var(--color-gold-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                index === currentTestimonial ? 'opacity-100' : ''
              }`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-[var(--color-gold-primary)]/30 rounded-full blur-sm transition-opacity duration-300 ${
                      index === currentTestimonial ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                    }`}></div>
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-14 h-14 rounded-full object-cover border-2 border-[var(--color-gold-primary)]/50"
                    />
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-lg">{testimonial.name}</h5>
                    <p className="text-[var(--color-gold-primary)] text-sm font-medium">{testimonial.role}</p>
                    <p className="text-gray-400 text-xs">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[var(--color-gold-primary)] text-[var(--color-gold-primary)]" />
                  ))}
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed line-clamp-4 group-hover:text-white transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                
                {/* Active Indicator */}
                {index === currentTestimonial && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-[var(--color-gold-primary)] rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}