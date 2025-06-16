'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const heroContent = {
  title: "Valorisez votre marque avec le leader de l'enseigne à Montréal",
  subtitle: "Enseignes sur mesure, installation experte et plus de 30 ans d'excellence reconnue.",
  buttonText: 'Demander un devis gratuit',
  buttonLink: '/contact',
};

const HeroCarousel = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/carousel1.jpg"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* CTA Button Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <Link
          href={heroContent.buttonLink}
          className="inline-flex items-center px-6 py-3 bg-white/90 hover:bg-white text-gray-900 text-base font-semibold rounded-full shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
          style={{ boxShadow: '0 2px 12px 0 rgba(0,0,0,0.08)' }}
        >
          {heroContent.buttonText}
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Headline and Subheadline Bottom Left */}
      <div className="absolute bottom-16 left-8 z-10 max-w-xl">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-xl">
          {heroContent.title}
        </h1>
        <p className="text-white text-lg md:text-2xl font-medium drop-shadow-lg">
          {heroContent.subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroCarousel; 