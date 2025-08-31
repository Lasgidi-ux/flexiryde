"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Mail, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setName("");
        setPhone("");
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black to-[var(--color-charcoal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 text-black" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-white">
                Join Our <span className="gold-text-gradient">Waitlist</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Be the first to ride in luxury. Get exclusive access to FlexiRyde when we launch in your city.
              </p>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-black/50 border-2 border-[var(--color-gold-primary)]/30 text-white placeholder-gray-400 focus:border-[var(--color-gold-primary)] transition-colors duration-300"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black/50 border-2 border-[var(--color-gold-primary)]/30 text-white placeholder-gray-400 focus:border-[var(--color-gold-primary)] focus:shadow-lg focus:shadow-[var(--color-gold-primary)]/20 transition-all duration-300 hover:border-[var(--color-gold-primary)]/50 luxury-input"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-black/50 border-2 border-[var(--color-gold-primary)]/30 text-white placeholder-gray-400 focus:border-[var(--color-gold-primary)] focus:shadow-lg focus:shadow-[var(--color-gold-primary)]/20 transition-all duration-300 hover:border-[var(--color-gold-primary)]/50 luxury-input"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="px-12 py-4 text-lg w-full md:w-auto"
                  >
                    Join the Waitlist
                  </Button>
                  <p className="text-gray-400 text-sm mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl text-white mb-4">Welcome to FlexiRyde!</h3>
                <p className="text-gray-300">
                  Thank you for joining our waitlist. We'll notify you as soon as FlexiRyde launches in your area.
                </p>
              </div>
            )}

            {/* Additional Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black">🚗</span>
                </div>
                <h4 className="text-white mb-2">Early Access</h4>
                <p className="text-gray-400 text-sm">Get priority access to our premium service</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black">💎</span>
                </div>
                <h4 className="text-white mb-2">Exclusive Offers</h4>
                <p className="text-gray-400 text-sm">Special discounts and promotions for early users</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black">📱</span>
                </div>
                <h4 className="text-white mb-2">App Updates</h4>
                <p className="text-gray-400 text-sm">Be the first to know about new features</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}