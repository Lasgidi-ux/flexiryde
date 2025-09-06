"use client";

import React from "react";
import { Shield, Car, Smartphone, MapPin } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified Chauffeurs",
    description: "Professional drivers vetted for safety and excellence"
  },
  {
    icon: Car,
    title: "Luxury Car Selection",
    description: "Premium fleet of high-end vehicles for every occasion"
  },
  {
    icon: Smartphone,
    title: "Instant Booking",
    description: "Book your ride in seconds with our intuitive app"
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your ride and driver location in real-time"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-32 bg-flexiryde-dark-light">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-serif mb-8">
            <span className="text-flexiryde-light">Why Choose</span>{" "}
            <span className="flexiryde-gold-text-gradient">FlexiRyde</span>
          </h2>
          <p className="text-2xl text-flexiryde-champagne max-w-4xl mx-auto leading-relaxed">
            Experience the finest in luxury transportation with our premium features designed for discerning clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-black/40 via-flexiryde-dark-light/60 to-black/40 backdrop-blur-2xl rounded-3xl p-10 hover:scale-105 transition-all duration-700 hover:border-flexiryde-gold/50 luxury-hover-lift border border-flexiryde-gold/20 shadow-2xl overflow-hidden"
            >
              {/* Background shimmer */}
              <div className="absolute inset-0 bg-gradient-to-br from-flexiryde-gold/5 via-transparent to-flexiryde-champagne/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-flexiryde-gold/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-flexiryde-champagne/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-flexiryde-gold via-flexiryde-gold-light to-flexiryde-champagne rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-gold-lg">
                  <feature.icon className="w-10 h-10 text-flexiryde-dark" />
                </div>
                <h3 className="text-2xl font-bold text-flexiryde-light mb-6 group-hover:text-flexiryde-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-flexiryde-champagne leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}