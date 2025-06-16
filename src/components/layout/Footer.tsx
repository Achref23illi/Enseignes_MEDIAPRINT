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
    'Enseignes et lettrage sur mesure',
    'Impression numérique',
    'Auvents et marquises',
    'Solutions d\'éclairage DEL',
    'Habillage de véhicules',
    'Stands d\'exposition'
  ];

  const quickLinks = [
    { name: 'À propos', href: '/about' },
    { name: 'Nos services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
    { name: 'Obtenir un devis', href: '/quote' },
    { name: 'Carrières', href: '/careers' }
  ];

  const certifications = [
    { name: 'ISO 9001', description: 'Gestion de la qualité' },
    { name: 'Certifié CSA', description: 'Normes de sécurité' },
    { name: 'Conforme OSHA', description: 'Sécurité au travail' }
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
                Entreprise d&apos;enseignes numéro 1 à Montréal avec plus de 30 ans d&apos;excellence. Nous transformons les entreprises grâce à un design innovant et un savoir-faire de qualité.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Nos certifications</h4>
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
                <span className="font-semibold">Reconnaissance de l&apos;industrie</span>
              </div>
              <div className="text-sm text-gray-300">
                Lauréat du prix d&apos;excellence en affaires de Montréal 2023
              </div>
            </div>
          </div>

          {/* Services - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-semibold text-white">Nos services</h4>
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
            <h4 className="text-lg font-semibold text-white">Liens rapides</h4>
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
                Basé sur plus de 200 avis clients
              </div>
            </div>
          </div>

          {/* Contact Info - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-lg font-semibold text-white">Contactez-nous</h4>
            
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Appelez-nous</div>
                  <Link 
                    href="tel:+15141234567"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    (514) 123-4567
                  </Link>
                  <div className="text-sm text-gray-400">Consultation gratuite disponible</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Envoyez-nous un e-mail</div>
                  <Link 
                    href="mailto:info@mediaprint.ca"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    info@mediaprint.ca
                  </Link>
                  <div className="text-sm text-gray-400">Réponse rapide garantie</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-medium text-white">Venez nous voir</div>
                  <div className="text-gray-300">
                    1234 Rue Saint-Laurent<br />
                    Montreal, QC H2X 2T3
                  </div>
                  <div className="text-sm text-gray-400">Salle d&apos;exposition & Atelier</div>
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
              Restez informé de nos derniers projets
            </h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{color: 'rgba(31, 41, 55, 0.8)'}}>
              Recevez chaque mois des conseils exclusifs, astuces design et offres spéciales directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Entrez votre adresse e-mail"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-white focus:border-white focus:outline-none transition-all duration-300 shadow-lg"
              />
              <button className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{backgroundColor: '#1f2937'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#374151'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1f2937'}>
                S&apos;abonner
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
              © {currentYear} Enseignes MEDIAPRINT. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                Politique de confidentialité
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                Conditions d&apos;utilisation
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors duration-300">
                Plan du site
              </Link>
            </div>
            <div className="text-gray-400 text-sm">
              Fait avec ❤️ à Montréal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 