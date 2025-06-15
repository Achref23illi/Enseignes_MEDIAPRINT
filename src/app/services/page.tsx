'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Pen, 
  Settings, 
  Wrench, 
  FileCheck,
  Phone,
  MapPin,
  Mail,
  Clock
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "CONCEPTION & DESIGN",
      icon: Pen,
      description: "Complete design and planning services for your signage projects.",
      features: [
        "Printing and cutting",
        "Graphic design and simulation", 
        "Manufacturing design and shop drawing"
      ],
              color: "from-red-500 to-red-600"
    },
    {
      title: "MANUFACTURING",
      icon: Settings,
      description: "State-of-the-art manufacturing with precision digital tools.",
      features: [
        "Cutting assisted by digital tools (router and laser)",
        "Assembly, welding, and gluing",
        "Painting and finishing"
      ],
              color: "from-red-600 to-red-700"
    },
    {
      title: "REPAIR",
      icon: Wrench,
      description: "Professional repair and upgrade services for existing signage.",
      features: [
        "Conversion of fluorescent tube lighting to LED",
        "Advantages: energy saving, long life, safety, low voltage and choice of color",
        "Various imperfections and wear"
      ],
              color: "from-red-700 to-red-800"
    },
    {
      title: "PERMIT APPLICATION",
      icon: FileCheck,
      description: "Complete permit handling and municipal compliance services.",
      features: [
        "Taking charge of the request for permits, with the municipalities and presentation of models",
        "For compliance and installation"
      ],
              color: "from-red-800 to-red-900"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span style={{color: '#f16d7a'}}>Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From conception to installation, we provide comprehensive signage solutions 
              with over 30 years of expertise in Montreal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${service.color} p-8 text-white`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-white/90 text-sm">{service.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Service Features */}
                  <div className="p-8">
                    <ul className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{backgroundColor: '#EB2F46'}}></div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-96 h-96 rounded-full -translate-x-48 -translate-y-48" style={{backgroundColor: 'rgba(235, 47, 70, 0.1)'}}></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full translate-x-48 translate-y-48" style={{backgroundColor: 'rgba(235, 47, 70, 0.1)'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CONTACT
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full mb-8" style={{backgroundColor: '#f16d7a'}}></div>
            <p className="text-xl text-gray-300 mb-4">NEED HELP? CALL US!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Phone */}
              <div className="text-center lg:text-left">
                <Link 
                  href="tel:+15143295757"
                  className="inline-block group"
                >
                  <div className="text-5xl md:text-6xl font-bold transition-colors duration-300" style={{color: '#f16d7a'}}>
                    +1 514 329 5757
                  </div>
                </Link>
              </div>

              {/* Address */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 mt-1 flex-shrink-0" style={{color: '#f16d7a'}} />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Our Location</h4>
                    <p className="text-gray-300 leading-relaxed">
                      6913 RUE JARRY E, SAINT-LÉONARD,<br />
                      QC H1P 1W7.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" style={{color: '#f16d7a'}} />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400 text-sm">info@enseignesmediaprint.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5" style={{color: '#f16d7a'}} />
                    <div>
                      <p className="text-white font-medium">Hours</p>
                      <p className="text-gray-400 text-sm">Mon-Fri: 8AM-6PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Get a free consultation and quote for your signage needs. 
                  Our experts are ready to help bring your vision to life.
                </p>
                
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              style={{backgroundColor: '#EB2F46'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f16d7a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#EB2F46'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Link>
                  
                  <Link
                    href="tel:+15143295757"
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </Link>
                </div>

                {/* Emergency Service */}
                            <div className="mt-6 p-4 rounded-lg border" style={{backgroundColor: 'rgba(235, 47, 70, 0.2)', borderColor: 'rgba(241, 109, 122, 0.3)'}}>
              <p className="text-sm font-medium" style={{color: '#fccccf'}}>
                    ⚡ 24/7 Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage; 