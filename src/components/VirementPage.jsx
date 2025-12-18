// components/VirementPage.jsx

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import emailjs from '@emailjs/browser';
import { 
  ArrowLeft, Send, User, CreditCard, Euro, MessageSquare,
  Wallet, Clock, ArrowLeftRight, FileText, Mail, Building2, AlertCircle, Loader2, Download, X
} from 'lucide-react';

export default function VirementPage({ navigate, onVirementSuccess }) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('virement');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    beneficiary: '',
    email: '',
    iban: '',
    bic: '',
    amount: '',
    message: ''
  });

  const menuItems = [
    { id: 'solde', icon: Wallet, label: 'Solde' },
    { id: 'historique', icon: Clock, label: 'Historique' },
    { id: 'virement', icon: ArrowLeftRight, label: 'Virement' },
    { id: 'cartes', icon: CreditCard, label: 'Cartes' },
    { id: 'rib', icon: FileText, label: 'RIB' },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'solde') {
      navigate('dashboard');
    } else {
      navigate(tabId);
    }
  };

  // Validation IBAN
  const validateIBAN = (iban) => {
    // Supprimer les espaces
    const cleanIban = iban.replace(/\s/g, '');
    
    // Format général: 2 lettres (pays) + 2 chiffres (clé) + max 30 caractères alphanumériques
    const ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{1,30}$/;
    
    if (!ibanRegex.test(cleanIban)) {
      return false;
    }
    
    // Longueur spécifique selon le pays
    const countryLengths = {
      'FR': 27, // France
      'CI': 28, // Côte d'Ivoire
      'BE': 16, // Belgique
      'DE': 22, // Allemagne
      'ES': 24, // Espagne
      'IT': 27, // Italie
      'GB': 22, // Royaume-Uni
    };
    
    const country = cleanIban.substring(0, 2);
    const expectedLength = countryLengths[country];
    
    if (expectedLength && cleanIban.length !== expectedLength) {
      return false;
    }
    
    return true;
  };

  // Validation BIC/SWIFT
  const validateBIC = (bic) => {
    // Format BIC: 8 ou 11 caractères alphanumériques
    // 4 lettres (code banque) + 2 lettres (code pays) + 2 caractères (localisation) + 3 caractères optionnels (code agence)
    const bicRegex = /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/;
    const cleanBic = bic.replace(/\s/g, '').toUpperCase();
    
    return bicRegex.test(cleanBic);
  };

  // Validation Email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Télécharger le reçu (image/impression)
  const handleDownloadReceipt = () => {
    if (!virementData) return;

    // Créer un canvas pour générer le reçu
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');

    // Fond blanc
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Header vert
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 100);
    gradient.addColorStop(0, '#059669');
    gradient.addColorStop(1, '#0d9488');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, 120);

    // Logo BNP
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('BNP PARIBAS', canvas.width / 2, 45);

    ctx.font = '18px Arial';
    ctx.fillText('REÇU DE VIREMENT', canvas.width / 2, 75);

    ctx.font = '14px Arial';
    ctx.fillText('Confirmation de transaction', canvas.width / 2, 100);

    // Badge succès
    ctx.fillStyle = '#d1fae5';
    ctx.fillRect(250, 140, 300, 50);
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('✓ VIREMENT EFFECTUÉ', canvas.width / 2, 170);

    // Référence
    ctx.fillStyle = '#fef3c7';
    ctx.fillRect(150, 210, 500, 60);
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 2;
    ctx.strokeRect(150, 210, 500, 60);
    
    ctx.fillStyle = '#92400e';
    ctx.font = '11px Arial';
    ctx.fillText('RÉFÉRENCE DE TRANSACTION', canvas.width / 2, 230);
    ctx.font = 'bold 16px Courier New';
    ctx.fillText(virementData.reference, canvas.width / 2, 255);

    // Montant
    ctx.fillStyle = '#059669';
    ctx.font = 'bold 42px Arial';
    ctx.fillText(`${virementData.amount} €`, canvas.width / 2, 320);

    // Ligne séparation
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(750, 350);
    ctx.stroke();

    // Détails - Alignement gauche
    ctx.textAlign = 'left';
    let y = 390;

    // Émetteur
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.fillText('ÉMETTEUR', 80, y);
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 14px Arial';
    ctx.fillText(virementData.senderName, 80, y + 20);
    y += 50;

    // Bénéficiaire
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.fillText('BÉNÉFICIAIRE', 80, y);
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 14px Arial';
    ctx.fillText(virementData.beneficiary, 80, y + 20);
    y += 50;

    // Email
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.fillText('EMAIL', 80, y);
    ctx.fillStyle = '#1f2937';
    ctx.font = '14px Arial';
    ctx.fillText(virementData.email, 80, y + 20);
    y += 50;

    // IBAN
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.fillText('IBAN', 80, y);
    ctx.fillStyle = '#1f2937';
    ctx.font = '12px Courier New';
    ctx.fillText(virementData.iban, 80, y + 20);
    y += 50;

    // BIC
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.fillText('CODE BIC/SWIFT', 80, y);
    ctx.fillStyle = '#1f2937';
    ctx.font = '12px Courier New';
    ctx.fillText(virementData.bic, 80, y + 20);
    y += 50;

    // Date
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    ctx.fillText('DATE ET HEURE', 80, y);
    ctx.fillStyle = '#1f2937';
    ctx.font = '14px Arial';
    ctx.fillText(virementData.date, 80, y + 20);
    y += 50;

    // Message si existe
    if (virementData.message) {
      ctx.fillStyle = '#6b7280';
      ctx.font = '11px Arial';
      ctx.fillText('MESSAGE', 80, y);
      ctx.fillStyle = '#1f2937';
      ctx.font = '12px Arial';
      
      // Découper le message en lignes si trop long
      const maxWidth = 640;
      const words = virementData.message.split(' ');
      let line = '';
      let lineY = y + 20;
      
      for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && n > 0) {
          ctx.fillText(line, 80, lineY);
          line = words[n] + ' ';
          lineY += 18;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, 80, lineY);
      y = lineY + 30;
    }

    // Footer
    y += 30;
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, y);
    ctx.lineTo(750, y);
    ctx.stroke();

    ctx.textAlign = 'center';
    ctx.fillStyle = '#6b7280';
    ctx.font = '11px Arial';
    y += 25;
    ctx.fillText('Document généré le ' + new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }), canvas.width / 2, y);
    
    y += 20;
    ctx.fillText('Ce document confirme l\'exécution de votre virement bancaire.', canvas.width / 2, y);
    
    y += 30;
    ctx.font = '9px Arial';
    ctx.fillText('Ce reçu est fourni à titre informatif. En cas de litige, seuls les documents officiels font foi.', canvas.width / 2, y);

    // Convertir en image et télécharger
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Recu_Virement_${virementData.reference}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Effacer l'erreur du champ modifié
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation du bénéficiaire
    if (!formData.beneficiary.trim()) {
      newErrors.beneficiary = 'Le nom du bénéficiaire est requis';
    } else if (formData.beneficiary.trim().length < 3) {
      newErrors.beneficiary = 'Le nom doit contenir au moins 3 caractères';
    }

    // Validation de l'email
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }

    // Validation de l'IBAN
    if (!formData.iban.trim()) {
      newErrors.iban = 'L\'IBAN est requis';
    } else if (!validateIBAN(formData.iban)) {
      newErrors.iban = 'Format d\'IBAN invalide';
    }

    // Validation du BIC
    if (!formData.bic.trim()) {
      newErrors.bic = 'Le code BIC/SWIFT est requis';
    } else if (!validateBIC(formData.bic)) {
      newErrors.bic = 'Format de BIC/SWIFT invalide (8 ou 11 caractères)';
    }

    // Validation du montant
    const amount = parseFloat(formData.amount);
    if (!formData.amount) {
      newErrors.amount = 'Le montant est requis';
    } else if (isNaN(amount) || amount <= 0) {
      newErrors.amount = 'Le montant doit être supérieur à 0';
    } else if (amount > (user?.balance || 0)) {
      newErrors.amount = 'Solde insuffisant';
    }

    // Si des erreurs existent, les afficher
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Envoi de l'email avec EmailJS
    setLoading(true);

    try {
      // Générer une référence unique
      const reference = `VIR${Date.now()}${Math.floor(Math.random() * 1000)}`;
      const transactionDate = new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      // Paramètres du template EmailJS
      const templateParams = {
        from_name: user?.name,
        from_email: user?.email,
        to_name: formData.beneficiary,
        to_email: formData.email,
        amount: amount.toFixed(2),
        iban: formData.iban,
        bic: formData.bic,
        message: formData.message || 'Aucun message',
        date: transactionDate,
        reference: reference
      };

      // Configuration EmailJS - Remplacez par vos vrais identifiants
      const SERVICE_ID = 'YOUR_SERVICE_ID';
      const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
      const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

      // Vérifier si les identifiants sont configurés
      if (SERVICE_ID === 'YOUR_SERVICE_ID' || TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // Mode démo sans EmailJS
        console.log('Mode démo - EmailJS non configuré');
        console.log('Paramètres du virement:', templateParams);
        
        // Simuler un délai d'envoi
        await new Promise(resolve => setTimeout(resolve, 1500));
      } else {
        // Envoi réel avec EmailJS
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );
      }

      // Sauvegarder les données du virement pour le reçu
      const virementData = {
        reference: reference,
        senderName: user?.name,
        beneficiary: formData.beneficiary,
        email: formData.email,
        iban: formData.iban,
        bic: formData.bic,
        amount: amount.toFixed(2),
        message: formData.message,
        date: transactionDate
      };

      // Naviguer vers la page de reçu
      if (onVirementSuccess) {
        onVirementSuccess(virementData);
      }
      navigate('recu');
      
      // Réinitialiser le formulaire
      setFormData({
        beneficiary: '',
        email: '',
        iban: '',
        bic: '',
        amount: '',
        message: ''
      });

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      alert('❌ Erreur lors de l\'envoi de la notification. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  // Bénéficiaires récents
  const recentBeneficiaries = [
    { 
      id: 1, 
      name: 'Sophie Martin', 
      email: 'sophie.martin@example.com',
      iban: 'FR76 3000 4000 0100 0123 4567 657', 
      bic: 'BNPAFRPPXXX',
      avatar: 'SM' 
    },
    { 
      id: 2, 
      name: 'Jean Dupont', 
      email: 'jean.dupont@example.com',
      iban: 'FR89 3000 4000 0200 0234 5678 234', 
      bic: 'BNPAFRPPXXX',
      avatar: 'JD' 
    },
    { 
      id: 3, 
      name: 'Marie Leroux', 
      email: 'marie.leroux@example.com',
      iban: 'FR45 3000 4000 0300 0345 6789 891', 
      bic: 'BNPAFRPPXXX',
      avatar: 'ML' 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('dashboard')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} />
              <span>Retour</span>
            </button>
            <h1 className="text-xl font-bold text-gray-800">Virement</h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Contenu */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-24">
        {/* Solde disponible */}
        <div className="bg-emerald-600 rounded-xl p-6 text-white mb-6 shadow-lg">
          <p className="text-emerald-100 text-sm mb-1">Solde disponible</p>
          <h2 className="text-3xl font-bold">
            {user?.balance?.toLocaleString('fr-FR', { 
              minimumFractionDigits: 2,
              maximumFractionDigits: 2 
            })} €
          </h2>
        </div>

        {/* Bénéficiaires récents */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Bénéficiaires récents</h3>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {recentBeneficiaries.map(beneficiary => (
              <button
                key={beneficiary.id}
                onClick={() => setFormData({ 
                  beneficiary: beneficiary.name,
                  email: beneficiary.email,
                  iban: beneficiary.iban,
                  bic: beneficiary.bic,
                  amount: '',
                  message: ''
                })}
                className="flex flex-col items-center gap-2 min-w-80px hover:opacity-80 transition"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-bold">{beneficiary.avatar}</span>
                </div>
                <span className="text-xs text-gray-600 text-center">{beneficiary.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Formulaire de virement */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Nouveau virement</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Bénéficiaire */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline mr-2" size={16} />
                Bénéficiaire *
              </label>
              <input
                type="text"
                name="beneficiary"
                value={formData.beneficiary}
                onChange={handleChange}
                placeholder="Nom du bénéficiaire"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                  errors.beneficiary ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.beneficiary && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.beneficiary}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline mr-2" size={16} />
                Email du destinataire *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="exemple@email.com"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.email}
                </p>
              )}
            </div>

            {/* IBAN */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <CreditCard className="inline mr-2" size={16} />
                IBAN *
              </label>
              <input
                type="text"
                name="iban"
                value={formData.iban}
                onChange={handleChange}
                placeholder="FR76 3000 4000 0100 0123 4567 890"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-mono ${
                  errors.iban ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.iban && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.iban}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Format: 2 lettres (pays) + 2 chiffres + code bancaire
              </p>
            </div>

            {/* BIC/SWIFT */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building2 className="inline mr-2" size={16} />
                Code BIC/SWIFT *
              </label>
              <input
                type="text"
                name="bic"
                value={formData.bic}
                onChange={handleChange}
                placeholder="BNPAFRPPXXX"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent font-mono uppercase ${
                  errors.bic ? 'border-red-500' : 'border-gray-300'
                }`}
                maxLength="11"
              />
              {errors.bic && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.bic}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                8 ou 11 caractères (ex: BNPAFRPPXXX)
              </p>
            </div>

            {/* Montant */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Euro className="inline mr-2" size={16} />
                Montant *
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                max={user?.balance || 0}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent ${
                  errors.amount ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.amount && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle size={14} />
                  {errors.amount}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Maximum: {user?.balance?.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
              </p>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline mr-2" size={16} />
                Message (optionnel)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Motif du virement"
                rows="3"
                maxLength="140"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              />
              <p className="mt-1 text-xs text-gray-500 text-right">
                {formData.message.length}/140
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 size={20} className="animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Effectuer le virement
                </>
              )}
            </button>
          </form>
        </div>
      </main>

      {/* Navigation inférieure */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="max-w-4xl mx-auto px-2">
          <div className="flex items-center justify-around">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex flex-col items-center gap-1 py-3 px-4 transition ${
                  activeTab === item.id
                    ? 'text-emerald-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <item.icon size={24} />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}