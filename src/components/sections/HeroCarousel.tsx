'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, Award, Shield, Clock, ArrowRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Professional Sign Manufacturing',
      subtitle: 'Custom designs crafted with precision and quality materials for your business',
      description: 'Transform your brand visibility with our premium signage solutions, trusted by Montreal businesses for over 30 years.',
      image: '/carousel1.jpg',
      buttonText: 'Get Free Quote',
      buttonLink: '/contact',
      category: 'Manufacturing Excellence',
      stats: { value: '1500+', label: 'Signs Installed' }
    },
    {
      id: 2,
      title: 'Complete Graphics & Printing',
      subtitle: 'From business cards to large format banners - comprehensive printing solutions',
      description: 'Full-service printing and graphics solutions with state-of-the-art equipment and premium materials.',
      image: '/carousel2.jpg',
      buttonText: 'View Services',
      buttonLink: '/services',
      category: 'Digital Solutions',
      stats: { value: '5000+', label: 'Projects Delivered' }
    },
    {
      id: 3,
      title: 'Expert Installation Services',
      subtitle: 'Professional installation and maintenance by certified technicians',
      description: 'Certified installation teams ensuring perfect placement and long-lasting results for all signage types.',
      image: '/carousel3.jpg',
      buttonText: 'Learn More',
      buttonLink: '/about',
      category: 'Installation & Service',
      stats: { value: '24/7', label: 'Support Available' }
    },
    {
      id: 4,
      title: '30+ Years of Excellence',
      subtitle: 'Trusted by businesses across Montreal for quality signage and graphics',
      description: 'Three decades of innovation, quality craftsmanship, and exceptional customer service in the signage industry.',
      image: '/carousel4.jpg',
      buttonText: 'Our Legacy',
      buttonLink: '/achievements',
      category: 'Industry Leadership',
      stats: { value: '98%', label: 'Client Satisfaction' }
    }
  ];

  // Auto-advance to next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Auto-advance every 4 seconds

    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };



  const currentSlideData = slides[currentSlide];

  return (
    <section 
      className="relative h-screen min-h-[700px] overflow-hidden bg-gray-900"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src={currentSlideData.image}
            alt={currentSlideData.title}
            fill
            className="object-cover transition-all duration-1000 ease-out scale-105"
            priority
            quality={95}
          />
          {/* Professional Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Category Badge */}
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{backgroundColor: '#f16d7a'}}></div>
                {currentSlideData.category}
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className={`text-5xl lg:text-7xl font-bold text-white leading-tight transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {currentSlideData.title}
                </h1>
                <p className={`text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {currentSlideData.subtitle}
                </p>
                <p className={`text-lg text-gray-300 leading-relaxed max-w-xl transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {currentSlideData.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <Link
                  href={currentSlideData.buttonLink}
                  className="group inline-flex items-center justify-center px-8 py-4 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{backgroundColor: '#EB2F46'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f16d7a'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB2F46'}
                >
                  {currentSlideData.buttonText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Our Work
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className={`flex items-center space-x-8 pt-4 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="flex items-center space-x-2 text-white/80">
                  <Award className="w-5 h-5" style={{color: '#f16d7a'}} />
                  <span className="text-sm font-medium">Industry Leader</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Shield className="w-5 h-5" style={{color: '#f16d7a'}} />
                  <span className="text-sm font-medium">Certified Installers</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80">
                  <Clock className="w-5 h-5" style={{color: '#f16d7a'}} />
                  <span className="text-sm font-medium">30+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Stats Column */}
            <div className="lg:col-span-5 lg:justify-self-end">
              <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-700 delay-600 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold text-white">
                    {currentSlideData.stats.value}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {currentSlideData.stats.label}
                  </div>
                  <div className="w-16 h-1 mx-auto rounded-full" style={{backgroundColor: '#f16d7a'}}></div>
                </div>

                {/* Quick Contact */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="text-center space-y-3">
                    <p className="text-gray-300 text-sm">Ready to get started?</p>
                    <Link
                      href="tel:+15141234567"
                      className="block text-white font-semibold text-lg transition-colors duration-300"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#f16d7a'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                      (514) 123-4567
                    </Link>
                    <p className="text-gray-400 text-xs">Free consultation available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 lg:px-8 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto p-4 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                currentSlide === index
                  ? "w-8 h-3 rounded-full"
                  : "w-3 h-3 bg-white/40 rounded-full hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentSlide === index && (
                <div className="absolute inset-0 rounded-full animate-pulse" style={{backgroundColor: '#f16d7a'}}></div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                  <div 
           className="h-full transition-all duration-300 relative overflow-hidden"
           style={{
             background: 'linear-gradient(to right, #f16d7a, #EB2F46)',
             width: `${((currentSlide + 1) / slides.length) * 100}%`
           }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-8 hidden xl:block">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 animate-float">
                     <div className="text-white text-sm font-medium">Montreal&apos;s #1</div>
          <div className="text-xs" style={{color: '#f16d7a'}}>Sign Company</div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-8 hidden xl:block">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 animate-float-delayed">
          <div className="text-white text-sm font-medium">ISO Certified</div>
          <div className="text-xs" style={{color: '#f16d7a'}}>Quality Assured</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default HeroCarousel; 