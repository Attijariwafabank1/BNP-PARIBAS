import React from 'react';
import { Building2, UserCheck, Lightbulb, Target, Monitor, User, FileText, UserPlus } from 'lucide-react';

export default function BecomeClientSection({ onNavigateToLogin, onNavigateToInscription }) {
  return (
    <div className="bg-emerald-600 py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">DEVENEZ CLIENT BNP PARIBAS</h2>
        <p className="text-white text-xs sm:text-sm mb-8 sm:mb-12 max-w-4xl leading-relaxed">
          Chez BNP Paribas, nos services 100% connectés vous permettent d'ouvrir un compte en ligne en quelques clics et de le gérer à distance depuis votre ordinateur, votre tablette ou votre smartphone. Vous avez le choix de la gestion de votre compte : depuis l'agence la plus proche de chez vous ou en ligne.
        </p>

        {/* 4 avantages */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-1">PRÈS DE 2000</h3>
            <p className="text-white text-xs sm:text-sm">AGENCES</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-1">UN CONSEILLER</h3>
            <p className="text-white text-xs sm:text-sm">DÉDIÉ</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-1">L'EXPERTISE</h3>
            <p className="text-white text-xs sm:text-sm">BNP PARIBAS</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>
            <h3 className="text-white font-bold text-base sm:text-lg mb-1">UN ACCÈS</h3>
            <p className="text-white text-xs sm:text-sm">PRIVILÉGIÉ</p>
          </div>
        </div>

        {/* Section ouverture de compte */}
        <div className="bg-white rounded-lg p-6 sm:p-8 lg:p-12">
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-12 flex items-center justify-center ">
                <div className="relative">
                  <div className="hidden sm:block absolute -left-8 top-0 w-6 border-t-2 border-gray-400"></div>
                  <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center bg-white">
                    <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10l4-4m0 0l-4-4m4 4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-light text-gray-700 sm:ml-8">
                SIMPLE ET RAPIDE, OUVREZ VOTRE COMPTE EN LIGNE !
              </h3>
            </div>
          </div>

          {/* 4 étapes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-center">
              <Monitor className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mx-auto mb-3" />
              <div className="flex items-start justify-center gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-light text-emerald-600 ">1</span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">Remplissez votre</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">formulaire en ligne</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <User className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mx-auto mb-3" />
              <div className="flex items-start justify-center gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-light text-emerald-600 ">2</span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">Confirmez votre</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">identité</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mx-auto mb-3" />
              <div className="flex items-start justify-center gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-light text-emerald-600 ">3</span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">Déposez vos pièces</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">justificatives</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <UserPlus className="w-10 h-10 sm:w-12 sm:h-12 text-gray-500 mx-auto mb-3" />
              <div className="flex items-start justify-center gap-2 mb-2">
                <span className="text-2xl sm:text-3xl font-light text-emerald-600 ">4</span>
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">Devenez client</p>
                  <p className="text-xs sm:text-sm font-semibold text-gray-700">BNP Paribas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bouton */}
          <div className="text-center">
            <button 
              onClick={onNavigateToInscription}
              className="bg-teal-400 hover:bg-teal-500 text-white px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium transition w-full sm:w-auto"
            >
              J'ouvre un compte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}