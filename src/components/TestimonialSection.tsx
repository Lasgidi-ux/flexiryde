"use client";

import React, { useState, useEffect } from "react";
import { Star, Quote, Crown, Shield, MapPin, Award, Sparkles } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  location: string;
  rating: number;
  testimonial: string;
  avatar: string;
  badge: string;
  tripCount: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adaora Okonkwo",
    title: "CEO",
    company: "Lagos Business District",
    location: "Lagos, Nigeria",
    rating: 5,
    testimonial: "FlexiRyde has redefined luxury transportation in Africa. The attention to detail, from the pristine vehicles to the professional chauffeurs, exceeds every expectation. This is the gold standard of executive travel.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    badge: "Elite Member",
    tripCount: 248
  },
  {
    id: 2,
    name: "Marcus Thompson",
    title: "Investment Director",
    company: "African Capital Partners",
    location: "Accra, Ghana",
    rating: 5,
    testimonial: "When hosting international clients, FlexiRyde is our exclusive choice. Their fleet represents the pinnacle of automotive excellence, and their service is consistently impeccable. Simply outstanding.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    badge: "VIP Client",
    tripCount: 156
  },
  {
    id: 3,
    name: "Dr. Fatima Al-Rashid",
    title: "Medical Director",
    company: "Premium Healthcare Group",
    location: "Abuja, Nigeria",
    rating: 5,
    testimonial: "FlexiRyde understands that time is precious and comfort is essential. Their punctuality and luxury standards are unmatched. Every journey feels like a first-class experience.",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
    badge: "Premium Plus",
    tripCount: 189
  },
  {
    id: 4,
    name: "James Ochieng",
    title: "Managing Partner",
    company: "East Africa Ventures",
    location: "Nairobi, Kenya",
    rating: 5,
    testimonial: "FlexiRyde has revolutionized executive transportation across Africa. The seamless booking, luxury fleet, and professional service create an unparalleled travel experience that reflects our business values.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    badge: "Platinum Member",
    tripCount: 312
  }
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32 bg-gradient-to-br from-flexiryde-dark via-flexiryde-dark-light to-flexiryde-dark relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-flexiryde-gold/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-flexiryde-champagne/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Crown className="w-8 h-8 text-flexiryde-gold" />
            <span className="text-flexiryde-gold font-medium tracking-wider uppercase text-lg">Client Experiences</span>
            <Crown className="w-8 h-8 text-flexiryde-gold" />
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif mb-8 text-flexiryde-light leading-tight">
            Trusted by Africa's
            <span className="block flexiryde-gold-text-gradient">Elite Leaders</span>
          </h2>
          <p className="text-2xl text-flexiryde-champagne max-w-4xl mx-auto leading-relaxed">
            Discover why industry leaders choose FlexiRyde for their luxury transportation needs
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          {/* Central Testimonial Card */}
          <div className="max-w-5xl mx-auto">
            <div 
              className="relative bg-gradient-to-br from-black/40 via-flexiryde-dark-light/60 to-black/40 backdrop-blur-2xl rounded-3xl p-12 lg:p-16 border border-flexiryde-gold/20 shadow-2xl overflow-hidden group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Decorative Elements */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote className="w-16 h-16 text-flexiryde-gold transform rotate-180" />
              </div>
              <div className="absolute bottom-8 right-8 opacity-20">
                <Quote className="w-16 h-16 text-flexiryde-gold" />
              </div>

              {/* Floating Sparkles */}
              <div className="absolute top-12 right-16 opacity-60">
                <Sparkles className="w-6 h-6 text-flexiryde-gold animate-pulse" />
              </div>
              <div className="absolute bottom-16 left-16 opacity-60">
                <Sparkles className="w-4 h-4 text-flexiryde-champagne animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex justify-center mb-8">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-8 h-8 text-flexiryde-gold fill-flexiryde-gold mx-1 animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-2xl lg:text-3xl text-flexiryde-light font-light leading-relaxed text-center mb-12 italic">
                  "{currentTestimonial.testimonial}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-flexiryde-gold/50 shadow-gold-lg">
                      <img 
                        src={currentTestimonial.avatar} 
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-flexiryde-gold rounded-full p-1">
                      <Shield className="w-4 h-4 text-flexiryde-dark" />
                    </div>
                  </div>

                  {/* Author Details */}
                  <div className="text-center lg:text-left">
                    <h4 className="text-2xl font-bold text-flexiryde-gold mb-1">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-lg text-flexiryde-champagne mb-2">
                      {currentTestimonial.title} • {currentTestimonial.company}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-flexiryde-gold/80">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{currentTestimonial.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{currentTestimonial.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Trip Count */}
                  <div className="flex flex-col items-center bg-flexiryde-gold/10 rounded-2xl px-6 py-4 border border-flexiryde-gold/20">
                    <div className="text-3xl font-bold text-flexiryde-gold">
                      {currentTestimonial.tripCount}+
                    </div>
                    <div className="text-sm text-flexiryde-champagne">
                      Premium Trips
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-flexiryde-gold/5 via-transparent to-flexiryde-champagne/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-flexiryde-gold shadow-gold-md scale-125' 
                    : 'bg-flexiryde-gold/30 hover:bg-flexiryde-gold/60'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-flexiryde-gold mb-2">5.0★</div>
            <div className="text-flexiryde-champagne">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-flexiryde-gold mb-2">10K+</div>
            <div className="text-flexiryde-champagne">Satisfied Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-flexiryde-gold mb-2">50+</div>
            <div className="text-flexiryde-champagne">Cities Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}