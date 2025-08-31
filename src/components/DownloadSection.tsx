"use client";

import React from "react";
import { Smartphone, Apple, PlayCircle } from "lucide-react";
import { Button } from "./ui/button";
// Import images using public path for better compatibility
const driverDashboard = '/src/assets/ee4ea542a72c5e7a3f16b26a997fb91b75b80ee6.png';
const customerApp = '/src/assets/bbae5cdf871a3be0f5c3e6e3c21091b6bb6fa76a.png';

export default function DownloadSection() {
  return (
    <section id="app" className="py-24 bg-black relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-20 left-16 w-80 h-80 bg-gradient-to-br from-[var(--color-gold-primary)] to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-16 w-96 h-96 bg-gradient-to-tl from-[var(--color-gold-primary)] to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[var(--color-gold-primary)]/20 to-transparent rounded-full blur-2xl animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-[var(--color-gold-primary)] tracking-widest uppercase border border-[var(--color-gold-primary)]/30 px-6 py-3 rounded-full backdrop-blur-sm animate-shimmer">Mobile App</span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-serif mb-8 text-white leading-tight">
            Download the <span className="gold-text-gradient text-reveal">FlexiRyde</span> App
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Be among the first to experience luxury transportation redefined. Join our exclusive waitlist for early access to premium mobility.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Luxury Phone Mockups */}
          <div className="relative luxury-phone-showcase">
            <div className="flex items-end space-x-6">
              {/* Driver Dashboard - iPhone Mockup */}
              <div className="luxury-phone-frame group">
                <div className="w-72 h-[580px] bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[3.5rem] p-3 shadow-2xl transform -rotate-12 hover:rotate-0 transition-all duration-700 hover:scale-105 relative">
                  {/* Luxury Border Effect */}
                  <div className="absolute inset-0 rounded-[3.5rem] border-2 border-[var(--color-gold-primary)]/30 group-hover:border-[var(--color-gold-primary)]/60 transition-colors duration-500"></div>
                  
                  <div className="w-full h-full rounded-[3rem] relative overflow-hidden bg-black">
                    <img 
                      src={driverDashboard} 
                      alt="FlexiRyde Driver Dashboard - Premium Interface" 
                      className="w-full h-full object-cover rounded-[3rem]"
                    />
                    {/* Luxury Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold-primary)]/10 via-transparent to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Phone Details */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Customer App - Android Mockup */}
              <div className="luxury-phone-frame group">
                <div className="w-72 h-[580px] bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[3.5rem] p-3 shadow-2xl transform rotate-12 hover:rotate-0 transition-all duration-700 hover:scale-105 relative">
                  {/* Luxury Border Effect */}
                  <div className="absolute inset-0 rounded-[3.5rem] border-2 border-[var(--color-gold-primary)]/30 group-hover:border-[var(--color-gold-primary)]/60 transition-colors duration-500"></div>
                  
                  <div className="w-full h-full rounded-[3rem] relative overflow-hidden bg-black">
                    <img 
                      src={customerApp} 
                      alt="FlexiRyde Customer App - Luxury Booking Experience" 
                      className="w-full h-full object-cover rounded-[3rem]"
                    />
                    {/* Luxury Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tl from-[var(--color-gold-primary)]/10 via-transparent to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Phone Details */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-[var(--color-gold-primary)] rounded-full animate-pulse opacity-60 blur-sm"></div>
            <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-[var(--color-gold-primary)] rounded-full animate-pulse opacity-40 blur-sm" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-[var(--color-gold-primary)] rounded-full animate-pulse opacity-30 blur-sm" style={{animationDelay: '2s'}}></div>
          </div>

          {/* Luxury Download Section */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              {/* Luxury App Store Button */}
              <div className="luxury-store-button group">
                <Button
                  variant="outline"
                  className="w-80 h-20 border-2 border-[var(--color-gold-primary)]/40 text-white hover:border-[var(--color-gold-primary)] transition-all duration-500 cursor-not-allowed bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-gold-primary)]/20 relative overflow-hidden"
                  disabled
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-gold-primary)]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <Apple className="w-10 h-10 mr-4 text-[var(--color-gold-primary)] group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left relative z-10">
                    <div className="text-xs text-gray-400 font-medium tracking-wide">COMING SOON ON</div>
                    <div className="text-xl font-semibold text-white group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">App Store</div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[var(--color-gold-primary)]/30 group-hover:border-[var(--color-gold-primary)] transition-colors duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[var(--color-gold-primary)]/30 group-hover:border-[var(--color-gold-primary)] transition-colors duration-300"></div>
                </Button>
              </div>

              {/* Luxury Google Play Button */}
              <div className="luxury-store-button group">
                <Button
                  variant="outline"
                  className="w-80 h-20 border-2 border-[var(--color-gold-primary)]/40 text-white hover:border-[var(--color-gold-primary)] transition-all duration-500 cursor-not-allowed bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-sm hover:scale-105 hover:shadow-lg hover:shadow-[var(--color-gold-primary)]/20 relative overflow-hidden"
                  disabled
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-gold-primary)]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  <PlayCircle className="w-10 h-10 mr-4 text-[var(--color-gold-primary)] group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-left relative z-10">
                    <div className="text-xs text-gray-400 font-medium tracking-wide">COMING SOON ON</div>
                    <div className="text-xl font-semibold text-white group-hover:text-[var(--color-gold-primary)] transition-colors duration-300">Google Play</div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[var(--color-gold-primary)]/30 group-hover:border-[var(--color-gold-primary)] transition-colors duration-300"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[var(--color-gold-primary)]/30 group-hover:border-[var(--color-gold-primary)] transition-colors duration-300"></div>
                </Button>
              </div>
            </div>

            {/* Enhanced Waitlist Section */}
            <div className="text-center bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-[var(--color-gold-primary)]/20">
              <p className="text-gray-300 mb-6 text-lg">Join our exclusive waitlist for early access</p>
              <Button 
                variant="luxury"
                size="lg"
                className="px-12 py-4 text-lg font-semibold animate-shimmer hover:animate-none"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Join Premium Waitlist
              </Button>
              <p className="text-gray-500 text-sm mt-4">Be among the first 1,000 users to experience luxury redefined</p>
            </div>

            {/* Luxury Features Preview */}
            <div className="luxury-features-card bg-gradient-to-br from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 border border-[var(--color-gold-primary)]/20 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-32 h-32 bg-[var(--color-gold-primary)] rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-[var(--color-gold-primary)] rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-white text-2xl font-serif mb-6 text-center">Premium Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-[var(--color-gold-primary)]/5 hover:bg-[var(--color-gold-primary)]/10 transition-colors duration-300">
                    <div className="w-3 h-3 bg-[var(--color-gold-primary)] rounded-full animate-pulse"></div>
                    <span className="text-gray-300 font-medium">One-tap luxury ride booking</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-[var(--color-gold-primary)]/5 hover:bg-[var(--color-gold-primary)]/10 transition-colors duration-300">
                    <div className="w-3 h-3 bg-[var(--color-gold-primary)] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-gray-300 font-medium">Real-time premium tracking</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-[var(--color-gold-primary)]/5 hover:bg-[var(--color-gold-primary)]/10 transition-colors duration-300">
                    <div className="w-3 h-3 bg-[var(--color-gold-primary)] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-gray-300 font-medium">Secure payment integration</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 rounded-xl bg-[var(--color-gold-primary)]/5 hover:bg-[var(--color-gold-primary)]/10 transition-colors duration-300">
                    <div className="w-3 h-3 bg-[var(--color-gold-primary)] rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <span className="text-gray-300 font-medium">Elite vehicle owner dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}