'use client';

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const services = [
    {
      title: "Fabrication d'enseignes sur mesure",
      subtitle: "Solutions conçues avec précision",
      description: "Atelier de fabrication à la fine pointe à Montréal, produisant des enseignes commerciales haut de gamme. Chaque enseigne est conçue pour la durabilité, la visibilité et l'impact de marque.",
      details: [
        "Lettres boîtiers avec éclairage DEL",
        "Enseignes monumentales et architecturales",
        "Fabrication et finition sur mesure",
        "Matériaux et savoir-faire de qualité"
      ],
      image: "/fabrication.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "Impression grand format",
      subtitle: "Excellence numérique",
      description: "Technologie d'impression numérique avancée offrant des graphismes éclatants et résistants aux intempéries pour l'intérieur et l'extérieur. Spécialisés dans l'habillage mural et la signalétique de bâtiments.",
      details: [
        "Habillage mural et décoratif",
        "Graphismes architecturaux et de vitrines",
        "Matériaux extérieurs résistants aux intempéries"
      ],
      image: "/graphic_media/Habillage-CB1.jpg",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      )
    },
    {
      title: "Installation professionnelle",
      subtitle: "Mise en œuvre experte",
      description: "Spécialistes certifiés assurant une installation sécuritaire, conforme et précise de vos enseignes. Gestion complète du projet, des permis à l'inspection finale.",
      details: [
        "Équipes d'installation licenciées et assurées",
        "Obtention de permis et conformité",
        "Ingénierie structurelle et montage",
        "Entretien et support continu"
      ],
      image: "/truck.png",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-white relative">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 to-white"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full mb-8">
            <div className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#32B8F1'}}></div>
            Notre expertise
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-light text-gray-900 leading-[1.1] mb-6">
            Solutions
            <br />
            <span className="font-semibold">d&apos;enseignes</span>
            <br />
            <span className="font-semibold" style={{color: '#32B8F1'}}>complètes</span>
          </h2>
          
          <div className="w-16 h-1 mx-auto mb-8" style={{backgroundColor: '#32B8F1'}}></div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la conception à la réalisation, nous offrons des solutions d&apos;enseignes complètes qui renforcent votre image de marque et stimulent le succès de votre entreprise à Montréal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } transition-all duration-700`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              
              {/* Content Side */}
              <div className={`lg:col-span-6 space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                
                {/* Service Header */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 transition-all duration-300 group-hover:bg-red-100 group-hover:text-red-600">
                      {service.icon}
                    </div>
                    <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Service {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-4xl font-semibold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <div className="text-lg font-medium" style={{color: '#32B8F1'}}>
                      {service.subtitle}
                    </div>
                    <div className="w-12 h-1" style={{backgroundColor: '#32B8F1'}}></div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Service Details */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Caractéristiques clés</h4>
                  <div className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-4 group">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{backgroundColor: '#32B8F1'}}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link
                    href="/services"
                    className="inline-flex items-center text-gray-900 font-semibold transition-colors group"
                    onMouseEnter={(e) => e.currentTarget.style.color = '#32B8F1'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#1f2937'}
                  >
                    En savoir plus sur ce service
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Image Side */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Link href="/achievements" className="block">
                  <div className="relative group cursor-pointer">
                    
                    {/* Background Card */}
                    <div className="absolute inset-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl"></div>
                    
                    {/* Main Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent group-hover:from-gray-900/40 transition-all duration-300"></div>
                      
                      {/* Hover Overlay with Text */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-6 py-3 border border-gray-200">
                            <div className="text-sm font-semibold text-gray-900 mb-1">Voir nos réalisations</div>
                            <div className="text-xs text-gray-600">Découvrir notre portfolio</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Service Badge */}
                      <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-200">
                        <div className="text-sm font-semibold text-gray-900">{service.title}</div>
                        <div className="text-xs text-gray-600">{service.subtitle}</div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl" style={{backgroundColor: 'rgba(50, 184, 241, 0.1)'}}></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-900/5 rounded-full blur-2xl"></div>
                  </div>
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-32">
          <div className="bg-gray-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            
            <div className="relative space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-5xl font-semibold text-white leading-tight">
                  Prêt à transformer
                  <br />
                  <span style={{color: '#32B8F1'}}>votre entreprise?</span>
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Partenaire avec les experts en enseignes de Montréal. Obtenez une consultation complète et une proposition de projet détaillée adaptée à vos besoins d&apos;entreprise.
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: '#32B8F1'}}>1500+</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">Projets terminés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: '#32B8F1'}}>30+</div>
                                      <div className="text-gray-400 text-sm uppercase tracking-wide">Années d&apos;expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2" style={{color: '#32B8F1'}}>7/7</div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">Support disponible</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                style={{backgroundColor: '#FC32A2'}}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e91e63'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FC32A2'}
                >
                  Obtenir une consultation gratuite
                </Link>
                <Link
                  href="/portfolio"
                  className="border-2 border-gray-600 hover:border-gray-500 text-white hover:bg-gray-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Voir notre travail
                </Link>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{backgroundColor: 'rgba(50, 184, 241, 0.05)'}}></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesOverview 