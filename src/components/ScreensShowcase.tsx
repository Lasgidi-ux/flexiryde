"use client";

import React, { useState, useEffect, useRef } from "react";
import { Smartphone, ArrowLeft, ArrowRight } from "lucide-react";
import screen1 from "../assets/Booking screen1.PNG";
import screen2 from "../assets/Booking screen 2.PNG";
import screen3 from "../assets/Booking screen 3.PNG";
import screen4 from "../assets/Booking screen 4.PNG";
import screen5 from "../assets/Booking screen 5.PNG";

const screens = [
  {
    title: "Welcome Screen",
    description: "Experience luxury at your fingertips",
    image: screen1
  },
  {
    title: "Booking Interface",
    description: "Effortless ride booking with premium selection",
    image: screen2
  },
  {
    title: "Vehicle Selection",
    description: "Choose from our exclusive luxury fleet",
    image: screen3
  },
  {
    title: "Ride Confirmation",
    description: "Confirm your premium journey details",
    image: screen4
  },
  {
    title: "Journey Tracking",
    description: "Real-time luxury ride monitoring",
    image: screen5
  }
];

export default function ScreensShowcase() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const containerRef = useRef(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextScreen = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length);
      setIsTransitioning(false);
    }, 150);
  };

  const prevScreen = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToScreen = (index: number) => {
    if (isTransitioning || index === currentScreen) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentScreen(index);
      setIsTransitioning(false);
    }, 150);
  };

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextScreen();
    } else if (isRightSwipe) {
      prevScreen();
    }
  };

  // Auto-play functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextScreen();
      }
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [isTransitioning]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-br from-[var(--color-gold-primary)] to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tl from-[var(--color-gold-primary)] to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 relative z-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-[var(--color-gold-primary)] tracking-widest uppercase border border-[var(--color-gold-primary)]/30 px-6 py-3 rounded-full backdrop-blur-sm">App Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-6 md:mb-8 text-white leading-tight">
            Luxury <span className="gold-text-gradient text-reveal">Mobile</span> Experience
          </h2>
          <p className="text-lg sm:text-xl md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Immerse yourself in the sophisticated design and premium features of our award-winning mobile application
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Main Showcase */}
          <div className="flex items-center justify-center gap-4 lg:gap-8">
            {/* Navigation Button - Left */}
            <button
              onClick={prevScreen}
              disabled={isTransitioning}
              className="hidden md:flex w-10 h-10 lg:w-12 lg:h-12 rounded-full glass-effect items-center justify-center hover:bg-[var(--color-gold-primary)]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-30"
            >
              <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--color-gold-primary)]" />
            </button>

            {/* Responsive Phone Showcase Container */}
            <div 
              className="relative w-full max-w-5xl overflow-hidden"
              ref={containerRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {/* Mobile: Single Screen View */}
              <div className="block md:hidden">
                <div className="flex justify-center">
                  <div
                    className={`transition-all duration-700 ease-in-out transform ${
                      isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
                    }`}
                  >
                    <div className="luxury-phone-container relative">
                      <div className="w-64 h-[520px] xs:w-72 xs:h-[580px] sm:w-80 sm:h-[640px] bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[3rem] sm:rounded-[3.5rem] p-2 sm:p-3 shadow-2xl relative">
                        <div className="absolute inset-0 rounded-[3rem] sm:rounded-[3.5rem] border-2 border-[var(--color-gold-primary)]/50 animate-pulse"></div>
                        
                        <div className="w-full h-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden relative bg-black">
                          <img
                            src={screens[currentScreen].image}
                            alt={screens[currentScreen].title}
                            className="w-full h-full object-cover rounded-[2.5rem] sm:rounded-[3rem]"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                              if (nextElement) {
                                nextElement.style.display = 'flex';
                              }
                            }}
                          />
                          
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-[2.5rem] sm:rounded-[3rem] p-6 flex flex-col justify-center items-center" style={{display: 'none'}}>
                            <Smartphone className="w-12 h-12 text-[var(--color-gold-primary)] mb-3" />
                            <h4 className="text-white text-base font-medium mb-2 text-center">{screens[currentScreen].title}</h4>
                            <p className="text-gray-400 text-sm text-center">{screens[currentScreen].description}</p>
                          </div>
                          
                          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold-primary)]/10 via-transparent to-transparent rounded-[2.5rem] sm:rounded-[3rem] pointer-events-none animate-pulse"></div>
                        </div>
                        
                        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-700 rounded-full"></div>
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-800 rounded-full"></div>
                      </div>
                      
                      <div className="absolute -top-3 -left-3 w-6 h-6 bg-[var(--color-gold-primary)] rounded-full animate-pulse opacity-60"></div>
                      <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-[var(--color-gold-primary)] rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tablet: Three-Screen Carousel | Desktop: Full Five-Screen Showcase */}
              <div className="hidden md:flex items-center justify-center gap-2 md:gap-3 lg:gap-6">
                {screens.map((screen, index) => {
                  const isActive = index === currentScreen;
                  const isPrev = index === (currentScreen - 1 + screens.length) % screens.length;
                  const isNext = index === (currentScreen + 1) % screens.length;
                  // Tablet: Show 3 screens (prev, current, next) | Desktop: Show all 5
                  const isVisible = window.innerWidth >= 1024 ? true : (isActive || isPrev || isNext);
                  
                  return (
                    <div
                      key={index}
                      className={`transition-all duration-700 ease-in-out cursor-pointer transform ${
                        !isVisible ? 'hidden lg:block scale-50 opacity-20' :
                        isActive ? 'scale-100 lg:scale-110 opacity-100 z-20' :
                        'scale-75 lg:scale-80 opacity-60'
                      } ${
                        isTransitioning ? 'scale-95 opacity-50' : ''
                      }`}
                      onClick={() => goToScreen(index)}
                      style={{
                        transform: `translateX(${
                          isActive ? '0px' : 
                          isPrev ? '-10px' : 
                          isNext ? '10px' : '0px'
                        }) scale(${
                          !isVisible ? '0.5' :
                          isActive ? (window.innerWidth >= 1024 ? '1.1' : '1') :
                          '0.8'
                        })`,
                        transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                      }}
                    >
                      <div className="luxury-phone-container relative">
                        <div className={`w-48 h-[380px] md:w-56 md:h-[450px] lg:w-72 lg:h-[580px] bg-gradient-to-b from-gray-900 via-black to-gray-900 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3.5rem] p-1.5 md:p-2 lg:p-3 shadow-2xl relative ${
                          isActive ? 'shadow-[var(--color-gold-primary)]/20' : ''
                        }`}>
                          {/* Gold Ring Effect for Active Screen */}
                          {isActive && (
                            <div className="absolute inset-0 rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[3.5rem] border-2 border-[var(--color-gold-primary)]/50 animate-pulse"></div>
                          )}
                          
                          <div className="w-full h-full rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden relative bg-black">
                            <img
                              src={screen.image}
                              alt={screen.title}
                              className="w-full h-full object-cover rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem]"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                if (nextElement) {
                                  nextElement.style.display = 'flex';
                                }
                              }}
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-4 md:p-6 lg:p-8 flex flex-col justify-center items-center" style={{display: 'none'}}>
                              <Smartphone className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-[var(--color-gold-primary)] mb-2 md:mb-3 lg:mb-4" />
                              <h4 className="text-white text-sm md:text-base lg:text-lg font-medium mb-1 md:mb-2 text-center">{screen.title}</h4>
                              <p className="text-gray-400 text-xs md:text-sm text-center">{screen.description}</p>
                            </div>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] pointer-events-none"></div>
                            
                            {isActive && (
                              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold-primary)]/10 via-transparent to-transparent rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] pointer-events-none animate-pulse"></div>
                            )}
                          </div>
                          
                          <div className="absolute top-4 md:top-6 lg:top-8 left-1/2 transform -translate-x-1/2 w-10 md:w-12 lg:w-16 h-0.5 md:h-1 bg-gray-700 rounded-full"></div>
                          <div className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 w-16 md:w-24 lg:w-32 h-0.5 md:h-1 bg-gray-800 rounded-full"></div>
                        </div>
                        
                        {isActive && (
                          <>
                            <div className="absolute -top-2 md:-top-3 lg:-top-4 -left-2 md:-left-3 lg:-left-4 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-[var(--color-gold-primary)] rounded-full animate-pulse opacity-60"></div>
                            <div className="absolute -bottom-2 md:-bottom-3 lg:-bottom-4 -right-2 md:-right-3 lg:-right-4 w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-[var(--color-gold-primary)] rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Button - Right */}
            <button
              onClick={nextScreen}
              disabled={isTransitioning}
              className="hidden md:flex w-10 h-10 lg:w-12 lg:h-12 rounded-full glass-effect items-center justify-center hover:bg-[var(--color-gold-primary)]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-30"
            >
              <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-[var(--color-gold-primary)]" />
            </button>
          </div>

          {/* Mobile Navigation Arrows - Floating Overlay */}
          <div className="flex md:hidden justify-between items-center absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-2 sm:px-4 z-30">
            <button
              onClick={prevScreen}
              disabled={isTransitioning}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/70 backdrop-blur-md border border-[var(--color-gold-primary)]/40 flex items-center justify-center hover:bg-[var(--color-gold-primary)]/20 active:scale-95 transition-all duration-300 disabled:opacity-50 shadow-lg touch-manipulation"
            >
              <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-gold-primary)]" />
            </button>
            <button
              onClick={nextScreen}
              disabled={isTransitioning}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/70 backdrop-blur-md border border-[var(--color-gold-primary)]/40 flex items-center justify-center hover:bg-[var(--color-gold-primary)]/20 active:scale-95 transition-all duration-300 disabled:opacity-50 shadow-lg touch-manipulation"
            >
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--color-gold-primary)]" />
            </button>
          </div>

          {/* Enhanced Screen Info - Responsive */}
          <div className="text-center mt-12 md:mt-16 relative z-10 px-4">
            <div className="max-w-2xl mx-auto">
              <h3 className={`text-2xl sm:text-3xl lg:text-4xl text-white mb-3 md:mb-4 font-serif transition-all duration-500 ${
                isTransitioning ? 'opacity-70 transform translate-y-2' : 'opacity-100 transform translate-y-0'
              }`}>
                {screens[currentScreen].title}
              </h3>
              <p className={`text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6 transition-all duration-500 delay-100 ${
                isTransitioning ? 'opacity-70 transform translate-y-2' : 'opacity-100 transform translate-y-0'
              }`}>
                {screens[currentScreen].description}
              </p>
              
              {/* Screen Counter */}
              <div className="inline-flex items-center space-x-2 text-[var(--color-gold-primary)] text-sm font-medium">
                <span className="w-8 h-8 bg-[var(--color-gold-primary)]/20 rounded-full flex items-center justify-center text-xs animate-pulse">
                  {currentScreen + 1}
                </span>
                <span>of {screens.length}</span>
              </div>
            </div>
          </div>

          {/* Responsive Navigation Dots */}
          <div className="flex justify-center space-x-3 md:space-x-4 mt-8 md:mt-12 px-4">
            {screens.map((screen, index) => (
              <button
                key={index}
                onClick={() => goToScreen(index)}
                disabled={isTransitioning}
                className={`group relative transition-all duration-500 disabled:cursor-not-allowed ${
                  index === currentScreen
                    ? "scale-125"
                    : "hover:scale-110"
                }`}
              >
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                  index === currentScreen
                    ? "gold-gradient shadow-lg shadow-[var(--color-gold-primary)]/50 animate-pulse"
                    : "bg-gray-600 group-hover:bg-[var(--color-gold-primary)]/50"
                }`}></div>
                
                {/* Enhanced Tooltip - Hidden on mobile */}
                <div className="hidden md:block absolute -top-14 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-black/90 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-lg border border-[var(--color-gold-primary)]/30 whitespace-nowrap">
                    <div className="font-medium">{screen.title}</div>
                    <div className="text-gray-400 text-xs mt-1">{index + 1} of {screens.length}</div>
                  </div>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </div>
              </button>
            ))}
          </div>

          {/* Enhanced Mobile Swipe Indicator with Visual Guidance */}
          <div className="block md:hidden text-center mt-6 px-4">
            <div className="inline-flex items-center justify-center space-x-3 bg-black/40 backdrop-blur-sm rounded-full px-6 py-3 border border-[var(--color-gold-primary)]/20">
              <span className="text-2xl animate-bounce" style={{animationDelay: '0s'}}></span>
              <span className="text-gray-400 text-sm font-medium"></span>
              <span className="text-2xl animate-bounce" style={{animationDelay: '1s'}}></span>
            </div>
            <div className="mt-3 text-xs text-gray-500">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}