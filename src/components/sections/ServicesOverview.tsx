'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesOverview = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            once: true
          }
        }
      );

      // Services cards stagger animation
      gsap.fromTo(servicesRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true
          }
        }
      );

      // Hover animations for service cards
      servicesRef.current.forEach((card, index) => {
        if (card) {
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -10,
              scale: 1.02,
              duration: 0.3,
              ease: "power2.out"
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: "power2.out"
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "SIGNS AND LETTERING",
      description: "Enhance your facade with careful lighting and raised lettering to make it easier to gain visual recognition. Be visible to your customers and create a professional image by highlighting your identity.",
      accent: false
    },
    {
      title: "DIGITAL PRINTING AND PACKAGING",
      description: "Maximize your visibility with inexpensive advertising materials like your windows and vehicles. Du vinyle décoratif à l'impression numérique, il existe une grande variété d'options pour tous les types d'applications et de budgets. Rely on effective visual marketing to make yourself known and reach your target audience.",
      accent: true
    },
    {
      title: "AWNINGS AND CANOPIES",
      description: "Give your windows a decorative touch with interior curtains. De l'extérieur, les auvents et marquises apportent une touche esthétique supplémentaire à votre bâtiment. Habillant les fenêtres et portes d'entrée principales. Create a harmonious and welcoming look for your commercial space.",
      accent: false
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-manrope font-800 text-gray-900 mb-4 leading-tight">
            DESIGN, MANUFACTURE, INSTALLATION AND REPAIR
          </h2>
          <div className="text-3xl md:text-4xl font-manrope font-700 text-gray-800 mb-2">
            SIGNS
          </div>
          <div className="text-2xl md:text-3xl font-manrope font-600 text-gray-700">
            AND GRAPHIC SUPPORTS.
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) servicesRef.current[index] = el;
              }}
              className={`
                relative p-8 rounded-2xl transition-all duration-300 cursor-pointer
                ${service.accent 
                  ? 'bg-gradient-to-br from-yellow-400 to-yellow-500 text-gray-900 shadow-xl shadow-yellow-500/20' 
                  : 'bg-white text-gray-800 shadow-lg hover:shadow-xl'
                }
              `}
            >
              {/* Service Title */}
              <h3 className="text-xl font-manrope font-700 mb-6 tracking-wide">
                {service.title}
                <div className={`w-12 h-1 mt-3 ${service.accent ? 'bg-gray-800' : 'bg-yellow-400'} rounded-full`}></div>
              </h3>

              {/* Service Description */}
              <p className={`
                font-manrope font-400 leading-relaxed text-base
                ${service.accent ? 'text-gray-800' : 'text-gray-600'}
              `}>
                {service.description}
              </p>

              {/* Hover Effect Overlay */}
              <div className={`
                absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300
                ${service.accent 
                  ? 'bg-gradient-to-br from-yellow-500 to-yellow-600' 
                  : 'bg-gradient-to-br from-blue-50 to-blue-100'
                }
              `}></div>

              {/* Content stays on top */}
              <div className="relative z-10">
                {/* Optional: Add an icon or decorative element */}
                <div className={`
                  absolute -top-2 -right-2 w-8 h-8 rounded-full opacity-20
                  ${service.accent ? 'bg-gray-800' : 'bg-yellow-400'}
                `}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-manrope font-600 text-lg rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 font-manrope font-600 text-lg rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview; 