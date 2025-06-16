'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Award, 
  Users, 
  Calendar, 
  Target, 
  Heart, 
  Building, 
  Lightbulb, 
  CheckCircle,
  ArrowRight,
  Star,
  Trophy,
  Zap,
  Shield
} from 'lucide-react';

const AboutPage = () => {
  const [activeAchievement, setActiveAchievement] = useState(0);

  const achievements = [
    {
      id: 1,
      year: '1993',
      title: 'Fondation de l’entreprise',
      description: 'Enseignes MEDIAPRINT a été fondée avec la volonté de révolutionner l’industrie de l’enseigne à Montréal.',
      image: '/carousel1.jpg',
      stats: { projects: '50+', clients: '25+' },
      icon: Building
    },
    {
      id: 2,
      year: '2000',
      title: 'Révolution numérique',
      description: 'Précurseur de l’impression numérique au Québec, devenant le premier à offrir des solutions grand format.',
      image: '/carousel2.jpg',
      stats: { projects: '500+', clients: '200+' },
      icon: Zap
    },
    {
      id: 3,
      year: '2010',
      title: 'Reconnaissance de l’industrie',
      description: 'Lauréat du prix d’excellence en affaires de Montréal pour un service et une innovation remarquables dans l’enseigne.',
      image: '/carousel3.jpg',
      stats: { projects: '1000+', clients: '500+' },
      icon: Trophy
    },
    {
      id: 4,
      year: '2020',
      title: 'Solutions durables',
      description: 'Lancement de solutions d’enseignes écoresponsables, leader de l’industrie en pratiques durables.',
      image: '/carousel4.jpg',
      stats: { projects: '1500+', clients: '800+' },
      icon: Shield
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Nous visons rien de moins que l’excellence dans nos relations clients et dans nos produits et services.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Toujours à la pointe de la technologie, nous recherchons continuellement les dernières innovations dans notre domaine.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par notre métier et cherchons toujours les meilleures façons de mettre en valeur votre message.'
    },
    {
      icon: Users,
      title: 'Partenariat',
      description: 'Nous bâtissons des relations durables avec nos clients, en comprenant leurs besoins et objectifs uniques.'
    }
  ];

  const stats = [
    { number: '30+', label: 'Années d’expertise', icon: Calendar },
    { number: '1500+', label: 'Projets réalisés', icon: CheckCircle },
    { number: '800+', label: 'Clients satisfaits', icon: Users },
    { number: '98%', label: 'Taux de satisfaction', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: '#fde2e4', color: '#9a1530'}}>
                  <Building className="w-4 h-4 mr-2" />
                  À propos de notre entreprise
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  30 ans d’excellence
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Enseignes MEDIAPRINT possède 30 ans d’expertise dans la conception, la fabrication, l’installation et la réparation d’enseignes et de supports graphiques. Cette expertise, alliée à la créativité et à la volonté d’être à la pointe de la technologie, fait de MEDIAPRINT une référence dans le domaine.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="text-center">
                                          <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{backgroundColor: '#fde2e4'}}>
                      <IconComponent className="w-6 h-6" style={{color: '#d91e3a'}} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <Image
                  src="/carousel1.jpg"
                  alt="Enseignes MEDIAPRINT Workshop"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{backgroundColor: '#EB2F46'}}>
                      <Award className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Chef de file de l’industrie</div>
                      <div className="text-sm text-gray-600">Depuis 1993</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Mission */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Notre mission est très claire : fournir des produits et solutions optimisés et entièrement testés à nos clients. Chez Enseignes MEDIAPRINT, nous visons rien de moins que l’excellence, tant dans nos relations clients que dans nos produits et services.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-red-200" style={{backgroundColor: '#fde2e4'}}>
                    <IconComponent className="w-8 h-8" style={{color: '#d91e3a'}} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Passion Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium" style={{backgroundColor: 'rgba(235, 47, 70, 0.2)', color: '#f16d7a'}}>
                <Heart className="w-4 h-4 mr-2" />
                Notre passion
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Portés par l’innovation & l’excellence
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Nous sommes passionnés par notre domaine, et nous cherchons toujours les dernières technologies et les meilleures façons de mettre votre message et votre entreprise en avant. 
                Cette passion nous pousse à continuer d’innover et à dépasser les attentes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-300" style={{backgroundColor: '#EB2F46'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f16d7a'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB2F46'}>
                  En savoir plus sur nous
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  Voir notre travail
                </button>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="relative">
                <Image
                  src="/truck.png"
                  alt="MEDIAPRINT Service Vehicle"
                  width={400}
                  height={300}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Achievements Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre parcours d’excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les étapes clés qui ont fait d’Enseignes MEDIAPRINT le leader de l’enseigne à Montréal.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12">
            {/* Timeline Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <button
                    key={achievement.id}
                    onClick={() => setActiveAchievement(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                      activeAchievement === index
                        ? 'text-white shadow-lg scale-105'
                        : 'bg-white text-gray-900 hover:bg-gray-100 shadow-md'
                    }`}
                    style={activeAchievement === index ? {backgroundColor: '#EB2F46'} : {}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        activeAchievement === index ? 'bg-black/20' : ''
                      }`}
                      style={activeAchievement === index ? {} : {backgroundColor: '#fde2e4'}}>
                        <IconComponent className={`w-6 h-6 ${
                          activeAchievement === index ? 'text-black' : ''
                        }`} 
                        style={activeAchievement === index ? {} : {color: '#d91e3a'}} />
                      </div>
                      <div className="flex-1">
                        <div className={`text-2xl font-bold mb-1 ${
                          activeAchievement === index ? 'text-black' : ''
                        }`}
                        style={activeAchievement === index ? {} : {color: '#d91e3a'}}>
                          {achievement.year}
                        </div>
                        <div className="font-semibold mb-2">{achievement.title}</div>
                        <div className={`text-sm ${
                          activeAchievement === index ? 'text-black/80' : 'text-gray-600'
                        }`}>
                          {achievement.description.substring(0, 80)}...
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Achievement Details */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64 lg:h-80">
                  <Image
                    src={achievements[activeAchievement].image}
                    alt={achievements[activeAchievement].title}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-3xl font-bold mb-2">
                      {achievements[activeAchievement].year}
                    </div>
                    <div className="text-xl font-semibold">
                      {achievements[activeAchievement].title}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {achievements[activeAchievement].description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {achievements[activeAchievement].stats.projects}
                      </div>
                      <div className="text-sm text-gray-600">Projets réalisés</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {achievements[activeAchievement].stats.clients}
                      </div>
                      <div className="text-sm text-gray-600">Clients satisfaits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Prêt à collaborer avec le leader de l’enseigne à Montréal ?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Discutons ensemble de la façon dont nos 30 ans d’expertise peuvent valoriser la présence de votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EB2F46'}} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f16d7a'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#EB2F46'}>
              Obtenir une consultation gratuite
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              Voir notre portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 