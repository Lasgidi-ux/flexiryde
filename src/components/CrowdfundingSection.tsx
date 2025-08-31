"use client";

import React from "react";
import { Button } from "./ui/button";
import { TrendingUp, Users, Target } from "lucide-react";

export default function CrowdfundingSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-[var(--color-charcoal)] to-black relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 gold-gradient rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif mb-6">
            <span className="text-white">Support Our</span>{" "}
            <span className="gold-text-gradient">Vision</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Be part of the FlexiRyde revolution. Help us transform luxury transportation across Africa and become an early investor in the future of premium mobility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-500">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl text-white mb-4">MVP Stage</h3>
            <p className="text-gray-400">
              Our minimum viable product is ready for market testing with key features implemented
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-500">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl text-white mb-4">Growing Community</h3>
            <p className="text-gray-400">
              Join thousands of early supporters who believe in our vision for luxury transportation
            </p>
          </div>

          <div className="glass-effect rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-500">
            <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl text-white mb-4">Market Opportunity</h3>
            <p className="text-gray-400">
              Tap into Africa's growing luxury transportation market worth billions
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-serif text-white mb-6">
              Ready to <span className="gold-text-gradient">Invest</span> in the Future?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Your investment will help us expand our fleet, enhance our technology, and bring premium transportation services to more cities across Africa.
            </p>
            <Button className="gold-gradient text-black hover:opacity-90 transition-opacity duration-300 px-12 py-4 text-lg">
              Back Us on Kickstarter
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              *Investment opportunities available for qualified investors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}