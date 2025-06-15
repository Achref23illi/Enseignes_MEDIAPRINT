'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Award, Building, Flag, Palette, Zap, Mountain, Star, ArrowRight, MapPin, Calendar } from 'lucide-react';

const AchievementsPage = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const t = useTranslations();

  const categories = [
    {
      id: 'signs_interior',
      title: t('achievements.categories.signsInterior.title'),
      icon: Building,
      description: t('achievements.categories.signsInterior.description'),
      color: '#EB2F46',
      projects: [
        {
          title: 'Signalisation Restaurant Moderne',
          image: '/signs_and_interrior_design/Ags-M-Tacos2.jpg',
          location: 'Centre-ville Montréal',
          year: '2023',
          description: 'Solution complète de marquage intérieur avec lettres canal illuminées et graphiques muraux personnalisés.'
        }
      ]
    },
    {
      id: 'graphic_media',
      title: t('achievements.categories.graphicMedia.title'),
      icon: Palette,
      description: t('achievements.categories.graphicMedia.description'),
      color: '#f16d7a',
      projects: [
        {
          title: 'Campagne Bannières Stade',
          image: '/graphic_media/champ6.jpg',
          location: 'Stade Olympique',
          year: '2023',
          description: 'Bannières extérieures massives pour événements sportifs majeurs avec matériaux résistants aux intempéries.'
        }
      ]
    }
  ];

  const stats = [
    { number: '1500+', label: t('stats.projectsCompleted'), icon: Award },
    { number: '30+', label: t('stats.yearsExperience'), icon: Calendar },
    { number: '500+', label: t('stats.happyClients'), icon: Star },
    { number: '24/7', label: t('stats.supportAvailable'), icon: Zap }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-8" style={{backgroundColor: 'rgba(235, 47, 70, 0.2)', color: '#f16d7a'}}>
              <Award className="w-4 h-4 mr-2" />
              {t('achievements.subtitle')}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('achievements.title')}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
              {t('achievements.description')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(241, 109, 122, 0.2)'}}>
                      <IconComponent className="w-8 h-8" style={{color: '#f16d7a'}} />
                    </div>
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('achievements.workCategories')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('achievements.workDescription')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`p-6 rounded-xl transition-all duration-300 text-center ${
                    activeCategory === index
                      ? 'text-white shadow-xl scale-105'
                      : 'bg-white text-gray-900 hover:bg-gray-100 shadow-md hover:shadow-lg'
                  }`}
                  style={activeCategory === index ? {backgroundColor: category.color} : {}}
                >
                  <IconComponent className={`w-8 h-8 mx-auto mb-3 ${
                    activeCategory === index ? 'text-white' : ''
                  }`} style={activeCategory === index ? {} : {color: category.color}} />
                  <h3 className="font-semibold text-sm leading-tight">{category.title}</h3>
                </button>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {categories[activeCategory].title}
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {categories[activeCategory].description}
            </p>
            <div className="w-24 h-1 mx-auto mt-6 rounded-full" style={{backgroundColor: categories[activeCategory].color}}></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[activeCategory].projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-sm font-medium mb-1">{project.year}</div>
                    <div className="flex items-center text-xs">
                      <MapPin className="w-3 h-3 mr-1" />
                      {project.location}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
