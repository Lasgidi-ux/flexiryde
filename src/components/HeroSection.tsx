"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "./ui/button";
import { 
  Play, 
  ArrowRight, 
  Zap, 
  Star, 
  Crown,
  MapPin,
  Clock,
  Shield
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
  }, []);

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const parallaxStyle = useMemo(() => ({
    transform: `translateX(${mousePosition.x * 0.5}px) translateY(${mousePosition.y * 0.5}px)`,
  }), [mousePosition.x, mousePosition.y]);

  const featurePills = useMemo(() => [
    'Premium Fleet', 'Verified Chauffeurs', 'Instant Booking', '24/7 Support'
  ], []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-flexiryde-dark"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient Mesh Background with FlexiRyde Colors */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--color-flexiryde-gold)] to-transparent rounded-full blur-3xl animate-morphing liquid-morph"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-[var(--color-flexiryde-champagne)]/30 to-transparent rounded-full blur-3xl animate-morphing liquid-morph" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-flexiryde-gold)]/10 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Animated Particles with FlexiRyde Gold */}
        <div className="absolute inset-0">
          {Array.from({ length: 9 }, (_, i) => (
            <div key={i} className="particle animate-particles" style={{ animationDelay: `${i * 0.5}s` }}></div>
          ))}
        </div>

        {/* Car Image with Parallax */}
        <div 
          className="absolute inset-0 flex items-center justify-center parallax-slow"
          style={parallaxStyle}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070"
            alt="Luxury FlexiRyde vehicle showcasing premium transportation services"
            className="w-full h-full object-cover opacity-20 scale-110"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center container-responsive">
        {/* Floating UI Elements */}
        <div className="absolute -top-20 -left-20 opacity-0 animate-slideInUp stagger-reveal" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
          <div className="flexiryde-glass rounded-2xl p-4 floating-card animate-float3D luxury-hover-lift shadow-gold-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-flexiryde-gold)]" aria-hidden="true" />
              <div>
                <div className="text-xs text-[var(--color-flexiryde-champagne)]">Available in</div>
                <div className="text-sm text-[var(--color-flexiryde-gold)] font-semibold">50+ Cities</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-10 -right-32 opacity-0 animate-slideInUp stagger-reveal" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <div className="flexiryde-glass rounded-2xl p-4 floating-card animate-float3D luxury-hover-lift shadow-gold-sm" style={{ animationDelay: '2s' }}>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[var(--color-flexiryde-gold)]" aria-hidden="true" />
              <div>
                <div className="text-xs text-flexiryde-champagne">Average wait</div>
                <div className="text-sm text-flexiryde-gold font-semibold">3 mins</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-20 -left-32 opacity-0 animate-slideInUp stagger-reveal" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <div className="flexiryde-glass rounded-2xl p-4 floating-card animate-float3D luxury-hover-lift" style={{ animationDelay: '4s' }}>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-flexiryde-gold" aria-hidden="true" />
              <div>
                <div className="text-xs text-flexiryde-champagne">Safety Rating</div>
                <div className="flex space-x-1" role="img" aria-label="5 star safety rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="w-3 h-3 fill-flexiryde-gold text-flexiryde-gold" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Content */}
        <div className="max-w-5xl mx-auto">
          {/* Premium Badge */}
          <div className="inline-flex items-center space-x-2 flexiryde-glass rounded-full px-8 py-3 mb-8 opacity-0 animate-scaleIn magnetic-button" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Crown className="w-5 h-5 text-flexiryde-gold" aria-hidden="true" />
            <span className="text-flexiryde-light font-medium">Africa's Premier Luxury Transport</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" aria-label="Live service indicator"></div>
          </div>

          {/* Main Headline with Enhanced Typography Hierarchy */}
          <div className="space-y-4 mb-12 stagger-reveal">
            <h1 id="hero-heading" className="text-display opacity-0 animate-slideInUp" style={{ fontSize: 'var(--text-8xl)', animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <span className="block flexiryde-kinetic-text">Redefining</span>
            </h1>
            <h1 className="text-display opacity-0 animate-slideInUp" style={{ fontSize: 'var(--text-7xl)', animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <span className="block text-flexiryde-light">Luxury</span>
            </h1>
            <div className="flex items-center justify-center space-x-6 opacity-0 animate-slideInUp" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <div className="w-24 h-1 flexiryde-gold-gradient rounded-full" aria-hidden="true"></div>
              <h1 className="text-headline" style={{ fontSize: 'var(--text-6xl)' }}>
                <span className="text-flexiryde-champagne">Mobility</span>
              </h1>
              <div className="w-24 h-1 flexiryde-gold-gradient rounded-full" aria-hidden="true"></div>
            </div>
            <p className="text-luxury opacity-0 animate-slideInUp" style={{ fontSize: 'var(--text-3xl)', animationDelay: '1s', animationFillMode: 'forwards' }}>
              <span className="text-flexiryde-gray">Across Africa</span>
            </p>
          </div>

          {/* Interactive Description */}
          <div className="max-w-3xl mx-auto mb-12 opacity-0 animate-slideInUp" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <p className="text-luxury text-flexiryde-champagne leading-relaxed mb-6" style={{ fontSize: 'var(--text-xl)' }}>
              Experience transportation redefined. Where luxury meets innovation in Africa's most sophisticated ride-hailing platform.
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 stagger-reveal">
              {featurePills.map((feature, index) => (
                <div 
                  key={feature}
                  className="flexiryde-glass rounded-full px-6 py-2 opacity-0 animate-scaleIn hover:scale-105 transition-all duration-300 cursor-pointer border border-flexiryde-gold/20 magnetic-button touch-target"
                  style={{ animationDelay: `${1.4 + index * 0.1}s`, animationFillMode: 'forwards' }}
                  role="button"
                  tabIndex={0}
                >
                  <span className="text-flexiryde-champagne text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 opacity-0 animate-slideInUp" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
            <Button className="neo-brutalism text-flexiryde-dark hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_var(--color-flexiryde-dark)] transition-all duration-300 px-12 py-6 text-lg group magnetic-button touch-target focus-luxury">
              <Zap className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" aria-hidden="true" />
              Book Elite Ride
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
            </Button>
            
            <Button 
              variant="outline" 
              className="border-2 border-flexiryde-champagne text-flexiryde-champagne hover:bg-flexiryde-champagne hover:text-flexiryde-dark transition-all duration-500 px-12 py-6 text-lg flexiryde-glass hover:scale-105 magnetic-button touch-target focus-luxury"
            >
              <Crown className="w-6 h-6 mr-3" aria-hidden="true" />
              List Your Vehicle
            </Button>
          </div>
        </div>

        {/* 3D App Preview Cards */}
        <div className="relative mt-20 opacity-0 animate-scaleIn" style={{ animationDelay: '2s', animationFillMode: 'forwards' }}>
          <div className="flex justify-center items-center space-x-8">
            {/* Main App Card */}
            <div 
              className="card-3d floating-card luxury-hover-lift"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.1}deg) rotateX(${-mousePosition.y * 0.1}deg)`,
              }}
            >
              <div className="w-72 h-[500px] flexiryde-glass rounded-3xl p-6 hover:scale-105 transition-all duration-700 flexiryde-luxury-shadow">
                <div className="w-full h-full bg-gradient-to-br from-flexiryde-dark-light to-flexiryde-dark rounded-2xl p-6 relative overflow-hidden">
                  {/* App Interface */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 rounded-xl mx-auto mb-4 overflow-hidden">
                      <img 
                        src="/src/assets/flexiryde logo.jpeg" 
                        alt="FlexiRyde mobile application logo" 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <h3 className="text-xl font-serif text-flexiryde-light">FlexiRyde</h3>
                    <p className="text-flexiryde-gray text-sm">Luxury at your fingertips</p>
                  </div>

                  {/* Mock Interface Elements */}
                  <div className="space-y-4">
                    {/* Location Selector */}
                    <div className="flexiryde-glass rounded-xl p-4" role="img" aria-label="Route selection interface">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full" aria-label="Pickup location"></div>
                        <div className="h-2 bg-flexiryde-champagne rounded-full flex-1 opacity-60"></div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-flexiryde-gold rounded-full" aria-label="Destination"></div>
                        <div className="h-2 bg-flexiryde-champagne rounded-full flex-1 opacity-60"></div>
                      </div>
                    </div>

                    {/* Vehicle Options */}
                    <div className="space-y-2">
                      <div className="flexiryde-glass rounded-xl p-3 border-2 border-flexiryde-gold/50" role="img" aria-label="Premium vehicle selection">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-6 flexiryde-gold-gradient rounded"></div>
                            <div>
                              <div className="h-2 bg-flexiryde-light rounded w-16 mb-1"></div>
                              <div className="h-1 bg-flexiryde-gray rounded w-12"></div>
                            </div>
                          </div>
                          <div className="text-flexiryde-gold text-xs font-semibold">₦25k</div>
                        </div>
                      </div>
                    </div>

                    {/* Book Button */}
                    <Button className="w-full flexiryde-gold-gradient text-flexiryde-dark py-3 rounded-xl hover:opacity-90 transition-opacity duration-300 magnetic-button">
                      <Play className="w-4 h-4 mr-2" aria-hidden="true" />
                      Book Now
                    </Button>
                  </div>

                  {/* Ambient Light Effect */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-flexiryde-gold rounded-full opacity-20 blur-xl animate-pulse" aria-hidden="true"></div>
                </div>
              </div>
            </div>

            {/* Side Cards */}
            <div 
              className="hidden lg:block card-3d floating-card luxury-hover-lift"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.05}deg) rotateX(${-mousePosition.y * 0.05}deg) translateZ(-50px)`,
                animationDelay: '1s'
              }}
            >
              <div className="w-48 h-64 flexiryde-glass rounded-2xl p-4 animate-float3D">
                <div className="text-center text-flexiryde-light">
                  <div className="w-8 h-8 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="text-sm mb-2 font-semibold">Safety First</h4>
                  <p className="text-xs text-flexiryde-gray">Verified drivers & vehicles</p>
                </div>
              </div>
            </div>

            <div 
              className="hidden lg:block card-3d floating-card luxury-hover-lift"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * -0.05}deg) rotateX(${-mousePosition.y * 0.05}deg) translateZ(-50px)`,
                animationDelay: '2s'
              }}
            >
              <div className="w-48 h-64 flexiryde-glass rounded-2xl p-4 animate-float3D">
                <div className="text-center text-flexiryde-light">
                  <div className="w-8 h-8 flexiryde-gold-gradient rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-flexiryde-dark" aria-hidden="true" />
                  </div>
                  <h4 className="text-sm mb-2 font-semibold">Instant Booking</h4>
                  <p className="text-xs text-flexiryde-gray">Ready in under 3 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-slideInUp" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-flexiryde-gold rounded-full flex justify-center relative overflow-hidden" role="img" aria-label="Scroll indicator">
            <div className="w-1 h-3 bg-flexiryde-gold rounded-full mt-2 animate-bounce"></div>
          </div>
          <span className="text-flexiryde-gray text-xs">Explore luxury</span>
        </div>
      </div>
    </section>
  );
}