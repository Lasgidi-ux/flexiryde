"use client";

import React from "react";
import { Crown, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center">
                  <Crown className="w-6 h-6 text-black" />
                </div>
                <span className="text-3xl font-serif gold-text-gradient">FlexiRyde</span>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
                Redefining luxury mobility across Africa with premium ride-hailing and car listing services for discerning clients.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[var(--color-gold-primary)]" />
                  <span className="text-gray-300">info@flexiryde.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[var(--color-gold-primary)]" />
                  <span className="text-gray-300">+234 915 759 9830</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[var(--color-gold-primary)]" />
                  <span className="text-gray-300">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl text-white mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#home" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#book-ride" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    Book a Ride
                  </a>
                </li>
                <li>
                  <a href="#list-car" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    List Your Car
                  </a>
                </li>
                <li>
                  <a href="#app" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    Download App
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl text-white mb-6">Support</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#help" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#safety" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    Safety
                  </a>
                </li>
                <li>
                  <a href="#partner" className="text-gray-300 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                    Partner with Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-white">Follow Us:</span>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/flexiryde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--color-gold-primary)]/20 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 text-[var(--color-gold-primary)]" />
                </a>
                <a
                  href="https://twitter.com/flexiryde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--color-gold-primary)]/20 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-[var(--color-gold-primary)]" />
                </a>
                <a
                  href="https://instagram.com/flexiryde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--color-gold-primary)]/20 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-[var(--color-gold-primary)]" />
                </a>
                <a
                  href="https://linkedin.com/company/flexiryde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-[var(--color-gold-primary)]/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-[var(--color-gold-primary)]" />
                </a>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 mb-2">Stay updated with FlexiRyde</p>
              <p className="text-sm text-gray-400">Join our newsletter for exclusive updates</p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 FlexiRyde Technologies Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-[var(--color-gold-primary)] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}