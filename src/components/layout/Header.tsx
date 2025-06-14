'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
import { gsap } from 'gsap'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<HTMLUListElement>(null)
  const langButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Header entrance animation
    const tl = gsap.timeline()
    
    tl.fromTo(headerRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(navItemsRef.current?.children || [],
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
      "-=0.4"
    )
    .fromTo(langButtonRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
      "-=0.2"
    )

    // Nav item hover animations
    const navItems = navItemsRef.current?.querySelectorAll('li')
    navItems?.forEach(item => {
      const link = item.querySelector('a')
      if (link) {
        gsap.set(link, { position: 'relative' })
        
        item.addEventListener('mouseenter', () => {
          gsap.to(link, { y: -2, duration: 0.3, ease: "power2.out" })
        })
        
        item.addEventListener('mouseleave', () => {
          gsap.to(link, { y: 0, duration: 0.3, ease: "power2.out" })
        })
      }
    })

    // Logo hover animation
    if (logoRef.current) {
      logoRef.current.addEventListener('mouseenter', () => {
        gsap.to(logoRef.current, { 
          scale: 1.05, 
          duration: 0.3, 
          ease: "power2.out" 
        })
      })
      
      logoRef.current.addEventListener('mouseleave', () => {
        gsap.to(logoRef.current, { 
          scale: 1, 
          duration: 0.3, 
          ease: "power2.out" 
        })
      })
    }

    // Language button hover animation
    if (langButtonRef.current) {
      langButtonRef.current.addEventListener('mouseenter', () => {
        gsap.to(langButtonRef.current, { 
          scale: 1.1, 
          rotate: 2,
          duration: 0.3, 
          ease: "power2.out" 
        })
      })
      
      langButtonRef.current.addEventListener('mouseleave', () => {
        gsap.to(langButtonRef.current, { 
          scale: 1, 
          rotate: 0,
          duration: 0.3, 
          ease: "power2.out" 
        })
      })
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    
    if (!isMenuOpen) {
      // Open animation
      gsap.fromTo(mobileMenuRef.current,
        { opacity: 0, y: -20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" }
      )
      
      const menuItems = mobileMenuRef.current?.querySelectorAll('.mobile-nav-item')
      gsap.fromTo(menuItems || [],
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, stagger: 0.08, delay: 0.1, ease: "power2.out" }
      )
    } else {
      // Close animation
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in"
      })
    }
  }

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT US', href: '/about' },
    { label: 'OUR SERVICES', href: '/services' },
    { label: 'OUR ACHIEVEMENTS', href: '/achievements' },
    { label: 'CONTACT', href: '/contact' },
  ]

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm font-manrope">
            <div className="flex items-center space-x-6 mb-2 sm:mb-0">
              <div className="flex items-center space-x-2 group">
                <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-slate-300 group-hover:text-white transition-colors">
                  6913 Rue Jarry E, Saint-Léonard, QC H1P 1W7
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 group">
              <svg className="w-4 h-4 text-green-400 group-hover:text-green-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:5143295757" className="text-slate-300 group-hover:text-white transition-colors font-medium">
                (514) 329-5757
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className={cn(
          "sticky top-0 z-50 transition-all duration-500 ease-out",
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-200/50" 
            : "bg-white/90 backdrop-blur-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            
            {/* Logo Section */}
            <div ref={logoRef} className="flex items-center cursor-pointer">
              {/* Logo Icon */}
              <div className="relative mr-4">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm transform rotate-3"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-sm transform -rotate-2"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-green-600 rounded-sm transform -rotate-1"></div>
                  <div className="w-3 h-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-sm transform rotate-2"></div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              </div>
              
              {/* Logo Text */}
              <div>
                <div className="flex flex-col">
                  <span className="text-2xl font-manrope font-800 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent leading-tight">
                    Enseignes
                  </span>
                  <span className="text-2xl font-manrope font-800 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight -mt-1">
                    MEDIAPRINT
                  </span>
                </div>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-xs font-manrope font-500 text-slate-500 tracking-wider uppercase">design</span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span className="text-xs font-manrope font-500 text-slate-500 tracking-wider uppercase">manufacture</span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span className="text-xs font-manrope font-500 text-slate-500 tracking-wider uppercase">installation</span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span className="text-xs font-manrope font-500 text-slate-500 tracking-wider uppercase">repair</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <ul ref={navItemsRef} className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <li key={index} className="relative group">
                    <Link
                      href={item.href}
                      className="text-sm font-manrope font-600 text-slate-700 hover:text-blue-600 transition-all duration-300 tracking-wide relative py-2"
                    >
                      {item.label}
                      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Language Selector */}
              <button
                ref={langButtonRef}
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2.5 rounded-xl font-manrope font-600 text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 border border-blue-500/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span>EN / FR</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
              className="lg:hidden p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200 border border-slate-200"
            >
              <div className="relative w-5 h-5">
                <span className={cn(
                  "absolute top-0 left-0 w-5 h-0.5 bg-slate-700 transition-all duration-300",
                  isMenuOpen ? "rotate-45 top-2" : ""
                )}></span>
                <span className={cn(
                  "absolute top-2 left-0 w-5 h-0.5 bg-slate-700 transition-all duration-300",
                  isMenuOpen ? "opacity-0" : ""
                )}></span>
                <span className={cn(
                  "absolute top-4 left-0 w-5 h-0.5 bg-slate-700 transition-all duration-300",
                  isMenuOpen ? "-rotate-45 top-2" : ""
                )}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-xl shadow-slate-900/5"
          >
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="mobile-nav-item block py-3 px-4 text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all duration-200 font-manrope font-600 text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                {/* Mobile Contact Info */}
                <div className="pt-4 mt-4 border-t border-slate-200">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 px-4">
                      <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-slate-600 font-manrope">6913 Rue Jarry E, Saint-Léonard</span>
                    </div>
                    <div className="flex items-center space-x-3 px-4">
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href="tel:5143295757" className="text-sm text-slate-600 font-manrope font-600">(514) 329-5757</a>
                    </div>
                  </div>
                  
                  {/* Mobile Language Selector */}
                  <button className="w-full mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-manrope font-600 text-sm shadow-lg">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    <span>EN / FR</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header 