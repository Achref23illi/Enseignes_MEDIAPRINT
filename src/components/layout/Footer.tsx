'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  ArrowRight,
  Award,
  Shield,
  Star
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Custom Signs & Lettering',
    'Digital Printing',
    'Awnings & Canopies',
    'LED Lighting Solutions',
    'Vehicle Graphics',
    'Trade Show Displays'
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Get Quote', href: '/quote' },
    { name: 'Careers', href: '/careers' }
  ];

  const certifications = [
    { name: 'ISO 9001', description: 'Quality Management' },
    { name: 'CSA Certified', description: 'Safety Standards' },
    { name: 'OSHA Compliant', description: 'Workplace Safety' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Company Info - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4">
              <Image
                src="/logo.svg"
                alt="Enseignes MEDIAPRINT"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-gray-300 leading-relaxed">
                Montreal&apos;s premier signage company with over 30 years of excellence. 
                We transform businesses through innovative design and quality craftsmanship.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Our Credentials</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#EB2F46'}}>
                      <Shield className="w-4 h-4 text-black" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{cert.name}</div>
                      <div className="text-sm text-gray-400">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="w-5 h-5" style={{color: '#f16d7a'}} />
                <span className="font-semibold">Industry Recognition</span>
              </div>
              <div className="text-sm text-gray-300">
                Montreal Business Excellence Award Winner 2023
              </div>
            </div>
          </div>

          {/* Services - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Customer Rating */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex" style={{color: '#f16d7a'}}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold">4.9/5</span>
              </div>
              <div className="text-sm text-gray-300">
                Based on 200+ customer reviews
              </div>
            </div>
          </div>

          {/* Contact Info - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Call Us</div>
                  <Link 
                    href="tel:+15141234567"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    (514) 123-4567
                  </Link>
                  <div className="text-sm text-gray-400">Free consultation available</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Email Us</div>
                  <Link 
                    href="mailto:info@mediaprint.ca"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    info@mediaprint.ca
                  </Link>
                  <div className="text-sm text-gray-400">Quick response guaranteed</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Visit Us</div>
                  <div className="text-gray-300">
                    1234 Rue Saint-Laurent<br />
                    Montreal, QC H2X 2T3
                  </div>
                  <div className="text-sm text-gray-400">Showroom & Workshop</div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Business Hours</div>
                  <div className="text-gray-300 text-sm space-y-1">
                    <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                    <div>Saturday: 9:00 AM - 4:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h5 className="font-semibold text-white">Follow Us</h5>
              <div className="flex space-x-4">
                <Link 
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </Link>
                <Link 
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </Link>
                <Link 
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </Link>
                <Link 
                  href="#"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
                      <div className="rounded-2xl p-8 text-center" style={{background: 'linear-gradient(to right, #EB2F46, #d91e3a)'}}>
            <h3 className="text-2xl font-bold mb-4" style={{color: '#1f2937'}}>
              Stay Updated with Our Latest Projects
            </h3>
                          <p className="mb-6 max-w-2xl mx-auto" style={{color: 'rgba(31, 41, 55, 0.8)'}}>
              Get exclusive insights, design tips, and special offers delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:outline-none"
                style={{'--tw-ring-color': '#EB2F46'} as React.CSSProperties}
              />
              <button className="px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-300"
                style={{backgroundColor: '#1f2937'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Enseignes MEDIAPRINT. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">
                Sitemap
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              Made with ❤️ in Montreal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 