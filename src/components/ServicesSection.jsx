import React from 'react';
import { Car, Users } from 'lucide-react';

export default function ServicesSection({ onNavigateToLogin }) {
  return (
    <div className="mx-4 sm:mx-6 my-8 sm:my-12 bg-gray-100 p-4 sm:p-6 rounded-lg">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-700 mb-2">BNP PARIBAS VOUS ACCOMPAGNE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8">
        <div 
          onClick={onNavigateToLogin}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <Car className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-center font-bold text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">TROUVEZ LA SOLUTION POUR VOTRE MOBILITÉ</h3>
          <p className="text-xs text-gray-400 mb-2">#BNPParibasMobility</p>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Quels que soient vos usages, BNP Paribas vous accompagne dans vos projets de mobilité. Vous souhaitez acquérir une voiture, un vélo ou un scooter électrique ? Découvrez Mobility4you, la plateforme regroupant nos offres de véhicules en LOA, LLD ou disponibles à l'achat.
          </p>
          <p className="text-xs text-gray-400 mb-4 sm:mb-6 leading-relaxed">
            Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
          </p>
          <button className="w-full bg-teal-400 hover:bg-teal-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition">
            En savoir plus
          </button>
        </div>

        <div 
          onClick={onNavigateToLogin}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" />
          <h3 className="text-center font-bold text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">LE SERVICE AFFINITÉ, C'EST LA BANQUE, EN VERSION SUR-MESURE</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            Avec le Service Affinité BNP Paribas, pour 12€/mois, vous disposez d'un conseiller dédié pour vous accompagner dans la gestion de vos comptes, faire travailler votre patrimoine...et bien plus encore.
          </p>
          <button className="w-full bg-teal-400 hover:bg-teal-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition">
            Découvrir
          </button>
        </div>

        <div 
          onClick={onNavigateToLogin}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div className="w-full h-24 sm:h-32 bg-gray-200 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden">
             <img src="images/and.jpeg" alt="Android Pay" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-center font-bold text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">PAYEZ EN TOUTE SIMPLICITÉ AVEC VOTRE SMARTPHONE ANDROID</h3>
          <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
            Rendez-vous sur votre application MesComptes, rubrique Paiements et rejoignez LYF PAY pour activer le paiement sans contact !
          </p>
          <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            Profitez de paiements rapides et sécurisés, avec la possibilité d'enregistrer jusqu'à 3 cartes bancaires et de choisir celle qui convient pour chacun de vos achats.
          </p>
          <button className="w-full bg-teal-400 hover:bg-teal-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition">
            En savoir plus
          </button>
        </div>
      </div>
    </div>
  );
}