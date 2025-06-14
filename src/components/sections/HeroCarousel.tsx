'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { heroCarouselImages } from '@/config/assets';
import { cn } from '@/utils/cn';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const contentRef = useRef<HTMLDivElement[]>([]);
  const dotsRef = useRef<HTMLButtonElement[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Slide transition animation
  useEffect(() => {
    const tl = gsap.timeline();

    // Animate out current content
    if (contentRef.current[currentSlide]) {
      tl.fromTo(contentRef.current[currentSlide].children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
      );
    }

    // Update dots
    dotsRef.current.forEach((dot, index) => {
      gsap.to(dot, {
        scale: index === currentSlide ? 1.2 : 1,
        opacity: index === currentSlide ? 1 : 0.6,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    // Slide transition
    gsap.to(carouselRef.current, {
      x: `-${currentSlide * 100}%`,
      duration: 1,
      ease: "power3.inOut"
    });
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length);
  };

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-slate-900">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex h-full w-full transition-transform duration-1000 ease-in-out"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        {heroCarouselImages.map((image, index) => (
          <div
            key={image.id}
            ref={(el) => {
              if (el) slidesRef.current[index] = el;
            }}
            className="relative min-w-full h-full"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              {/* Overlay Gradients */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div
                  ref={(el) => {
                    if (el) contentRef.current[index] = el;
                  }}
                  className="max-w-3xl"
                >
                  {/* Main Title */}
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-manrope font-800 text-white mb-6 leading-tight">
                    <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
                      {image.title}
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl md:text-2xl lg:text-3xl font-manrope font-400 text-blue-100 mb-8 leading-relaxed max-w-2xl">
                    {image.subtitle}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-manrope font-600 text-lg rounded-2xl shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105">
                      <span className="relative z-10">Get Free Quote</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-manrope font-600 text-lg rounded-2xl border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                      <span className="flex items-center space-x-2">
                        <span>View Our Work</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/20">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-manrope font-800 text-white mb-1">1500+</div>
                      <div className="text-sm font-manrope font-500 text-blue-200 uppercase tracking-wider">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-manrope font-800 text-white mb-1">30+</div>
                      <div className="text-sm font-manrope font-500 text-blue-200 uppercase tracking-wider">Years</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-manrope font-800 text-white mb-1">98%</div>
                      <div className="text-sm font-manrope font-500 text-blue-200 uppercase tracking-wider">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {heroCarouselImages.map((_, index) => (
          <button
            key={index}
            ref={(el) => {
              if (el) dotsRef.current[index] = el;
            }}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300 border-2",
              currentSlide === index
                ? "bg-white border-white scale-125"
                : "bg-white/30 border-white/50 hover:bg-white/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Indicator */}
      <div className="absolute top-8 right-8 z-20 flex items-center space-x-2">
        <button
          onClick={isAutoPlaying ? pauseAutoPlay : resumeAutoPlay}
          className="p-2 bg-white/10 backdrop-blur-sm text-white rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
          aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlaying ? (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>
        <div className="text-white/70 text-sm font-manrope">
          {currentSlide + 1} / {heroCarouselImages.length}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / heroCarouselImages.length) * 100}%` }}
        />
      </div>
    </section>
  );
};

export default HeroCarousel; 