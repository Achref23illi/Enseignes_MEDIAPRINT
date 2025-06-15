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
      title: 'Company Founded',
      description: 'Enseignes MEDIAPRINT was established with a vision to revolutionize the signage industry in Montreal.',
      image: '/carousel1.jpg',
      stats: { projects: '50+', clients: '25+' },
      icon: Building
    },
    {
      id: 2,
      year: '2000',
      title: 'Digital Revolution',
      description: 'Pioneered digital printing technology in Quebec, becoming the first to offer large-format digital solutions.',
      image: '/carousel2.jpg',
      stats: { projects: '500+', clients: '200+' },
      icon: Zap
    },
    {
      id: 3,
      year: '2010',
      title: 'Industry Recognition',
      description: 'Received the Montreal Business Excellence Award for outstanding service and innovation in signage.',
      image: '/carousel3.jpg',
      stats: { projects: '1000+', clients: '500+' },
      icon: Trophy
    },
    {
      id: 4,
      year: '2020',
      title: 'Sustainable Solutions',
      description: 'Launched eco-friendly signage solutions, leading the industry in sustainable practices.',
      image: '/carousel4.jpg',
      stats: { projects: '1500+', clients: '800+' },
      icon: Shield
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for nothing less than excellence in our customer relationships and in our products and services.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always on the cutting edge of technology, we continuously seek the latest innovations in our field.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about our field and always looking for the best ways to showcase your message.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We build lasting relationships with our clients, understanding their unique needs and goals.'
    }
  ];

  const stats = [
    { number: '30+', label: 'Years of Expertise', icon: Calendar },
    { number: '1500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '800+', label: 'Happy Clients', icon: Users },
    { number: '98%', label: 'Satisfaction Rate', icon: Star }
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
                  About Our Company
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  30 Years of 
                  <span style={{color: '#EB2F46'}}> Excellence</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Enseignes MEDIAPRINT has 30 years of expertise in the design, manufacturing, 
                  installation and repair of signs and graphic supports. This expertise, added to 
                  the creativity and the concern to be on the cutting edge of technology, makes 
                  MEDIAPRINT a reference in the field.
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
                      <div className="font-bold text-gray-900">Industry Leader</div>
                      <div className="text-sm text-gray-600">Since 1993</div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our mission is very clear: to provide optimized and fully tested products and 
              solutions for our customers. At Enseignes MEDIAPRINT, we strive for nothing less 
              than excellence, both in our customer relationships and in our products and services.
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
                Our Passion
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Driven by Innovation & Excellence
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We are passionate about our field, and are always on the lookout for the latest 
                technologies and the best ways to put your message and your company forward. 
                This passion drives us to continuously innovate and exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-300" style={{backgroundColor: '#EB2F46'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#f16d7a'} onMouseLeave={(e) => e.target.style.backgroundColor = '#EB2F46'}>
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
                  View Our Work
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
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey of Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the key milestones that have shaped Enseignes MEDIAPRINT into 
              Montreal's leading signage company.
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
                      <div className="text-sm text-gray-600">Projects Completed</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900 mb-1">
                        {achievements[activeAchievement].stats.clients}
                      </div>
                      <div className="text-sm text-gray-600">Satisfied Clients</div>
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
            Ready to Work with Montreal's Premier Signage Company?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our 30 years of expertise can help elevate your business presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <button className="inline-flex items-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EB2F46'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#f16d7a'} onMouseLeave={(e) => e.target.style.backgroundColor = '#EB2F46'}>
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 