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
                src="/enseigneLogo.svg"
                alt="Enseignes MEDIAPRINT"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
              <p className="text-gray-300 leading-relaxed">
                Entreprise d&apos;enseignes numéro 1 à Montréal avec plus de 3 décennies d&apos;expérience. Nous transformons les entreprises grâce à un design innovant et un savoir-faire de qualité.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Nos certifications</h4>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#32B8F1'}}>
                      <Shield className="w-4 h-4 text-white" />
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
                <Award className="w-5 h-5" style={{color: '#32B8F1'}} />
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
                <div className="flex" style={{color: '#32B8F1'}}>
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
                    href="tel:+15146912512"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    +1 (514) 691-2512
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
                    href="mailto:enseignesmediaprint@gmail.com"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    enseignesmediaprint@gmail.com
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

            {/* Quick Communication Buttons */}
            <div className="space-y-3">
              <h5 className="font-semibold text-white">Communication rapide</h5>
              <div className="space-y-2">
                <a
                  href="https://wa.me/15146912512"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  style={{backgroundColor: '#25D366'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#128C7E'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25D366'}
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
                
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-4 py-2.5 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                  style={{backgroundColor: '#FC32A2'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e91e63'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC32A2'}
                >
                  Pour plus d&apos;info
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="rounded-2xl p-8 text-center" style={{background: 'linear-gradient(to right, #32B8F1, #1e8bb8)'}}>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Restez informé de nos derniers projets
            </h3>
            <p className="mb-6 max-w-2xl mx-auto text-white/90">
              Recevez chaque mois des conseils exclusifs, astuces design et offres spéciales directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Entrez votre adresse e-mail"
                className="flex-1 px-4 py-3 rounded-lg border-2 border-white/20 bg-white/95 backdrop-blur-sm text-gray-900 placeholder-gray-600 focus:ring-2 focus:border-white focus:outline-none transition-all duration-300 shadow-lg"
                style={{'--tw-ring-color': '#FC32A2'} as React.CSSProperties}
              />
              <button className="px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{backgroundColor: '#FC32A2'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e91e63'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC32A2'}>
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