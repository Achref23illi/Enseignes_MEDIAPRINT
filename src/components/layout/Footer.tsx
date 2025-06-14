import React from 'react'
import { cn } from '@/utils/cn'

interface FooterProps {
  className?: string
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const services = [
    'Custom Sign Design',
    'LED Signs',
    'Vehicle Graphics',
    'Storefront Signs',
    'Banners & Displays',
    'Digital Signage'
  ]

  const quickLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Work', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Get Quote', href: '/quote' },
    { label: 'Blog', href: '/blog' }
  ]

  const socialLinks = [
    { icon: '📘', label: 'Facebook', href: '#' },
    { icon: '📷', label: 'Instagram', href: '#' },
    { icon: '💼', label: 'LinkedIn', href: '#' },
    { icon: '🐦', label: 'Twitter', href: '#' }
  ]

  return (
    <footer className={cn('bg-secondary-900 text-white', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <span className="text-2xl font-display font-bold">Signs & Graphics</span>
              </div>
              <p className="text-secondary-300 mb-6 leading-relaxed max-w-md">
                For over 30 years, we've been creating exceptional signage solutions that help businesses stand out, communicate effectively, and drive results.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">📍</span>
                  <span className="text-secondary-300">1234 Business Ave, Suite 100, City, ST 12345</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">📞</span>
                  <a href="tel:+15550123456" className="text-secondary-300 hover:text-white transition-colors">
                    (555) 012-3456
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-400 mr-3">📧</span>
                  <a href="mailto:info@signsandgraphics.com" className="text-secondary-300 hover:text-white transition-colors">
                    info@signsandgraphics.com
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h4 className="font-semibold text-white mb-3">Business Hours</h4>
                <div className="text-secondary-300 text-sm space-y-1">
                  <div>Monday - Friday: 8:00 AM - 6:00 PM</div>
                  <div>Saturday: 9:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                  <div className="text-accent-400 font-medium">Emergency service available 24/7</div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-secondary-300 hover:text-primary-400 transition-colors text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-secondary-300 hover:text-primary-400 transition-colors text-sm flex items-center"
                    >
                      <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-secondary-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.label}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-400 text-sm mb-4 md:mb-0">
              © 2024 Signs & Graphics Company. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-secondary-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-secondary-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-secondary-400 hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 