'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Pen, 
  Settings, 
  Wrench, 
  FileCheck,
  Phone,
  MapPin,
  Mail,
  Clock,
  ArrowRight,
  Award,
  Shield,
  Play,
  CheckCircle,
  Users,
  Star
} from 'lucide-react';

const ServicesPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "CONCEPTION & DESIGN",
      subtitle: "Où la vision devient réalité",
      icon: Pen,
      description: "Transformez vos idées en concepts visuels percutants grâce à notre équipe de design experte. De la consultation initiale à la validation finale des maquettes.",
      features: [
        "Création graphique et logo sur mesure",
        "Visualisation 3D et maquettes",
        "Plans techniques et spécifications",
        "Sélection des couleurs et matériaux"
      ],
      image: "/carousel1.jpg",
      category: "Solutions créatives",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      id: 2,
      title: "FABRICATION",
      subtitle: "Précision et excellence",
      icon: Settings,
      description: "Atelier de fabrication à la fine pointe avec technologie de pointe et artisans qualifiés pour des enseignes de qualité supérieure.",
      features: [
        "Découpe CNC et laser",
        "Soudure et assemblage professionnels",
        "Intégration et câblage DEL",
        "Contrôle qualité rigoureux"
      ],
      image: "/carousel2.jpg",
      category: "Excellence de production",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: 3,
      title: "RÉPARATION & ENTRETIEN",
      subtitle: "Des enseignes toujours éclatantes",
      icon: Wrench,
      description: "Services complets de réparation pour garder vos enseignes impeccables et fonctionnelles, y compris la conversion DEL.",
      features: [
        "Conversion DEL depuis fluorescent",
        "Dépannage et réparation électrique",
        "Services d'urgence disponible 7/7",
        "Programmes d'entretien préventif"
      ],
      image: "/carousel3.jpg",
      category: "Service et assistance",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      borderColor: "border-orange-200"
    },
    {
      id: 4,
      title: "GESTION DE PERMIS",
      subtitle: "Conformité sans tracas",
      icon: FileCheck,
      description: "Gestion complète des permis et conformité municipale. Nous naviguons pour vous dans la réglementation complexe.",
      features: [
        "Demandes de permis municipaux",
        "Vérification de conformité de zonage",
        "Respect du code du bâtiment",
        "Présentation professionnelle"
      ],
      image: "/carousel4.jpg",
      category: "Conformité légale",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Unique Layout */}
      <section className="relative bg-gray-900 pt-24 pb-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='40' cy='40' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Award className="w-5 h-5 mr-2" style={{color: '#32B8F1'}} />
              <span className="text-white font-medium">Services professionnels</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Solutions d&apos;enseignes
              <br />
              <span style={{color: '#32B8F1'}}>complètes</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Quatre services complets couvrant chaque étape de votre projet d&apos;enseigne, de la création à l&apos;installation et au support continu.
            </p>

            {/* Service Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                      activeTab === index 
                        ? 'bg-white text-gray-900 shadow-lg' 
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="hidden sm:inline">{service.category}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-400 text-sm">Années d&apos;expérience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">1500+</div>
                <div className="text-gray-400 text-sm">Projets réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">7/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-gray-400 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card-based Layout */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre offre de services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions globales pour répondre à tous vos besoins en signalisation
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Service Number */}
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-gray-900 font-bold">{String(index + 1).padStart(2, '0')}</span>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-medium ${service.color}`}>
                        <IconComponent className="w-4 h-4 mr-2" />
                        {service.category}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-lg font-medium" style={{color: '#1578a9'}}>
                        {service.subtitle}
                      </p>
                      <div className="w-12 h-1 mt-3" style={{backgroundColor: '#32B8F1'}}></div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                                          <Link
                      href="/contact"
                      className="inline-flex items-center text-gray-900 font-semibold transition-colors group"
                      style={{'--hover-color': '#32B8F1'} as React.CSSProperties}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#32B8F1'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
                    >
                      En savoir plus
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Pourquoi choisir
                  <br />
                  <span style={{color: '#32B8F1'}}>Enseignes Mediaprint ?</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Trois décennies d&apos;expérience, technologie de pointe et engagement envers la qualité font de nous le partenaire de confiance à Montréal.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                                      <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#dff2fd'}}>
                      <Award className="w-6 h-6" style={{color: '#1578a9'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expertise sectorielle</h4>
                      <p className="text-sm text-gray-600">30+ ans d&apos;excellence en enseignes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#dff2fd'}}>
                      <Shield className="w-6 h-6" style={{color: '#1578a9'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Qualité garantie</h4>
                      <p className="text-sm text-gray-600">Installation et matériaux certifiés</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#dff2fd'}}>
                      <Users className="w-6 h-6" style={{color: '#1578a9'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Équipe d&apos;experts</h4>
                      <p className="text-sm text-gray-600">Professionnels qualifiés à votre service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#dff2fd'}}>
                      <Star className="w-6 h-6" style={{color: '#1578a9'}} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Satisfaction client</h4>
                      <p className="text-sm text-gray-600">98% de clients satisfaits</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  style={{backgroundColor: '#FC32A2'}}
                >
                  En savoir plus sur notre entreprise
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/carousel1.jpg"
                  alt="Professional signage manufacturing"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">30+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Notre processus simplifié
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              De la première rencontre à l&apos;installation finale, nous simplifions la signalisation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Nous discutons de votre vision et de vos besoins' },
              { step: '02', title: 'Design', desc: 'Notre équipe crée votre solution sur mesure' },
              { step: '03', title: 'Production', desc: 'Fabrication de haute qualité' },
              { step: '04', title: 'Installation', desc: 'Mise en place professionnelle et support' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              style={{backgroundColor: '#FC32A2'}}
            >
              Démarrer votre projet
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section - Simplified */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Prêt à démarrer ?
                  </h2>
                  <p className="text-lg text-gray-300">
                    Contactez-nous dès aujourd&apos;hui pour une consultation gratuite et découvrez comment nous pouvons transformer votre entreprise avec une signalisation professionnelle.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6" style={{color: '#32B8F1'}} />
                    <div>
                      <div className="text-white font-semibold">Appelez-nous</div>
                                              <Link href="tel:+15146912512" className="text-gray-300 hover:text-white transition-colors">
                          +1 (514) 691-2512
                        </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6" style={{color: '#32B8F1'}} />
                    <div>
                      <div className="text-white font-semibold">Envoyez-nous un e-mail</div>
                                              <div className="text-gray-300">enseignesmediaprint@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6" style={{color: '#32B8F1'}} />
                    <div>
                      <div className="text-white font-semibold">Venez nous voir</div>
                      <div className="text-gray-300">6913 RUE JARRY E, SAINT-LÉONARD, QC</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Consultation gratuite disponible
                  </h3>
                  <p className="text-gray-300 mb-6 text-sm">
                    Obtenez des conseils d&apos;experts et un devis détaillé pour votre projet d&apos;enseigne.
                  </p>
                  
                  <div className="space-y-3">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      style={{backgroundColor: '#FC32A2'}}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Link>
                    
                    <Link
                      href="tel:+15146912512"
                      className="w-full inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Appeler maintenant
                    </Link>
                  </div>

                  {/* Emergency Badge */}
                  <div className="mt-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm border" style={{backgroundColor: 'rgba(50, 184, 241, 0.2)', color: '#32B8F1', borderColor: 'rgba(50, 184, 241, 0.3)'}}>
                      ⚡ Services d&apos;urgence disponible 7/7
                    </span>
                  </div>
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