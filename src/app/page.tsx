'use client'

import React, { useEffect, useRef } from 'react'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'
import Testimonials from '@/components/common/Testimonials'
import ContactForm from '@/components/common/ContactForm'
import HeroCarousel from '@/components/sections/HeroCarousel'
import ServicesOverview from '@/components/sections/ServicesOverview'
import { useFadeIn, useStagger, useGSAP } from '@/hooks/useGSAP'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HomePage() {
  const heroRef = useFadeIn<HTMLDivElement>(0, 1.2)
  const servicesRef = useStagger<HTMLDivElement>('.service-card', 0.2)
  const experienceRef = useFadeIn<HTMLDivElement>(0, 1)
  const processRef = useStagger<HTMLDivElement>('.process-step', 0.15)
  const achievementsRef = useStagger<HTMLDivElement>('.achievement-card', 0.1)
  
  // Counter animation
  const statsRef = useGSAP<HTMLDivElement>((element) => {
    const counters = element.querySelectorAll('.counter')
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0')
      const obj = { value: 0 }
      
      gsap.to(obj, {
        value: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          counter.textContent = Math.round(obj.value).toString()
        },
        scrollTrigger: {
          trigger: counter,
          start: "top 80%",
          once: true
        }
      })
    })
  })

  const services = [
    {
      title: 'Custom Sign Design',
      description: 'From concept to creation, we design eye-catching signs that represent your brand perfectly.',
      icon: '🎨',
      features: ['Logo Design', 'Brand Identity', 'Creative Concepts', '3D Visualization']
    },
    {
      title: 'Manufacturing Excellence',
      description: 'State-of-the-art manufacturing with precision cutting, printing, and assembly.',
      icon: '⚙️',
      features: ['CNC Cutting', 'Digital Printing', 'LED Integration', 'Quality Control']
    },
    {
      title: 'Professional Installation',
      description: 'Expert installation services ensuring your signage is perfectly positioned and secure.',
      icon: '🔧',
      features: ['Site Survey', 'Permit Handling', 'Safe Installation', 'Final Inspection']
    },
    {
      title: 'Maintenance & Repair',
      description: 'Keep your signage looking pristine with our comprehensive maintenance services.',
      icon: '🛠️',
      features: ['Regular Maintenance', 'Emergency Repairs', 'LED Replacement', 'Cleaning Services']
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your vision, requirements, and budget to create the perfect signage solution.',
      icon: '💬'
    },
    {
      number: '02',
      title: 'Design & Approval',
      description: 'Our designers create mockups and 3D renderings for your review and approval.',
      icon: '📐'
    },
    {
      number: '03',
      title: 'Manufacturing',
      description: 'We craft your signage using premium materials and cutting-edge technology.',
      icon: '🏭'
    },
    {
      number: '04',
      title: 'Installation',
      description: 'Professional installation ensures your signage is perfectly positioned and secure.',
      icon: '🚀'
    },
  ]

  const achievements = [
    { icon: '🏆', title: 'Award Winning', subtitle: 'Design Excellence' },
    { icon: '⚡', title: 'Fast Turnaround', subtitle: '24-48 Hours' },
    { icon: '🎯', title: 'Precision', subtitle: 'Quality Guaranteed' },
    { icon: '🌟', title: 'Premium', subtitle: 'Materials Used' },
    { icon: '🔒', title: 'Fully Insured', subtitle: 'Licensed & Bonded' },
    { icon: '📞', title: '24/7 Support', subtitle: 'Always Available' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel />

      {/* Services Overview Section */}
      <ServicesOverview />

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="counter text-5xl md:text-6xl font-display font-bold text-primary-600 mb-2" data-target="1500">0</div>
              <div className="text-secondary-600 font-medium">Projects Completed</div>
            </div>
            <div className="p-6">
              <div className="counter text-5xl md:text-6xl font-display font-bold text-primary-600 mb-2" data-target="30">0</div>
              <div className="text-secondary-600 font-medium">Years Experience</div>
            </div>
            <div className="p-6">
              <div className="counter text-5xl md:text-6xl font-display font-bold text-primary-600 mb-2" data-target="98">0</div>
              <div className="text-secondary-600 font-medium">Client Satisfaction %</div>
            </div>
            <div className="p-6">
              <div className="counter text-5xl md:text-6xl font-display font-bold text-primary-600 mb-2" data-target="24">0</div>
              <div className="text-secondary-600 font-medium">Hours Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                🔥 Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              Complete Signage Solutions
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              From initial design concepts to final installation and ongoing maintenance, we provide end-to-end signage services that exceed expectations.
            </p>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card group p-8 hover:shadow-2xl transition-all duration-300" hover>
                <div className="flex items-start space-x-6">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-secondary-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-secondary-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section ref={experienceRef} className="py-24 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium">
                  🎯 Proven Track Record
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                30 Years of Creative Excellence
              </h2>
              <p className="text-xl text-primary-100 mb-8 leading-relaxed">
                Three decades of transforming businesses through innovative signage solutions. We've mastered the art of creating signs that don't just inform—they inspire, attract, and convert.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-primary-100 text-sm">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">15</div>
                  <div className="text-primary-100 text-sm">Team Members</div>
                </div>
              </div>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                Learn Our Story
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white">Licensed & Fully Insured</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white">Premium Materials Only</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white">5-Year Warranty</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-white">Free Design Consultation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium">
                🎯 Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 mb-6">
              How We Bring Your Vision to Life
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our proven 4-step process ensures your signage project is completed on time, on budget, and exceeds your expectations.
            </p>
          </div>

          <div ref={processRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{step.icon}</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-secondary-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div ref={achievementsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-3">{achievement.icon}</div>
                <h4 className="font-bold text-secondary-900 text-sm mb-1">{achievement.title}</h4>
                <p className="text-xs text-secondary-600">{achievement.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  )
}
