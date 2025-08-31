"use client";

import React from "react";
import { Play, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function VideoSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-serif mb-6 text-white">
            See <span className="gold-text-gradient">FlexiRyde</span> in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch how effortless booking luxury can be with our intuitive mobile application
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video rounded-3xl overflow-hidden glass-effect group cursor-pointer">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=2070"
              alt="FlexiRyde App Interface"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
            
            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 gold-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                <Play className="w-10 h-10 text-black ml-1" />
              </div>
            </div>

            {/* Mock Phone Frame */}
            <div className="absolute top-8 right-8 w-32 h-64 bg-black rounded-2xl p-1 hidden lg:block">
              <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl p-3">
                <div className="text-center text-white space-y-2">
                  <div className="w-8 h-8 gold-gradient rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Play className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-xs">FlexiRyde</div>
                  <div className="space-y-1">
                    <div className="h-1 bg-gray-700 rounded w-3/4 mx-auto"></div>
                    <div className="h-1 bg-gray-700 rounded w-1/2 mx-auto"></div>
                    <div className="h-6 gold-gradient rounded mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button className="gold-gradient text-black hover:opacity-90 transition-opacity duration-300 px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              Watch Full Demo
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-3"
            >
              <Youtube className="w-5 h-5 mr-2" />
              See on YouTube
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}