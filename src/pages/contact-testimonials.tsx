"use client";

import React from "react";
import Navigation from "../components/Navigation";
import TestimonialSection from "../components/TestimonialSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function ContactTestimonialsPage() {
  return (
    <div className="min-h-screen bg-[var(--color-flexiryde-dark)] text-[var(--color-flexiryde-text-light)] overflow-x-hidden">
      {/* Header & Navigation */}
      <header role="banner">
        <Navigation />
      </header>

      {/* Main Content */}
      <main id="main-content" role="main" className="pt-20">
        {/* Contact Section */}
        <section id="contact" aria-labelledby="contact-heading">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer role="contentinfo">
        <Footer />
      </footer>

      {/* Scroll to Top Button with Enhanced Accessibility */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-[var(--color-flexiryde-gold-light)] rounded-full flex items-center justify-center shadow-gold-md hover:shadow-gold-lg hover:scale-110 transition-all duration-300 z-40"
        aria-label="Scroll to top of page"
        title="Back to top"
      >
        <svg
          className="w-6 h-6 text-[var(--color-flexiryde-dark)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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