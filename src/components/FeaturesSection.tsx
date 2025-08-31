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

export default function FeaturesSection() {
  return (
    <section className="py-24 bg-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif mb-6">
            <span className="text-white">Why Choose</span>{" "}
            <span className="gold-text-gradient">FlexiRyde</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the finest in luxury transportation with our premium features designed for discerning clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-8 hover:scale-105 transition-all duration-500 hover:border-[var(--color-gold-primary)]/30"
            >
              <div className="w-16 h-16 gold-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl text-white mb-4 group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}