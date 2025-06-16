'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building, ArrowRight, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Enseignes et lettrage sur mesure',
    'Impression numérique',
    'Auvents et marquises',
    'Solutions d’éclairage DEL',
    'Habillage de véhicules',
    'Stands d’exposition',
    'Services d’installation',
    'Autre'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Appelez-nous',
      primary: '+1 514 329 5757',
      secondary: 'Consultation gratuite disponible',
      href: 'tel:+15143295757'
    },
    {
      icon: Mail,
      title: 'Envoyez-nous un e-mail',
      primary: 'info@mediaprint.ca',
      secondary: 'Réponse rapide garantie',
      href: 'mailto:info@mediaprint.ca'
    },
    {
      icon: MapPin,
      title: 'Venez nous voir',
      primary: '6913 Rue Jarry E',
      secondary: 'Saint-Léonard, QC H1P 1W7',
      href: 'https://maps.google.com/maps?q=6913+Rue+Jarry+E,+Saint-Léonard,+QC+H1P+1W7,+Canada'
    },
    {
      icon: Clock,
      title: 'Heures d’ouverture',
      primary: 'Lun - Ven : 8h00 - 18h00',
      secondary: 'Samedi : 9h00 - 16h00',
      href: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contactez-nous
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discutons de vos besoins en enseignes et créons ensemble quelque chose d’exceptionnel. Obtenez votre consultation gratuite dès aujourd’hui.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Obtenez votre devis gratuit
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{color: '#EB2F46'}} />
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Merci !</h4>
                  <p className="text-gray-600">
                    Nous avons bien reçu votre message et nous vous répondrons sous 24 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                          placeholder="Votre nom complet"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse e-mail *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom de l’entreprise
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Numéro de téléphone
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                          placeholder="(514) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none"
                      placeholder="Décrivez votre projet d’enseigne..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    style={{backgroundColor: '#EB2F46'}}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f16d7a'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB2F46'}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-red-100">
                        <IconComponent className="w-6 h-6 text-gray-600" style={{'--group-hover-color': '#d91e3a'} as React.CSSProperties} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {info.title}
                        </h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-300 block"
                          >
                            {info.primary}
                          </a>
                        ) : (
                          <div className="text-gray-700">{info.primary}</div>
                        )}
                        <div className="text-sm text-gray-500 mt-1">
                          {info.secondary}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Google Map */}
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2794.8234567890123!2d-73.5987654!3d45.5678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654c9ec0ba427a83!2s6913%20Rue%20Jarry%20E%2C%20Saint-L%C3%A9onard%2C%20QC%20H1P%201W7%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123!5m2!1sen!2sca"
                width="100%"
                height="256"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Enseignes MEDIAPRINT Location"
                className="w-full h-64"
              ></iframe>
              
              {/* Map Info Overlay */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary-600" />
                  <span className="text-gray-900 text-sm font-medium">Our Location</span>
                </div>
              </div>
              
              {/* Directions Button */}
              <div className="absolute bottom-4 right-4">
                <a 
                  href="https://maps.google.com/maps/dir/?api=1&destination=6913+Rue+Jarry+E,+Saint-Léonard,+QC+H1P+1W7,+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 flex items-center shadow-lg"
                style={{backgroundColor: '#EB2F46'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f16d7a'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB2F46'}
                >
                  Get Directions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">Emergency Service</h4>
              <p className="text-gray-300 text-sm mb-4">
                Need urgent sign repair or installation? We offer 24/7 emergency services.
              </p>
              <a 
                href="tel:+15143295757"
                className="inline-flex items-center text-primary-400 font-semibold hover:text-primary-300 transition-colors duration-300"
              >
                Call Emergency Line
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 