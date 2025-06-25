'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Calendar,
  Award,
  Users,
  Building,
  Star,
  TrendingUp,
  MapPin,
  Eye,
  ArrowRight,
  CheckCircle,
  Crown,
  Target,
  Zap,
  Grid,
  List,
  Search,
  X
} from 'lucide-react';

const AchievementsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Company milestones
  const milestones = [
    {
      year: "2013",
      title: "Fondation de l'entreprise",
      description: "Débuts avec la volonté de transformer le paysage de l'enseigne à Montréal",
      icon: Building,
      color: "bg-blue-500"
    },
    {
      year: "2000",
      title: "Révolution numérique", 
      description: "Investissement dans la technologie d'impression numérique de pointe",
      icon: TrendingUp,
      color: "bg-blue-500"
    },
    {
      year: "2010",
      title: "1000+ Projets",
      description: "Cap franchi de plus de 1000 projets d'enseignes réalisés",
      icon: Target,
      color: "bg-blue-500"
    },
    {
      year: "2018",
      title: "Reconnaissance de l'industrie",
      description: "Lauréat du prix d'excellence en enseignes du Québec",
      icon: Award,
      color: "bg-blue-500"
    },
    {
      year: "2023",
      title: "30 ans d'excellence",
      description: "Trois décennies d'innovation et de satisfaction client",
      icon: Crown,
      color: "bg-blue-500"
    }
  ];

  // Our portfolio projects using the new thumbnail photos
  const portfolioProjects = [
    {
      id: 1,
      title: "Enseigne de restaurant moderne",
      location: "Montreal, QC",
      year: "2024",
      description: "Installation d'enseigne lumineuse pour restaurant avec design contemporain",
      image: "/thumbnail_20241225_151017.jpg",
      images: ["/thumbnail_20241225_151017.jpg"],
      features: ["LED Illumination", "Design moderne", "Installation professionnelle"]
    },
    {
      id: 2,
      title: "Enseigne commerciale premium",
      location: "Montreal, QC",
      year: "2024",
      description: "Enseigne haute qualité avec éclairage LED et finition premium",
      image: "/thumbnail_20250131_125932.jpg",
      images: ["/thumbnail_20250131_125932.jpg"],
      features: ["Éclairage LED", "Finition premium", "Résistant aux intempéries"]
    },
    {
      id: 3,
      title: "Enseigne architecturale",
      location: "Montreal, QC",
      year: "2025",
      description: "Conception et réalisation d'enseigne intégrée à l'architecture du bâtiment",
      image: "/thumbnail_IMG_20250225_174748343_HDR.jpg",
      images: ["/thumbnail_IMG_20250225_174748343_HDR.jpg"],
      features: ["Design architectural", "Intégration parfaite", "Haute visibilité"]
    },
    {
      id: 4,
      title: "Enseigne illuminée de prestige",
      location: "Montreal, QC",
      year: "2025",
      description: "Enseigne de prestige avec système d'éclairage avancé",
      image: "/thumbnail_IMG_20250305_150618998.jpg",
      images: ["/thumbnail_IMG_20250305_150618998.jpg"],
      features: ["Éclairage avancé", "Design de prestige", "Qualité supérieure"]
    },
    {
      id: 5,
      title: "Enseigne contemporaine",
      location: "Montreal, QC",
      year: "2025",
      description: "Enseigne au design contemporain avec éclairage LED moderne",
      image: "/thumbnail_IMG_20250425_104715788_HDR.jpg",
      images: ["/thumbnail_IMG_20250425_104715788_HDR.jpg"],
      features: ["Design contemporain", "LED moderne", "Installation sur mesure"]
    },
    {
      id: 6,
      title: "Enseigne lumineuse élégante",
      location: "Montreal, QC",
      year: "2025",
      description: "Réalisation d'enseigne élégante avec système d'éclairage sophistiqué",
      image: "/thumbnail_IMG_20250425_104728597_HDR.jpg",
      images: ["/thumbnail_IMG_20250425_104728597_HDR.jpg"],
      features: ["Éclairage sophistiqué", "Design élégant", "Finition soignée"]
    },
    {
      id: 7,
      title: "Enseigne professionnelle",
      location: "Montreal, QC",
      year: "2025",
      description: "Installation d'enseigne professionnelle avec éclairage haute performance",
      image: "/thumbnail_IMG_20250425_104737670_HDR.jpg",
      images: ["/thumbnail_IMG_20250425_104737670_HDR.jpg"],
      features: ["Haute performance", "Professionnel", "Durabilité garantie"]
    }
  ];

  // Pagination
  const totalPages = Math.ceil(portfolioProjects.length / itemsPerPage);
  const paginatedProjects = portfolioProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const stats = [
    { number: "30+", label: "Années d'expérience", icon: Calendar },
    { number: `${portfolioProjects.length}+`, label: "Projets réalisés", icon: CheckCircle },
    { number: "500+", label: "Clients satisfaits", icon: Users },
    { number: "98%", label: "Taux de satisfaction", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Crown className="w-5 h-5 mr-2" style={{color: '#32B8F1'}} />
              <span className="text-white font-medium">30 ans d'excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Nos 
              <br />
              <span style={{color: '#32B8F1'}}>réalisations</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Découvrez notre portfolio de projets d'enseignes réalisés avec excellence et savoir-faire à travers Montréal.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Compact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre parcours</h2>
            <p className="text-lg text-gray-600">Les étapes clés de nos 30 ans d'histoire</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              return (
                <div key={index} className="text-center max-w-xs">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-white ${milestone.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">{milestone.year}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos réalisations récentes - des enseignes de qualité supérieure conçues et installées avec expertise
            </p>
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Grille</span>
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  viewMode === 'masonry' ? 'bg-white shadow-sm' : 'text-gray-600'
                }`}
              >
                <List className="w-4 h-4" />
                <span>Liste</span>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={`grid gap-6 mb-12 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}>
            {paginatedProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded text-xs font-medium">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-1 text-white text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      Réalisation
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 transition-colors" 
                      style={{'--hover-color': '#32B8F1'} as React.CSSProperties}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#32B8F1'}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#9ca3af'}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Précédent
              </button>
              
              <div className="flex space-x-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page = i + Math.max(1, currentPage - 2);
                  if (page > totalPages) return null;
                  
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg ${
                        currentPage === page
                          ? 'text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
                      style={currentPage === page ? {backgroundColor: '#32B8F1'} : {}}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Suivant
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Reconnaissance de l'industrie</h2>
            <p className="text-lg text-gray-300">Des prix qui valident notre engagement vers l'excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Excellence en enseignes du Québec</h3>
              <p className="text-gray-300 text-sm">Qualité exceptionnelle et innovation en enseignes commerciales</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Satisfaction client</h3>
              <p className="text-gray-300 text-sm">98% de clients satisfaits et recommandations</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                <Crown className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Leader du marché</h3>
              <p className="text-gray-300 text-sm">30 ans d'innovation et de leadership dans l'industrie</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800" style={{background: 'linear-gradient(135deg, #32B8F1 0%, #1578a9 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Prêt à réaliser votre projet d'enseigne ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez comment nous pouvons transformer votre visibilité commerciale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Obtenir un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
                             <button
                 onClick={() => setSelectedProject(null)}
                 className="absolute top-4 right-4 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors z-10"
                 aria-label="Fermer les détails du projet"
               >
                 <X className="w-4 h-4" />
               </button>
              
              <div className="aspect-video relative">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="mr-4">{selectedProject.location}</span>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{selectedProject.year}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">{selectedProject.description}</p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Caractéristiques</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.features.map((feature, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-300"
                  style={{backgroundColor: '#32B8F1'}}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1578a9'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#32B8F1'}
                >
                  Demander un devis
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsPage; 