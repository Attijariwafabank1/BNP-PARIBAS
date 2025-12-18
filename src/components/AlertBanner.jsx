import React from 'react';

export default function AlertBanner({ onNavigateToLogin }) {
  return (
    <div className="mx-2 sm:mx-4 lg:mx-6 my-3 sm:my-4 lg:my-6">
      <div 
        className="bg-pink-600 text-white p-3 sm:p-4 lg:p-6 rounded-lg cursor-pointer hover:shadow-lg transition" 
        onClick={onNavigateToLogin}
      >
        <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-1.5 sm:mb-2">CYCLONE DESTRUCTEUR À MAYOTTE : MOBILISONS-NOUS !</h3>
        <p className="text-xs sm:text-sm mb-2.5 sm:mb-3 lg:mb-4 leading-relaxed">
          Le Fonds Urgence et Développement de BNP Paribas se mobilise pour venir en aide aux populations frappées de plein fouet par cette catastrophe, grâce aux équipes de la Croix-Rouge Française et aux associations spécialisées sur le terrain.
        </p>
        <button className="bg-white text-pink-700 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-100 transition w-full sm:w-auto">
          Je fais un don
        </button>
      </div>
    </div>
  );
}