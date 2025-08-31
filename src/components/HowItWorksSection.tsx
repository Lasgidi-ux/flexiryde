"use client";

import React from "react";
import { Search, CheckCircle, Star, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Car",
    description: "Browse our premium fleet and select the perfect vehicle for your journey"
  },
  {
    icon: CheckCircle,
    title: "Confirm Your Ride",
    description: "Book instantly or list your own luxury vehicle on our platform"
  },
  {
    icon: Star,
    title: "Enjoy Premium Service",
    description: "Experience five-star service with professional chauffeurs and luxury amenities"
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-white">
            How <span className="gold-text-gradient">FlexiRyde</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Getting started with luxury transportation has never been easier
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 gold-gradient rounded-full flex items-center justify-center text-black z-10">
                  <span className="text-sm">{index + 1}</span>
                </div>

                {/* Card */}
                <div className="glass-effect rounded-2xl p-8 pt-12 hover:scale-105 transition-all duration-500 group">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[var(--color-gold-primary)]/20 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-[var(--color-gold-primary)]" />
                  </div>
                  <h3 className="text-xl text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-0">
                    <ArrowRight className="w-8 h-8 text-[var(--color-gold-primary)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}