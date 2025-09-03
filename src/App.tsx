"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import VideoSection from "./components/VideoSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import ScreensShowcase from "./components/ScreensShowcase";
import { CrowdfundingSection } from "./components/CrowdfundingSection";
import TestimonialSection from "./components/TestimonialSection";
import { ContactSection } from "./components/ContactSection";
import { DownloadSection } from "./components/DownloadSection";
import NewsletterSection from "./components/NewsletterSection";
import { Footer } from "./components/Footer";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import LuxurySidebar from "./components/LuxurySidebar";
import { Button } from "./components/ui/button";


export default function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  return (
    <Router>
      <div className="relative min-h-screen bg-flexiryde-dark text-flexiryde-light overflow-x-hidden">
        {/* Luxury Sidebar - Enhanced with Glass Morphism */}
        <LuxurySidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} activeSection="home" onSectionChange={(section) => console.log(section)} />
        
        {/* Skip Navigation */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-flexiryde-gold focus:text-flexiryde-dark focus:rounded focus-luxury"
          aria-label="Skip to main content"
        >
          Skip to main content
        </a>

        {/* Header & Navigation */}
        <header role="banner">
          <Navigation onSidebarOpen={() => setSidebarOpen(true)} />
        </header>

        <Routes>
          <Route path="*" element={
            <>
              {/* Main Content */}
              <main id="main-content" role="main">
                {/* Hero Section */}
                <section aria-labelledby="hero-heading">
                  <HeroSection />
                </section>

                {/* Features Section */}
                <section aria-labelledby="features-heading">
                  <FeaturesSection />
                </section>

                {/* Video Walkthrough */}
                <section aria-labelledby="video-heading">
                  <VideoSection />
                </section>

                {/* How It Works Process */}
                <section aria-labelledby="process-heading">
                  <HowItWorksSection />
                </section>

                {/* App Screenshots */}
                <section aria-labelledby="screenshots-heading">
                  <ScreensShowcase />
                </section>

                {/* Crowdfunding Call-to-Action */}
                <section aria-labelledby="crowdfunding-heading">
                  <CrowdfundingSection />
                </section>

                {/* Customer Testimonials */}
                <section aria-labelledby="testimonials-heading">
                  <TestimonialSection />
                </section>

                {/* Contact Section */}
                <section aria-labelledby="contact-heading">
                  <ContactSection />
                </section>

                {/* App Download */}
                <section aria-labelledby="download-heading">
                  <DownloadSection />
                </section>

                {/* Newsletter Subscription */}
                <section aria-labelledby="newsletter-heading">
                  <NewsletterSection />
                </section>
              </main>

              {/* Footer */}
              <footer role="contentinfo">
                <Footer />
              </footer>
            </>
          } /></Routes>

        {/* Scroll to Top Button with Enhanced Accessibility */}
        <ScrollToTopButton />
        
        {/* Structured Data for Breadcrumbs */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://flexiryde.com"
                },
                {
                  "@type": "ListItem", 
                  "position": 2,
                  "name": "Features",
                  "item": "https://flexiryde.com#features"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "How It Works",
                  "item": "https://flexiryde.com#how-it-works"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Download",
                  "item": "https://flexiryde.com#download"
                }
              ]
            })
          }}
        />
      </div>
    </Router>
  );
}