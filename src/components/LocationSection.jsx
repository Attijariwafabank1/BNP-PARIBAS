import React from 'react';

export default function PracticalBankingSection({ onNavigateToLogin }) {
  return (
    <div className="bg-gray-100 py-8 sm:py-12">
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-2">MA BANQUE EN PRATIQUE</h2>
        <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">Fonctionnalités et services pour améliorer votre utilisation de la banque au quotidien.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Carte Solidarité */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-full h-40 sm:h-48 md:h-52 bg-gray-200 flex items-center justify-center">
              <img src="images/solis.jpeg" alt="Solidarité" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-3">Parlons cœur : votre rendez-vous solidarité de fin d'année</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Parce que nous sommes convaincus que la coopération entre tous les acteurs de la société est clé d'une meilleure cohésion sociale, cette année encore, plus de 100 agences BNP Paribas se mobilisent partout en France pour collecter des produits de première nécessité qui seront redistribués à de multiples associations. Ensemble, faisons preuve de solidarité !
              </p>
              <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition w-full sm:w-auto">
                Je soutiens
              </button>
            </div>
          </div>

          {/* Carte Mes Extras */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-full h-40 sm:h-48 md:h-52 bg-gray-200 flex items-center justify-center">
             <img src="images/offre.jpeg" alt="Offre" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-3">Découvrez Mes Extras, notre offre de cashback !</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Des achats en vue ? Activez gratuitement Mes Extras dans l'application Mes Comptes, faites-vous plaisir avec les offres du moment et recevez le remboursement d'une partie de vos dépenses.
              </p>
              <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition w-full sm:w-auto">
                En savoir plus
              </button>
            </div>
          </div>
        </div>

        {/* Deuxième ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
          {/* Carte Localisation */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-full h-40 sm:h-48 md:h-52 bg-gray-200 flex items-center justify-center">
             <img src="images/loca.jpeg" alt="Localisation" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-3">Localisez nos agences et distributeurs automatiques Cash Services</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                Consultez leurs horaires d'ouvertures, les horaires de prises de RDV et les services proposés pour effectuer vos opérations bancaires.
              </p>
              <button className="bg-teal-400 hover:bg-teal-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition w-full sm:w-auto">
                Trouver une agence
              </button>
            </div>
          </div>

          {/* Carte Guide de Bienvenue */}
          <div 
            onClick={onNavigateToLogin}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="w-full h-40 sm:h-48 md:h-52 bg-gray-200 flex items-center justify-center">
            <img src="images/bienvenu.jpeg" alt="Bienvenue" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-700 mb-2 sm:mb-3 text-center">GUIDE DE BIENVENUE</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 text-center">
                Toutes les informations clés sur BNP Paribas.
              </p>
              <button className="w-full bg-teal-400 hover:bg-teal-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition">
                Je découvre
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}