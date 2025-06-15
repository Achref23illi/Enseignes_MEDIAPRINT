"use client";

import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ServiceItem {
  name: string;
  items: string[];
}

interface ServiceCardProps {
  title: string;
  icon: string;
  items: string[];
  index: number;
  scrollProgress: any;
}

const ServiceCard = ({ title, icon, items, index, scrollProgress }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const y = useTransform(
    scrollProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, index * -20, index * -40, index * -60, index * -80, index * -100]
  );
  
  const scale = useTransform(
    scrollProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [1, 1 - index * 0.02, 1 - index * 0.04, 1 - index * 0.06, 1 - index * 0.08, 1 - index * 0.1]
  );
  
  const opacity = useTransform(
    scrollProgress,
    [0, 0.8, 1],
    [1, 1 - index * 0.1, 0.3]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, scale, opacity }}
      className={cn(
        "sticky top-20 w-full max-w-4xl mx-auto mb-8 p-8 rounded-2xl border-2 bg-white/95 backdrop-blur-sm shadow-xl transition-all duration-300",
        "hover:shadow-2xl hover:border-primary-400/50",
        index === 0 && "border-primary-200",
        index === 1 && "border-primary-300", 
        index === 2 && "border-primary-400",
        index === 3 && "border-primary-500",
        index === 4 && "border-primary-600",
        index === 5 && "border-primary-700"
      )}
    >
      <div className="flex items-start gap-6">
        <div className={cn(
          "flex-shrink-0 p-4 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 text-white shadow-lg",
          "flex items-center justify-center text-3xl"
        )}>
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                                  <div className="w-2 h-2 rounded-full" style={{backgroundColor: '#EB2F46'}} />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Card Number */}
        <div className="absolute top-6 right-6">
                                                     <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{backgroundColor: '#EB2F46'}}>
            <span className="text-white font-bold text-lg">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesCardsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const services: ServiceItem[] = [
    {
      name: "SIGNS & LETTERING",
      items: [
        "Light box",
        "Channels Signs - Letters, numbers & cut-out shapes", 
        "Signs Pylons - Steles - Internal signage"
      ]
    },
    {
      name: "CONCEPTION & DESIGN",
      items: [
        "Logos and corporate images",
        "Advertising posters - Promotional posters",
        "Construction site signs - Rental / sale signs",
        "Banners - Oriflammes"
      ]
    },
    {
      name: "DIGITAL MARKING, DRESSING & PRINTING",
      items: [
        "Walls - Window displays",
        "Doors and windows",
        "Vehicles",
        "Boats - Floors"
      ]
    },
    {
      name: "AWNINGS & CANOPIES", 
      items: [
        "Awnings",
        "Marquesas"
      ]
    },
    {
      name: "LIGHTING",
      items: [
        "Interior lighting",
        "Outdoor lighting"
      ]
    },
    {
      name: "GRAPHIC SUPPORTS & EXHIBITION STANDS",
      items: [
        "Banner stands - Flags",
        "Counters & displays - Exhibition stands"
      ]
    }
  ];

  const icons = ["🏷️", "🎨", "🖨️", "☂️", "💡", "🎪"];

  return (
    <div ref={containerRef} className="min-h-[400vh] bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Complete Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to installation, we provide comprehensive signage solutions for all your business needs in Montreal.
          </p>
        </div>

        <div className="relative">
          {services.map((service, index) => (
            <ServiceCard
              key={service.name}
              title={service.name}
              icon={icons[index]}
              items={service.items}
              index={index}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-600">Service</span>
              <div className="flex space-x-1">
                {services.map((_, index) => (
                  <motion.div
                    key={index}
                                         className="w-2 h-2 rounded-full"
                     style={{backgroundColor: '#EB2F46'}}
                    style={{
                      scale: useTransform(
                        scrollYProgress,
                        [index * 0.15, (index + 1) * 0.15],
                        [1, 1.5]
                      )
                    }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-600">
                {Math.min(6, Math.floor(scrollYProgress.get() * 10) + 1)} / 6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCardsSection; 