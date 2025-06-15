export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Enseignes <span style={{color: '#EB2F46'}}>MEDIAPRINT</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Votre Partenaire de Confiance en Signalisation à Montréal
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12">
            Depuis plus de 30 ans, nous créons des enseignes exceptionnelles qui donnent vie à votre marque. 
            De la conception à l&apos;installation, nous offrons des solutions complètes de signalisation pour tous vos besoins commerciaux.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EB2F46'}}>
              Obtenir un Devis Gratuit
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Voir Nos Réalisations
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">30+</div>
              <div className="text-gray-400 text-sm font-medium">Années d&apos;Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">1500+</div>
              <div className="text-gray-400 text-sm font-medium">Projets Complétés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400 text-sm font-medium">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm font-medium">Support Disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Solutions Complètes de Signalisation pour Votre Entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#fde2e4'}}>
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Conception & Design</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Design créatif et consultation</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Dessins techniques</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Visualisation 3D</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#fde2e4'}}>
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Fabrication</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Lettres découpées et formées</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Enseignes illuminées LED</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Impression grand format</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#fde2e4'}}>
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Installation</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Installation professionnelle</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Service d&apos;urgence 24/7</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Maintenance complète</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#fde2e4'}}>
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Permis</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Demandes de permis</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Conformité municipale</li>
                <li className="flex items-center"><span className="w-2 h-2 rounded-full mr-3" style={{backgroundColor: '#EB2F46'}}></span>Documentation complète</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Contactez-Nous Aujourd&apos;hui
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Prêt à commencer votre projet? Obtenez une consultation gratuite et un devis personnalisé.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(235, 47, 70, 0.2)'}}>
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Notre Adresse</h3>
              <p className="text-gray-400">6913 Rue Jarry E, Saint-Léonard, QC H1P 1W7</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(235, 47, 70, 0.2)'}}>
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Téléphone</h3>
              <p className="text-3xl font-bold" style={{color: '#EB2F46'}}>(514) 329-5757</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4" style={{backgroundColor: 'rgba(235, 47, 70, 0.2)'}}>
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-white font-semibold mb-2">E-mail</h3>
              <p className="text-gray-400">info@mediaprint.ca</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105" style={{backgroundColor: '#EB2F46'}}>
              Obtenir une Consultation Gratuite
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300">
              Voir Notre Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
