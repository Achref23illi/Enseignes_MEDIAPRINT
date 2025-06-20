'use client';

import React, { useState } from 'react';
import { Play, Award, Users, Calendar, MapPin, ArrowRight } from 'lucide-react';

const AchievementsVideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const achievements = [
    {
      icon: Award,
      number: "1500+",
      title: "Signs Installed",
      description: "Professional installations across Montreal"
    },
    {
      icon: Users,
      number: "800+",
      title: "Happy Clients",
      description: "Businesses trust our expertise"
    },
    {
      icon: Calendar,
      number: "30+",
      title: "Years Experience",
      description: "Industry leadership since 1993"
    },
    {
      icon: MapPin,
      number: "50+",
      title: "Locations Served",
      description: "Throughout Greater Montreal area"
    }
  ];

  const testimonials = [
    {
      quote: "Exceptional quality and professional service. Our new signage has significantly improved our business visibility.",
      author: "Marie Dubois",
      company: "Restaurant Le Gourmet",
      location: "Downtown Montreal"
    },
    {
      quote: "From design to installation, the team exceeded our expectations. Highly recommend their services.",
      author: "Jean-Pierre Martin",
      company: "Martin & Associates",
      location: "Westmount"
    },
    {
      quote: "Professional, reliable, and creative. They transformed our storefront completely.",
      author: "Sarah Chen",
      company: "Chen Medical Clinic",
      location: "Plateau Mont-Royal"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
                      <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4" style={{backgroundColor: '#fde2e4', color: '#9a1530'}}>
            <Award className="w-4 h-4 mr-2" />
            Our Achievements
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three Decades of Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch our journey of transforming Montreal's business landscape with premium signage solutions, 
            one project at a time.
          </p>
        </div>

        {/* Video and Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Video Section */}
          <div className="lg:col-span-7">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              {/* Actual Video */}
              <div className="aspect-video relative">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                  poster="/carousel1.jpg"
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay Elements */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-white text-sm font-medium">HD Quality</span>
                </div>
                                  <div className="absolute top-4 right-4 rounded-lg px-3 py-2" style={{backgroundColor: '#EB2F46'}}>
                  <span className="text-black text-sm font-medium">● Company Showcase</span>
                </div>
              </div>

              {/* Video Info Bar */}
              <div className="bg-gray-800 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                                          <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#f16d7a'}}></div>
                    <span className="text-white text-sm font-medium">Enseignes MEDIAPRINT - 30 Years of Excellence</span>
                  </div>
                  <div className="text-gray-400 text-sm">Company Showcase Video</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Column */}
          <div className="lg:col-span-5">
            <div className="space-y-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group"
                  >
                    <div className="flex items-start space-x-4">
                                              <div className="w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-red-200" style={{backgroundColor: '#fde2e4'}}>
                          <IconComponent className="w-6 h-6" style={{color: '#d91e3a'}} />
                      </div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-gray-900 mb-1">
                          {achievement.number}
                        </div>
                        <div className="text-lg font-semibold text-gray-800 mb-1">
                          {achievement.title}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from Montreal businesses who trust us with their signage needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="mb-4">
                  <div className="flex mb-3" style={{color: '#f16d7a'}}>
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create something exceptional for your business. Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <button className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EB2F46'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#f16d7a'} onMouseLeave={(e) => e.target.style.backgroundColor = '#EB2F46'}>
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsVideoSection; 