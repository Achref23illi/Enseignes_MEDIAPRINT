'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { logos } from '@/config/assets'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Our Achievements', href: '/achievements' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      {/* Top Professional Contact Bar */}
      <div className="bg-gray-900 text-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row justify-between items-center text-sm py-3">
            
            {/* Left side - Contact Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8 mb-2 lg:mb-0">
              <div className="flex items-center space-x-2 group">
                <MapPin className="w-4 h-4 transition-colors group-hover:text-red-300" style={{color: '#f16d7a'}} />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  6913 Rue Jarry E, Saint-Léonard, QC H1P 1W7
                </span>
              </div>
              <div className="flex items-center space-x-2 group">
                <Clock className="w-4 h-4 transition-colors group-hover:text-red-300" style={{color: '#f16d7a'}} />
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  Mon-Fri: 8AM-6PM | Emergency 24/7
                </span>
              </div>
            </div>

            {/* Right side - Contact Actions */}
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:info@mediaprint.ca" 
                className="flex items-center space-x-2 text-gray-300 transition-colors group"
                onMouseEnter={(e) => e.currentTarget.style.color = '#f16d7a'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">info@mediaprint.ca</span>
              </a>
              <a 
                href="tel:5143295757" 
                className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{backgroundColor: '#EB2F46'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f16d7a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB2F46'}
              >
                <Phone className="w-4 h-4" />
                <span>(514) 329-5757</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Professional Header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 border-b border-gray-100",
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-900/5" 
            : "bg-white"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src={logos.main}
                  alt={logos.alt}
                  width={400}
                  height={140}
                  className={cn(
                    "w-auto transition-all duration-300",
                    isScrolled ? "h-16" : "h-20"
                  )}
                  priority
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-lg transition-all duration-300 group-hover:bg-red-50"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group"
                >
                  {item.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" style={{backgroundColor: '#f16d7a'}}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              
              {/* Language Selector */}
              <div className="flex items-center bg-gray-50 rounded-lg p-1">
                <button className="px-3 py-1.5 text-xs font-semibold text-gray-900 bg-white rounded-md shadow-sm">
                  EN
                </button>
                <button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  FR
                </button>
              </div>

              {/* Professional CTA */}
              <Link
                href="/contact"
                className="text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                style={{backgroundColor: '#EB2F46'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91831'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB2F46'}
              >
                <span>Get Free Quote</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-300 group"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300",
                  isMenuOpen ? "rotate-45 top-3" : "top-1"
                )}></span>
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300 top-3",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}></span>
                <span className={cn(
                  "absolute block h-0.5 w-6 bg-gray-700 transform transition-all duration-300",
                  isMenuOpen ? "-rotate-45 top-3" : "top-5"
                )}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Professional Mobile Menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-500 border-t border-gray-100",
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="bg-white/95 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 py-6">
              
              {/* Mobile Navigation */}
              <nav className="space-y-2 mb-6">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-300 font-medium group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </nav>
              
              {/* Mobile Actions */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                
                {/* Language Selector */}
                <div className="flex items-center justify-center bg-gray-50 rounded-xl p-1">
                  <button className="flex-1 py-2.5 text-sm font-semibold text-gray-900 bg-white rounded-lg shadow-sm">
                    English
                  </button>
                  <button className="flex-1 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    Français
                  </button>
                </div>

                {/* Mobile CTA */}
                <Link
                  href="/contact"
                  className="block bg-gray-900 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>Get Free Quote</span>
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>

                {/* Mobile Contact Info */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900 mb-2">Contact Us Directly</div>
                    <a 
                      href="tel:5143295757" 
                      className="inline-flex items-center space-x-2 font-semibold"
                      style={{color: '#d91e3a'}}
                    >
                      <Phone className="w-4 h-4" />
                      <span>(514) 329-5757</span>
                    </a>
                  </div>
                  <div className="text-center text-xs text-gray-500">
                    Emergency service available 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header 