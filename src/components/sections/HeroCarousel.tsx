'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const heroContent = {
  title: "Valorisez votre marque avec le leader de l'enseigne à Montréal",
      subtitle: "Enseignes sur mesure, installation experte et plus de 3 décennies d'expérience reconnue.",
  buttonText: 'Demander un devis gratuit',
  buttonLink: '/contact',
};

const HeroCarousel = () => {
  return (
    <section className="relative w-full aspect-[2/1] overflow-hidden bg-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="https://storage.googleapis.com/work_images/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* CTA Button Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20">
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