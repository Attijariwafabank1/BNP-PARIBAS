import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin } from 'lucide-react';

export default function Footer({ onNavigateToLogin }) {
  return (
    <footer className="bg-gray-800 text-gray-300">
      {/* Section réseaux sociaux */}
      <div className="bg-gray-700 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2">
            <span className="text-xs sm:text-sm">Suivez-nous sur :</span>
            <div className="flex gap-3 sm:gap-4 sm:ml-4">
              <a href="#" className="hover:text-white transition">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-teal-400"></span>
              CONTACT
            </h3>
            <p className="text-xs leading-relaxed">
              Nos conseillers vous répondent par téléphone, chat, mail ou bien encore grâce à nos SAV Facebook et Twitter.
            </p>
          </div>

          {/* Trouver une agence */}
          <div>
            <h3 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-teal-400"></span>
              TROUVER UNE AGENCE
            </h3>
            <p className="text-xs leading-relaxed">
              Retrouvez facilement l'agence la plus proche avec ses horaires d'ouverture et les services disponibles.
            </p>
          </div>

          {/* Applications mobiles */}
          <div>
            <h3 className="text-white font-bold text-xs sm:text-sm mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1 h-4 bg-teal-400"></span>
              LES APPLICATIONS MOBILES
            </h3>
            <p className="text-xs leading-relaxed">
              Découvrez nos applications mobiles pour gérer vos comptes, payer avec votre mobile et vous simplifier la vie.
            </p>
          </div>
        </div>

        {/* Liens footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 border-t border-gray-700 pt-6 sm:pt-8">
          {/* Informations légales */}
          <div>
            <h4 className="text-green-400 font-bold text-xs mb-3 flex items-center gap-2">
              <span className="w-1 h-3 bg-teal-400"></span>
              INFORMATIONS LÉGALES
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">Données personnelles</a></li>
              <li><a href="#" className="hover:text-white transition">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              <li><a href="#" className="hover:text-white transition">Réglementation</a></li>
              <li><a href="#" className="hover:text-white transition">Fonds de Garantie des Dépôts et résolution</a></li>
              <li><a href="#" className="hover:text-white transition">Paramètres des cookies</a></li>
              <li><a href="#" className="hover:text-white transition">Résiliation de contrat</a></li>
            </ul>
          </div>

          {/* Nous connaître */}
          <div>
            <h4 className="text-green-400 font-bold text-xs mb-3 flex items-center gap-2">
              <span className="w-1 h-3 bg-teal-400"></span>
              NOUS CONNAÎTRE
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">La banque d'un monde qui change</a></li>
              <li><a href="#" className="hover:text-white transition">Nos engagements responsables</a></li>
              <li><a href="#" className="hover:text-white transition">Emplois & Carrière</a></li>
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h4 className="text-green-400 font-bold text-xs mb-3 flex items-center gap-2">
              <span className="w-1 h-3 bg-teal-400"></span>
              INFORMATIONS
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">Accessibilité : non conforme</a></li>
              <li><a href="#" className="hover:text-white transition">Site Sécurisé</a></li>
              <li><a href="#" className="hover:text-white transition">Conditions d'éligibilité</a></li>
              <li><a href="#" className="hover:text-white transition">Tarifs et conditions</a></li>
              <li><a href="#" className="hover:text-white transition">Glossaire</a></li>
            </ul>
          </div>

          {/* Nos autres sites */}
          <div>
            <h4 className="text-green-400 font-bold text-xs mb-3 flex items-center gap-2">
              <span className="w-1 h-3 bg-teal-400"></span>
              NOS AUTRES SITES
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-white transition">Les Professionnels</a></li>
              <li><a href="#" className="hover:text-white transition">Les Entreprises</a></li>
              <li><a href="#" className="hover:text-white transition">La Banque Privée</a></li>
              <li><a href="#" className="hover:text-white transition">La Banque en ligne</a></li>
              <li><a href="#" className="hover:text-white transition">Le Groupe BNP Paribas</a></li>
            </ul>
          </div>
        </div>

        {/* Texte légal */}
        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <p className="text-xs text-center leading-relaxed mb-3 sm:mb-4 px-2">
            Pour la bonne exécution de vos contrats, et en cas de réclamations/contestations, votre Conseiller est joignable sur sa ligne directe (appel non surtaxé). Si vous ne disposez plus de son numéro de téléphone direct, envoyez-lui un message par votre messagerie sécurisée, il vous le donnera à nouveau en retour.
          </p>
          <p className="text-xs text-center px-2">
            Pour partager votre écran avec un conseiller, cliquez <a href="#" className="text-teal-400 hover:text-teal-300 underline">ici</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}