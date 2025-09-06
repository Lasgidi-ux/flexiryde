"use client";

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { ScrollToTopButton } from "./components/ScrollToTopButton";
import LuxurySidebar from "./components/LuxurySidebar";

// Lazy load non-critical components
const FeaturesSection = lazy(() => import("./components/FeaturesSection").then(module => ({ default: module.FeaturesSection })));
const VideoSection = lazy(() => import("./components/VideoSection"));
const HowItWorksSection = lazy(() => import("./components/HowItWorksSection").then(module => ({ default: module.HowItWorksSection })));
const ScreensShowcase = lazy(() => import("./components/ScreensShowcase"));
const CrowdfundingSection = lazy(() => import("./components/CrowdfundingSection").then(module => ({ default: module.CrowdfundingSection })));
const EnhancedTestimonialSection = lazy(() => import("./components/TestimonialSection"));
const ContactSection = lazy(() => import("./components/ContactSection").then(module => ({ default: module.ContactSection })));
const DownloadSection = lazy(() => import("./components/DownloadSection").then(module => ({ default: module.DownloadSection })));
const NewsletterSection = lazy(() => import("./components/NewsletterSection"));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="w-8 h-8 border-2 border-flexiryde-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);


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
                  <Suspense fallback={<LoadingSpinner />}>
                    <FeaturesSection />
                  </Suspense>
                </section>

                {/* Video Walkthrough */}
                <section aria-labelledby="video-heading">
                  <Suspense fallback={<LoadingSpinner />}>
                    <VideoSection />
                  </Suspense>
                </section>

                {/* How It Works Process */}
                <section aria-labelledby="process-heading">
                  <Suspense fallback={<LoadingSpinner />}>
                    <HowItWorksSection />
                  </Suspense>
                </section>

                {/* App Screenshots */}
                <section aria-labelledby="screenshots-heading">
                  <Suspense fallback={<LoadingSpinner />}>
                    <ScreensShowcase />
                  </Suspense>
                </section>

                {/* Crowdfunding Call-to-Action */}
                <section aria-labelledby="crowdfunding-heading">
                  <Suspense fallback={<LoadingSpinner />}>
                    <CrowdfundingSection />
                  </Suspense>
                </section>

                {/* Customer Testimonials */}
                <section aria-labelledby="testimonials-heading">
                  <Suspense fallback={<LoadingSpinner />}>
                    <EnhancedTestimonialSection />
                  </Suspense>
                </section>

                {/* Contact Section */}
                <section aria-labelledby="contact-heading">
                  <Suspense fallback={<LoadingSpinner />}>
                    <ContactSection />
                  </Suspense>
                </section>

                {/* App Download */}
                <section aria-labelledby="download-heading">
                  <Suspense fallback={<LoadingSpinner />}>
                    <DownloadSection />
                  </Suspense>
                </section>

                {/* Newsletter Subscription */}
                <section aria-labelledby="newsletter-heading">
                  <Suspense fallback={<LoadingSpinner />}>
                    <NewsletterSection />
                  </Suspense>
                </section>
              </main>

              {/* Footer */}
              <footer role="contentinfo">
                <Suspense fallback={<LoadingSpinner />}>
                  <Footer />
                </Suspense>
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