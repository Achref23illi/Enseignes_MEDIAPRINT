'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { logos } from '@/config/assets'

interface NavItem {
  label: string
  href: string
  onClick?: (e: React.MouseEvent) => void
}

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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    
    // If we're not on the homepage, navigate to homepage first
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact'
      return
    }
    
    // If we're on homepage, scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navItems: NavItem[] = [
    { label: 'Accueil', href: '/' },
    { label: 'À propos', href: '/about' },
    { label: 'Nos services', href: '/services' },
    { label: 'Nos réalisations', href: '/achievements' },
    { label: 'Contact', href: '#contact', onClick: handleContactClick },
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
                  Lun-Ven : 8h-18h | Services d&apos;urgence 7/7
                </span>
              </div>
            </div>

            {/* Right side - Contact Actions */}
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:enseignesmediaprint@gmail.com" 
                className="flex items-center space-x-2 text-gray-300 transition-colors group"
                onMouseEnter={(e) => e.currentTarget.style.color = '#32B8F1'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">enseignesmediaprint@gmail.com</span>
              </a>
              <a 
                href="tel:+15146912512" 
                className="flex items-center space-x-2 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{backgroundColor: '#32B8F1'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1595d1'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#32B8F1'}
              >
                <Phone className="w-4 h-4" />
                <span>+1 (514) 691-2512</span>
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
                <div className="absolute inset-0 rounded-lg transition-all duration-300 group-hover:bg-blue-50"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={item.onClick}
                  className="relative px-4 py-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-all duration-300 rounded-lg hover:bg-gray-50 group"
                >
                  {item.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" style={{backgroundColor: '#32B8F1'}}></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/15146912512"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white px-4 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                style={{backgroundColor: '#25D366'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              {/* Pour plus d'info Button */}
              <Link
                href="#contact"
                onClick={handleContactClick}
                className="text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
                style={{backgroundColor: '#FC32A2'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e91e63'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC32A2'}
              >
                <span>Pour plus d&apos;info</span>
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
                    onClick={(e) => {
                      if (item.onClick) {
                        item.onClick(e)
                      }
                      setIsMenuOpen(false)
                    }}
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
                    EN
                  </button>
                  <button className="flex-1 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                    FR
                  </button>
                </div>

                {/* Mobile CTA Buttons */}
                <div className="space-y-3">
                  {/* WhatsApp Button */}
                  <a
                    href="https://wa.me/15146912512"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center group"
                    style={{backgroundColor: '#25D366'}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      <span>WhatsApp</span>
                    </div>
                  </a>

                  {/* Pour plus d'info Button */}
                  <Link
                    href="/contact"
                    className="block text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center group"
                    style={{backgroundColor: '#FC32A2'}}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>Pour plus d&apos;info</span>
                      <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </Link>
                </div>

                {/* Mobile Contact Info */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-900 mb-2">Contact Us Directly</div>
                    <a 
                      href="tel:+15146912512" 
                      className="inline-flex items-center space-x-2 font-semibold"
                      style={{color: '#32B8F1'}}
                    >
                      <Phone className="w-4 h-4" />
                      <span>+1 (514) 691-2512</span>
                    </a>
                  </div>
                  <div className="text-center text-xs text-gray-500">
                    Services d&apos;urgence disponible 7/7
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