"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [hoverField, setHoverField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to backend
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        // Reset form after successful submission
        setTimeout(() => {
          setFormState({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setSubmitStatus("idle");
        }, 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 pt-16 bg-gradient-to-b from-[var(--color-flexiryde-dark)] to-[var(--color-flexiryde-dark-light)] relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gold accent lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-flexiryde-gold)]/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-flexiryde-gold)]/30 to-transparent"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[var(--color-flexiryde-gold)]/20 rounded-full animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] bg-clip-text text-transparent">
            Contact Our Concierge
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-transparent mx-auto mb-6"></div>
          <p className="text-[var(--color-flexiryde-text-light)]/80 max-w-2xl mx-auto">
            Experience our premium customer service. Our luxury concierge team is available 24/7 to assist with your transportation needs.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-[var(--color-flexiryde-dark)]/80 via-[var(--color-flexiryde-dark)]/90 to-[var(--color-flexiryde-dark)]/80 backdrop-blur-xl rounded-2xl p-8 border border-[var(--color-flexiryde-gold)]/10 shadow-gold-sm hover:shadow-gold-md transition-all duration-500 h-full">
              <h3 className="text-2xl font-bold text-[var(--color-flexiryde-gold)] mb-6">Luxury Concierge</h3>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-flexiryde-gold)]/10 border border-[var(--color-flexiryde-gold)]/30 flex items-center justify-center group-hover:bg-[var(--color-flexiryde-gold)]/20 group-hover:border-[var(--color-flexiryde-gold)]/50 transition-all duration-300 shadow-gold-sm">
                    <Phone className="w-5 h-5 text-[var(--color-flexiryde-gold)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-flexiryde-gold)] font-medium mb-1">Call Us</h4>
                    <p className="text-[var(--color-flexiryde-text-light)] group-hover:text-[var(--color-flexiryde-gold-light)] transition-colors duration-300">+1 (800) FLEXI-RYDE</p>
                    <p className="text-[var(--color-flexiryde-text-gray)] text-sm">Available 24/7 for VIP clients</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-flexiryde-gold)]/10 border border-[var(--color-flexiryde-gold)]/30 flex items-center justify-center group-hover:bg-[var(--color-flexiryde-gold)]/20 group-hover:border-[var(--color-flexiryde-gold)]/50 transition-all duration-300 shadow-gold-sm">
                    <Mail className="w-5 h-5 text-[var(--color-flexiryde-gold)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-flexiryde-gold)] font-medium mb-1">Email Us</h4>
                    <p className="text-[var(--color-flexiryde-text-light)] group-hover:text-[var(--color-flexiryde-gold-light)] transition-colors duration-300">concierge@flexiryde.com</p>
                    <p className="text-[var(--color-flexiryde-text-gray)] text-sm">We respond within 2 hours</p>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--color-flexiryde-gold)]/10 border border-[var(--color-flexiryde-gold)]/30 flex items-center justify-center group-hover:bg-[var(--color-flexiryde-gold)]/20 group-hover:border-[var(--color-flexiryde-gold)]/50 transition-all duration-300 shadow-gold-sm">
                    <MapPin className="w-5 h-5 text-[var(--color-flexiryde-gold)]" />
                  </div>
                  <div>
                    <h4 className="text-[var(--color-flexiryde-gold)] font-medium mb-1">Visit Us</h4>
                    <p className="text-[var(--color-flexiryde-text-light)] group-hover:text-[var(--color-flexiryde-gold-light)] transition-colors duration-300">123 Luxury Avenue</p>
                    <p className="text-[var(--color-flexiryde-text-gray)] text-sm">Beverly Hills, CA 90210</p>
                  </div>
                </div>
              </div>
              
              {/* VIP Service Badge */}
              <div className="mt-12 p-4 rounded-xl bg-gradient-to-r from-[var(--color-flexiryde-gold)]/10 to-[var(--color-flexiryde-gold)]/5 border border-[var(--color-flexiryde-gold)]/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-flexiryde-gold)]/5 via-transparent to-[var(--color-flexiryde-gold)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-flexiryde-gold)]/20 flex items-center justify-center border border-[var(--color-flexiryde-gold)]/40 shadow-gold-sm">
                    <span className="text-[var(--color-flexiryde-gold)] text-xl font-bold">VIP</span>
                  </div>
                  <div>
                    <h5 className="text-[var(--color-flexiryde-gold)] font-medium">Premium Membership</h5>
                    <p className="text-[var(--color-flexiryde-text-light)]/80 text-sm">Exclusive benefits for our members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-[var(--color-flexiryde-dark)]/80 via-[var(--color-flexiryde-dark)]/90 to-[var(--color-flexiryde-dark)]/80 backdrop-blur-xl rounded-2xl p-8 border border-[var(--color-flexiryde-gold)]/10 shadow-gold-sm hover:shadow-gold-md transition-all duration-500">
              <h3 className="text-2xl font-bold text-[var(--color-flexiryde-gold)] mb-6">Send a Message</h3>
              
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-flexiryde-gold)]/10 flex items-center justify-center mb-4 animate-pulse">
                    <CheckCircle className="w-8 h-8 text-[var(--color-flexiryde-gold)]" />
                  </div>
                  <h4 className="text-xl font-bold text-[var(--color-flexiryde-gold)] mb-2">Message Sent Successfully</h4>
                  <p className="text-[var(--color-flexiryde-text-light)]/80 max-w-md">
                    Thank you for contacting FlexiRyde. Our luxury concierge team will respond to your inquiry shortly.
                  </p>
                </div>
              ) : submitStatus === "error" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4 animate-pulse">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  </div>
                  <h4 className="text-xl font-bold text-red-500 mb-2">Message Failed to Send</h4>
                  <p className="text-[var(--color-flexiryde-text-light)]/80 max-w-md">
                    We apologize for the inconvenience. Please try again or contact us directly.
                  </p>
                  <Button 
                    onClick={() => setSubmitStatus("idle")}
                    variant="outline"
                    className="mt-4 border-[var(--color-flexiryde-gold)]/30 text-[var(--color-flexiryde-gold)] hover:bg-[var(--color-flexiryde-gold)]/10 hover:text-[var(--color-flexiryde-gold-light)]"
                  >
                    Try Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative group">
                      <label 
                        htmlFor="name" 
                        className={`block mb-2 text-sm font-medium transition-colors duration-300 ${hoverField === 'name' ? 'text-[var(--color-flexiryde-gold)]' : 'text-[var(--color-flexiryde-text-light)]'}`}
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          onFocus={() => setHoverField('name')}
                          onBlur={() => setHoverField(null)}
                          className="bg-[var(--color-flexiryde-dark)]/50 border-[var(--color-flexiryde-gold)]/30 focus:border-[var(--color-flexiryde-gold)] text-[var(--color-flexiryde-text-light)] placeholder:text-[var(--color-flexiryde-text-gray)] rounded-xl shadow-sm focus:shadow-gold-sm transition-all duration-300"
                          placeholder="John Doe"
                          required
                        />
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-flexiryde-gold)] transform origin-left transition-all duration-300 ${hoverField === 'name' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>
                    
                    {/* Email Field */}
                    <div className="relative group">
                      <label 
                        htmlFor="email" 
                        className={`block mb-2 text-sm font-medium transition-colors duration-300 ${hoverField === 'email' ? 'text-[var(--color-flexiryde-gold)]' : 'text-[var(--color-flexiryde-text-light)]'}`}
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          onFocus={() => setHoverField('email')}
                          onBlur={() => setHoverField(null)}
                          className="bg-[var(--color-flexiryde-dark)]/50 border-[var(--color-flexiryde-gold)]/30 focus:border-[var(--color-flexiryde-gold)] text-[var(--color-flexiryde-text-light)] placeholder:text-[var(--color-flexiryde-text-gray)] rounded-xl shadow-sm focus:shadow-gold-sm transition-all duration-300"
                          placeholder="john@example.com"
                          required
                        />
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-flexiryde-gold)] transform origin-left transition-all duration-300 ${hoverField === 'email' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>
                    
                    {/* Phone Field */}
                    <div className="relative group">
                      <label 
                        htmlFor="phone" 
                        className={`block mb-2 text-sm font-medium transition-colors duration-300 ${hoverField === 'phone' ? 'text-[var(--color-flexiryde-gold)]' : 'text-[var(--color-flexiryde-text-light)]'}`}
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          onFocus={() => setHoverField('phone')}
                          onBlur={() => setHoverField(null)}
                          className="bg-[var(--color-flexiryde-dark)]/50 border-[var(--color-flexiryde-gold)]/30 focus:border-[var(--color-flexiryde-gold)] text-[var(--color-flexiryde-text-light)] placeholder:text-[var(--color-flexiryde-text-gray)] rounded-xl shadow-sm focus:shadow-gold-sm transition-all duration-300"
                          placeholder="+1 (123) 456-7890"
                        />
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-flexiryde-gold)] transform origin-left transition-all duration-300 ${hoverField === 'phone' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>
                    
                    {/* Service Type Field */}
                    <div className="relative group">
                      <label 
                        htmlFor="service" 
                        className={`block mb-2 text-sm font-medium transition-colors duration-300 ${hoverField === 'service' ? 'text-[var(--color-flexiryde-gold)]' : 'text-[var(--color-flexiryde-text-light)]'}`}
                      >
                        Service Type
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          onFocus={() => setHoverField('service')}
                          onBlur={() => setHoverField(null)}
                          className="w-full bg-[var(--color-flexiryde-dark)]/50 border border-[var(--color-flexiryde-gold)]/30 focus:border-[var(--color-flexiryde-gold)] text-[var(--color-flexiryde-text-light)] placeholder:text-[var(--color-flexiryde-text-gray)] rounded-xl shadow-sm focus:shadow-gold-sm transition-all duration-300 py-2 px-3"
                          defaultValue=""
                        >
                          <option value="" className="bg-[var(--color-flexiryde-dark)]" disabled>Select a service</option>
                          <option value="luxury_ride" className="bg-[var(--color-flexiryde-dark)]">Luxury Ride</option>
                          <option value="airport_transfer" className="bg-[var(--color-flexiryde-dark)]">Airport Transfer</option>
                          <option value="event_transportation" className="bg-[var(--color-flexiryde-dark)]">Event Transportation</option>
                          <option value="corporate_service" className="bg-[var(--color-flexiryde-dark)]">Corporate Service</option>
                          <option value="other" className="bg-[var(--color-flexiryde-dark)]">Other</option>
                        </select>
                        <div className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-flexiryde-gold)] transform origin-left transition-all duration-300 ${hoverField === 'service' ? 'w-full' : 'w-0'}`}></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div className="relative group">
                    <label 
                      htmlFor="message" 
                      className={`block mb-2 text-sm font-medium transition-colors duration-300 ${hoverField === 'message' ? 'text-[var(--color-flexiryde-gold)]' : 'text-[var(--color-flexiryde-text-light)]'}`}
                    >
                      Your Message
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setHoverField('message')}
                        onBlur={() => setHoverField(null)}
                        className="bg-[var(--color-flexiryde-dark)]/50 border-[var(--color-flexiryde-gold)]/30 focus:border-[var(--color-flexiryde-gold)] text-[var(--color-flexiryde-text-light)] placeholder:text-[var(--color-flexiryde-text-gray)] rounded-xl shadow-sm focus:shadow-gold-sm transition-all duration-300 min-h-[150px]"
                        placeholder="Tell us about your transportation needs..."
                        required
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-[var(--color-flexiryde-gold)] transform origin-left transition-all duration-300 ${hoverField === 'message' ? 'w-full' : 'w-0'}`}></div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <div className="pt-4">
                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="relative w-full bg-gradient-to-r from-[var(--color-flexiryde-gold)] via-[var(--color-flexiryde-gold-light)] to-[var(--color-flexiryde-gold)] text-black hover:from-[var(--color-flexiryde-gold-light)] hover:via-[var(--color-flexiryde-champagne)] hover:to-[var(--color-flexiryde-gold-light)] transition-all duration-700 py-6 font-bold rounded-xl shadow-gold-md hover:shadow-gold-lg group overflow-hidden border-2 border-[var(--color-flexiryde-gold)]/20 hover:border-[var(--color-flexiryde-gold-light)]/40"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out" />
                      <span className="relative flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                    </Button>
                  </div>
                  
                  {/* Privacy Notice */}
                  <p className="text-[var(--color-flexiryde-text-gray)] text-xs text-center mt-4">
                    By submitting this form, you agree to our <span className="text-[var(--color-flexiryde-gold)] cursor-pointer hover:underline">Privacy Policy</span> and consent to be contacted regarding your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}