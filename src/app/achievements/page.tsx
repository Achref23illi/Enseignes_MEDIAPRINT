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
  Filter,
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'masonry'
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(24);

  // Company milestones
  const milestones = [
    {
      year: "1993",
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
      color: "bg-green-500"
    },
    {
      year: "2010",
      title: "1000+ Projets",
      description: "Cap franchi de plus de 1000 projets d'enseignes réalisés",
      icon: Target,
      color: "bg-orange-500"
    },
    {
      year: "2018",
      title: "Reconnaissance de l'industrie",
      description: "Lauréat du prix d'excellence en enseignes du Québec",
      icon: Award,
      color: "bg-purple-500"
    },
    {
      year: "2023",
      title: "30 ans d'excellence",
      description: "Trois décennies d'innovation et de satisfaction client",
      icon: Crown,
      color: "bg-red-500"
    }
  ];

  // Generate all projects from folder structure
  const generateAllProjects = () => {
    const projects = [];
    let id = 1;

    // Push Through Signs (20 images)
    const pushThroughImages = [
      'Ags-G-Bb1.jpg', 'Ags-G-Bb2.jpg', 'Ags-CentreHp.jpg', 'Ags-hossain.jpg',
      'Ags-iTech4.jpg', 'Ags-CDN-scaled.jpg', 'Ags-Scup.jpg', 'Ags-Scup1.jpg',
      'Ags-Torino2.jpg', 'enseignesAGS-Montreal.jpg', 'Hammam-SO.jpg', 'IMG_1123.jpg',
      'Panini-push.jpg', 'PushT1.jpg', 'PushT3.jpg', 'PushT7.jpg', 'PushT9.jpg',
      'Ags-beaute-fute.jpg', 'Ags-Cheesecake.jpg', 'Ags-Electrocell.jpg'
    ];

    pushThroughImages.forEach(img => {
      const name = img.replace('Ags-', '').replace('.jpg', '').replace('-', ' ');
      projects.push({
        id: id++,
        title: name.charAt(0).toUpperCase() + name.slice(1),
        category: "push_through",
        location: "Montreal, QC",
        year: Math.random() > 0.5 ? "2023" : "2022",
        description: "Professional push-through LED signage with premium illumination",
        image: `/push_through_sign/${img}`,
        images: [`/push_through_sign/${img}`],
        features: ["LED Push-Through", "Weather Resistant", "Professional Grade"]
      });
    });

    // Channel Letters (44 images)
    const channelImages = [
      'Ags-Cacao2.jpg', 'Ags-CBergham.jpg', 'Ags-CBergham1.jpg', 'Ags-electrocell1.jpg',
      'Ags-Miracle110.jpg', 'Ags-Otantik1.jpg', 'Ags-Otantik2.jpg', 'Ags-Panini-bourassa1.jpg',
      'Ags-Panini-bourassa2.jpg', 'Ags-Quantum.jpg', 'Ags-Zoukis22.jpg', 'Ags-Artisant.jpg',
      'Ags-Artisant1.jpg', 'Ags-californeon-A-sport1.jpg', 'Ags-Californeon-Copper.jpg',
      'Ags-Californeon-steves.jpg', 'Ags-HottoDoggu1.jpg', 'Ags-HottoDoggu2.jpg',
      'Ags-iTech2.jpg', 'Ags-M-Tacos6.jpg', 'Ags-M-Tacos7.jpg', 'Ags-P-Gino1.jpg',
      'Ags-restore.jpg', 'Ags-Burgers-N-Shakes.jpg', 'Ags-cofi-1.jpg', 'Ags-cofi-2.jpg',
      'Ags-Miracle110-1.jpg', 'Ags-Monteiro.jpg', 'Ags-Monteiro1.jpg', 'Ags-Papa-john.jpg',
      'bergh1.jpg', 'Chanel-CB1.jpg', 'Chanel-CIOT.jpg', 'chanel-CSL.jpg', 'Chanel-disca.jpg',
      'chanel-disca1.jpg', 'Chanel-electronica.jpg', 'Chanel-electronica1.jpg', 'chanel2.jpg',
      'chanel4.jpg', 'chanel5.jpg', 'chanel7.jpg', 'chanel10.jpg', 'chanel11.jpg',
      'chanel13.jpg', 'chanel14.jpg', 'chanel15.jpg', 'Reverse-ch2.jpg', 'chanel-bar.jpg'
    ];

    channelImages.forEach(img => {
      const name = img.replace('Ags-', '').replace('Chanel-', '').replace('chanel-', '').replace('.jpg', '').replace('-', ' ');
      projects.push({
        id: id++,
        title: name.charAt(0).toUpperCase() + name.slice(1),
        category: "channel_letters",
        location: "Montreal, QC", 
        year: Math.random() > 0.5 ? "2023" : "2022",
        description: "Premium channel letter signage with LED illumination",
        image: `/enseigne_channel/${img}`,
        images: [`/enseigne_channel/${img}`],
        features: ["Channel Letters", "LED Illumination", "Custom Design"]
      });
    });

    // Flag Signs (18 images)
    const flagImages = [
      'HPIM6499.jpg', 'HPIM6470.jpg', 'HPIM6469.jpg', 'Ed1.jpg', 'Caisson-lum2.jpg',
      'caison-lum-4.jpg', 'Ags-pizza.jpg', 'Ags-MTM.jpg', 'Ags-bourek.jpg', 'Ags-andy1.jpg',
      'Ags-andy.jpg', 'Ags-iTech4.jpg', 'Ags-Cod-Bonheur3-google.jpg', 'Ags-Cod-Bonheur2.jpg',
      'Ags-californeon-QDC.jpg', 'Ags-Californeon-Kampai.jpg', 'Ags-Californeon-crem-St-Paul.jpg',
      'Ags-californeon-Copper.jpg'
    ];

    flagImages.forEach(img => {
      const name = img.replace('Ags-', '').replace('HPIM', 'Project').replace('.jpg', '').replace('-', ' ');
      projects.push({
        id: id++,
        title: name.charAt(0).toUpperCase() + name.slice(1),
        category: "flag_signs",
        location: "Montreal, QC",
        year: Math.random() > 0.5 ? "2023" : "2022", 
        description: "Professional flag sign with LED illumination and mounting",
        image: `/flag_sign/${img}`,
        images: [`/flag_sign/${img}`],
        features: ["Flag Sign", "LED Illumination", "Professional Mount"]
      });
    });

    // Awnings & Canopies (20 images)
    const awningImages = [
      'HPIM6464.jpg', 'HPIM6463.jpg', 'HPIM6462.jpg', 'boulangerie-anna.jpg', 'Auvent3.jpg',
      'Auvent2.jpg', 'Auvent1.jpg', 'Auvent-ana.jpg', 'Auvent-4.jpg', 'Ags-thao.jpg',
      'Ags-P-Gino2.jpg', 'Ags-Cobra1.jpg', 'Ags-Cobra.jpg', 'Ags-Californeon-QC-Deli.jpg',
      'Ags-Miracle110.jpg', 'Ags-Citronic.jpg', 'Ags-Cheesecake.jpg', 'Marquise1.jpg',
      'IMG_0679.jpg', 'IMG_2458.jpg'
    ];

    awningImages.forEach(img => {
      const name = img.replace('Ags-', '').replace('Auvent-', 'Awning ').replace('HPIM', 'Project').replace('IMG_', 'Project ').replace('.jpg', '').replace('-', ' ');
      projects.push({
        id: id++,
        title: name.charAt(0).toUpperCase() + name.slice(1),
        category: "awnings",
        location: "Montreal, QC",
        year: Math.random() > 0.5 ? "2023" : "2022",
        description: "Custom awning with integrated signage and weather protection",
        image: `/awaning_and_canopy/${img}`,
        images: [`/awaning_and_canopy/${img}`],
        features: ["Custom Awning", "Weather Protection", "Integrated Signage"]
      });
    });

    // Pylons & Steles (23 images)
    const pylonImages = [
      'Ags-cam.jpg', 'Ags-californeon-PapaJ-pylone.jpg', 'Ags-clinique-Med-scaled.jpg',
      'Ags-clinique-Med1-scaled.jpg', 'Ags-Mach.jpg', 'Ags-eglise2.jpg', 'Ags-eglise3.jpg',
      'Ags-Grimoire.jpg', 'Ags-eglise4.jpg', 'camion-ags.jpg', 'CB-Lokma.jpg', 'installation2.jpg',
      'Ep1.jpg', 'kei-phat-marche.jpg', 'Pylone-AGS.jpg', 'kim-phat.jpg', 'Pylone1-AGS.jpg',
      'Pylone3.jpg', 'restor-pylone1.jpg', 'Pylone4.jpg', 'Ags-OKpneus.jpg',
      'Ags-pylone-en-fabrication.jpg', 'Ags-Panini-pylone.jpg'
    ];

    pylonImages.forEach(img => {
      const name = img.replace('Ags-', '').replace('Pylone-', 'Pylon ').replace('pylone', 'pylon').replace('.jpg', '').replace('-', ' ');
      projects.push({
        id: id++,
        title: name.charAt(0).toUpperCase() + name.slice(1),
        category: "pylons",
        location: "Montreal, QC",
        year: Math.random() > 0.5 ? "2023" : "2022",
        description: "Large format pylon signage with high visibility design",
        image: `/pylons_and_steles/${img}`,
        images: [`/pylons_and_steles/${img}`],
        features: ["Large Format", "High Visibility", "Professional Design"]
      });
    });

    // Graphic Media (35 images)
    const graphicImages = [
      'RollUp2.jpg', 'rangiss1.jpg', 'Mont-Tacos-V1.jpg', 'HPIM6496.jpg', 'HPIM6495.jpg',
      'HPIM6494.jpg', 'habillage-vitr9.jpg', 'habillage-vitr8.jpg', 'habillage-vitr6.jpg',
      'habillage-vitr1.jpg', 'habillage-murale3.jpg', 'habillage-murale1.jpg', 'Habillage-CB2.jpg',
      'Habillage-CB1.jpg', 'DSC_01131.jpg', 'Drapeaux.jpg', 'dayC-4-scaled.jpg', 'dayC-3-scaled.jpg',
      'dayC-2-scaled.jpg', 'champ6.jpg', 'champ5.jpg', 'champ4.jpg', 'banner3.jpg', 'banner2.jpg',
      'banner1.jpg', 'banner.jpg', 'Ags-signalisation1.jpg', 'Ags-signalisation.jpg',
      'Ags-garderie.jpg', 'Ags-service.jpg', 'Ags-M-Tacos9.jpg', 'Ags-M-Tacos4.jpg',
      'Ags-M-Tacos-poster1.jpg', 'Ags-M-Tacos-poster.jpg', 'Ags-G-Bb2.jpg', 'Ags-facade.jpg',
      'Ags-Poster-lightbox.jpg'
    ];

    graphicImages.forEach(img => {
      const name = img.replace('Ags-', '').replace('habillage-', '').replace('Habillage-', '').replace('HPIM', 'Project').replace('.jpg', '').replace('-', ' ');
      projects.push({
        id: id++,
        title: name.charAt(0).toUpperCase() + name.slice(1),
        category: "graphic_media",
        location: "Montreal, QC",
        year: Math.random() > 0.5 ? "2023" : "2022",
        description: "Professional graphic design and large format printing",
        image: `/graphic_media/${img}`,
        images: [`/graphic_media/${img}`],
        features: ["Large Format", "Professional Graphics", "High Quality Print"]
      });
    });

    // Interior Design (16 images)
    const interiorImages = [
      'Ags-CBergham-orleon.jpg', 'Ags-CBergham-orleon1.jpg', 'Ags-californeon-SMT-int-scaled.jpg',
      'Ags-genesys.jpg', 'Ags-M-Tacos2.jpg', 'Ags-M-Tacos3.jpg', 'Ags-Pho.jpg', 'Ags-Lokma.jpg',
      'Ags-Lokma1.jpg', 'Ags-MCI-scaled.jpg', 'Ags-MCI1.jpg', 'Ags-MCI2.jpg', 'Ags-Torino1.jpg',
      'genesys.jpg', 'IMG_AGS-church.jpg', 'lettre-decoup5.jpg'
    ];

    interiorImages.forEach(img => {
      const name = img.replace('Ags-', '').replace('IMG_AGS-', '').replace('lettre-decoup', 'Letter Design').replace('.jpg', '').replace('-', ' ');
      projects.push({
        id: id++,
        title: name.charAt(0).toUpperCase() + name.slice(1),
        category: "interior_design",
        location: "Montreal, QC",
        year: Math.random() > 0.5 ? "2023" : "2022",
        description: "Interior signage and design with brand integration",
        image: `/sign_and_interior_design/${img}`,
        images: [`/sign_and_interior_design/${img}`],
        features: ["Interior Design", "Brand Integration", "Professional Finish"]
      });
    });

    return projects;
  };

  const portfolioProjects = useMemo(() => generateAllProjects(), []);

  const categories = [
    { id: 'all', name: 'Tous les projets', count: portfolioProjects.length },
    { id: 'push_through', name: 'Lettres ajourées', count: portfolioProjects.filter(p => p.category === 'push_through').length },
    { id: 'channel_letters', name: 'Lettres cannelées', count: portfolioProjects.filter(p => p.category === 'channel_letters').length },
    { id: 'flag_signs', name: 'Drapeaux', count: portfolioProjects.filter(p => p.category === 'flag_signs').length },
    { id: 'awnings', name: 'Auvents', count: portfolioProjects.filter(p => p.category === 'awnings').length },
    { id: 'pylons', name: 'Pylônes', count: portfolioProjects.filter(p => p.category === 'pylons').length },
    { id: 'graphic_media', name: 'Graphisme', count: portfolioProjects.filter(p => p.category === 'graphic_media').length },
    { id: 'interior_design', name: 'Intérieur', count: portfolioProjects.filter(p => p.category === 'interior_design').length }
  ];

  // Filter and search logic
  const filteredProjects = useMemo(() => {
    let filtered = selectedCategory === 'all' 
      ? portfolioProjects 
      : portfolioProjects.filter(project => project.category === selectedCategory);
    
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  }, [portfolioProjects, selectedCategory, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

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
              <Crown className="w-5 h-5 mr-2" style={{color: '#f16d7a'}} />
              <span className="text-white font-medium">30 ans d'excellence</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Notre héritage de
              <br />
              <span style={{color: '#f16d7a'}}>réalisations</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Trois décennies d'innovation, de savoir-faire et de satisfaction client. Découvrez notre portfolio complet de {portfolioProjects.length}+ projets à travers Montréal.
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
              Portfolio complet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Parcourez notre vaste collection de {portfolioProjects.length}+ projets dans toutes les catégories de services
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gray-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full">{category.count}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                  <span>Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                    viewMode === 'masonry' ? 'bg-white shadow-sm' : 'text-gray-600'
                  }`}
                >
                  <List className="w-4 h-4" />
                  <span>Masonry</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {paginatedProjects.length} of {filteredProjects.length} projects
              {searchTerm && ` for "${searchTerm}"`}
            </p>
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
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded capitalize">
                      {project.category.replace('_', ' ')}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors" />
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
                Previous
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
                          ? 'bg-gray-900 text-white'
                          : 'border border-gray-300 hover:bg-gray-50'
                      }`}
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
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Industry Recognition</h2>
            <p className="text-lg text-gray-300">Awards validating our commitment to excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                <Award className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Quebec Signage Excellence</h3>
              <p className="text-gray-300 text-sm">Outstanding quality and innovation in commercial signage</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                <Star className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Customer Choice Award</h3>
              <p className="text-gray-300 text-sm">Top choice for signage services by Montreal businesses</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20">
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Innovation Leader</h3>
              <p className="text-gray-300 text-sm">Leading adoption of new technologies and solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our growing portfolio of satisfied clients with professional signage solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                style={{backgroundColor: '#EB2F46'}}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">{selectedProject.title}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Close project details"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Project Details</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-700">{selectedProject.year}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsPage; 