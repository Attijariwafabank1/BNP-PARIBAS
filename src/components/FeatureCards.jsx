import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

export default function FeatureCards({ onNavigateToLogin }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mx-4 sm:mx-6 -mt-32 sm:-mt-48 lg:-mt-64 relative z-10">
      {/* Carte Bleue */}
      <div 
        onClick={onNavigateToLogin}
        className="bg-white rounded-lg cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 shadow-lg overflow-hidden"
      >
        <div className="bg-blue-500 text-white p-6 sm:p-8">
          <Shield className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Assurance vie : découvrez l'offre Bonus PEPs 2025-2026</h3>
          <button className="bg-white text-blue-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 transition mt-3 sm:mt-4">
            Voir les conditions de l'offre
          </button>
          <p className="text-xs mt-2 uppercase font-semibold">
            COMMUNICATION À CARACTÈRE PUBLICITAIRE
          </p>
        </div>
        <div className="bg-white text-black p-6 sm:p-8">
          <p className="text-xs leading-relaxed">
            Du 03/12/2025 au 31/03/2026, investissez sur votre contrat d'assurance vie et bénéficiez 
            d'un bonus sur la part de votre versement investi sur le fonds en Euros Cardif Assurance vie.
          </p>
          <p className="text-xs mt-2 leading-relaxed">
            Cette offre peut être close à tout moment.
          </p>
          <p className="text-xs mt-2 leading-relaxed">
            Pour information, un contrat d'assurance vie propose des supports en unités de compte. 
            Ces derniers présentent un risque de perte en capital totale ou partielle.
          </p>
        </div>
      </div>

      {/* Carte Orange */}
      <div 
        onClick={onNavigateToLogin}
        className="bg-white rounded-lg cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 shadow-lg overflow-hidden"
      >
        <div className="bg-orange-500 text-white p-6 sm:p-8">
          <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Anticipez les imprévus du quotidien</h3>
          <button className="bg-white text-orange-600 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 transition mt-3 sm:mt-4">
            Découvrir
          </button>
        </div>
        <div className="bg-white text-black p-6 sm:p-8">
          <p className="text-xs leading-relaxed">
            Que ce soit à la maison, pendant une activité ou en vacances, les accidents de la vie 
            courante ne préviennent pas. Et ils peuvent bouleverser votre quotidien comme votre budget. 
            Avec Assurance Accidents du Quotidien BNP Paribas (*), protégez toute votre famille des 
            conséquences d'un accident domestique, sportif ou de loisir pour profiter en toute sérénité 
            de vos activités de tous les jours.
          </p>
          <p className="text-xs mt-2 text-gray-500 leading-relaxed">
            (*) Selon la formule souscrite, dans les limites et conditions du contrat
          </p>
        </div>
      </div>

      {/* Carte Verte */}
      <div 
        onClick={onNavigateToLogin}
        className="bg-white rounded-lg cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1 shadow-lg overflow-hidden"
      >
        <div className="bg-green-600 text-white p-6 sm:p-8">
          <Users className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Invitez votre famille à nous rejoindre !</h3>
          <button className="bg-white text-green-700 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 transition mt-3 sm:mt-4">
            Découvrir
          </button>
          <p className="text-xs mt-2 uppercase font-semibold">
            JUSQU'AU 03 FÉVRIER 2026 INCLUS
          </p>
        </div>
        <div className="bg-white text-black p-6 sm:p-8">
          <p className="text-xs leading-relaxed">
            Votre conjoint ou vos enfants ne sont pas encore client chez BNP Paribas ? Nous souhaitons 
            la bienvenue à toute la famille : jusqu'à 80€ offerts*.
          </p>
          <p className="text-xs mt-4 text-gray-500 leading-relaxed">
            *Offres soumises à conditions.
          </p>
        </div>
      </div>
    </div>
  );
}