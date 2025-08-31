"use client";

import React from "react";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import VideoSection from "./components/VideoSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ScreensShowcase from "./components/ScreensShowcase";
import CrowdfundingSection from "./components/CrowdfundingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import DownloadSection from "./components/DownloadSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-flexiryde-dark text-flexiryde-light overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* Features Highlights */}
      <FeaturesSection />

      {/* App Walkthrough Video */}
      <VideoSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Screens Showcase */}
      <ScreensShowcase />

      {/* Crowdfunding CTA */}
      <CrowdfundingSection />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Download App */}
      <DownloadSection />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button with FlexiRyde Branding */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 flexiryde-gold-gradient rounded-full flex items-center justify-center flexiryde-luxury-shadow hover:scale-110 transition-all duration-300 z-40 animate-flexiryde-glow"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 text-flexiryde-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}