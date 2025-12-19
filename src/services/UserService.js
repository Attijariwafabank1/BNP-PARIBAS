// services/UserService.js

// ============================================
// MODE DÉVELOPPEMENT
// Changez à true pour activer les logs détaillés
// ============================================
const DEV_MODE = true;

class UserService {
  constructor() {
    if (DEV_MODE) console.log('🔧 UserService initialisé en mode DEV');
    
    this.users = [
      { 
        id: 1, 
        username: '07014860451', 
        password: '260823', 
        name: 'Delphine Broussard', 
        email: 'tendrea447@gmail.com',
        phone: '+33 07 74 52 52 87',
        accountNumber: '20250000002',
        country: 'France',
        city: 'Brest',
        location: 'Brest, France',
        manager: 'Lucien Vollet',
        balance: 3500000.00,
        isBlocked: false,
        unlockFee: 25000.00,
        blockReason: 'Frais de maintenance annuels',
        rib: {
          iban: 'FR76 3000 5000 0102 0123 4567 880',
          bankCode: '30004',
          branchCode: '00001',
          accountNumber: '00123456789',
          key: '80'
        },
        cards: [
          {
            id: 1,
            type: 'Visa Premier',
            cardNumber: '4532 0001 7892 2345',
            maskedNumber: '4532 **** **** 1235',
            cvv: '123',
            expiryDate: '10/27',
            status: 'active',
            dailyWithdrawalLimit: 500,
            weeklyPaymentLimit: 2000,
            internationalPaymentEnabled: true,
            issueDate: '12/2022',
            cardHolder: 'Delphine Broussard'
          }
        ],
        accounts: [
          {
            id: 1,
            type: 'Compte Courant',
            number: 'N°*******2284',
            balance: 3500000.00,
            icon: 'wallet'
          },
          {
            id: 2,
            type: 'Livret A',
            number: 'N°*******5462',
            balance: 30000.40,
            icon: 'piggybank'
          },
          {
            id: 3,
            type: 'Plan Épargne',
            number: 'N°*******8891',
            balance: 50000.17,
            icon: 'trending'
          }
        ],
        transactions: [
          {
            id: 1,
            type: 'Virement entrant',
            date: '14 Déc 2024',
            reference: 'IE28 *** 513',
            amount: 40000.00,
            isCredit: true
          },
          {
            id: 2,
            type: 'Achat carte',
            date: '14 Déc 2024',
            reference: 'CARREFOUR BREST',
            amount: 85.50,
            isCredit: false
          },
          {
            id: 3,
            type: 'Virement sortant',
            date: '13 Déc 2024',
            reference: 'FR76 *** 657',
            amount: 1200.00,
            isCredit: false
          },
          {
            id: 4,
            type: 'Virement entrant',
            date: '12 Déc 2024',
            reference: 'US45 *** 234',
            amount: 3000.00,
            isCredit: true
          },
          {
            id: 5,
            type: 'Achat carte',
            date: '11 Déc 2024',
            reference: 'UBER PARIS',
            amount: 45.20,
            isCredit: false
          },
          {
            id: 6,
            type: 'Retrait ATM',
            date: '10 Déc 2024',
            reference: 'ATM BNP PARIS 15',
            amount: 100.00,
            isCredit: false
          },
          {
            id: 7,
            type: 'Virement entrant',
            date: '08 Déc 2024',
            reference: 'FR45 *** 891',
            amount: 500.00,
            isCredit: true
          },
          {
            id: 8,
            type: 'Achat carte',
            date: '07 Déc 2024',
            reference: 'FNAC PARIS',
            amount: 156.80,
            isCredit: false
          },
          {
            id: 9,
            type: 'Retrait ATM',
            date: '05 Déc 2024',
            reference: 'ATM BNP GARE LYON',
            amount: 200.00,
            isCredit: false
          },
          {
            id: 10,
            type: 'Achat carte',
            date: '03 Déc 2024',
            reference: 'AMAZON FRANCE',
            amount: 67.99,
            isCredit: false
          }
        ],
        expenses: {
          month: 'Décembre 2024',
          categories: [
            { name: 'Logement', value: 45, color: '#3B82F6' },
            { name: 'Alimentation', value: 25, color: '#10B981' },
            { name: 'Transport', value: 10, color: '#F97316' },
            { name: 'Loisirs', value: 12, color: '#6366F1' },
            { name: 'Autres', value: 8, color: '#D1D5DB' }
          ]
        },
        chequier: 5,
        virementRapide: 10,
        virementProgramme: 3
      },
      { 
        id: 1, 
        username: '01234567890', 
        password: '123456', 
        name: 'Marie-Françoise Boignon', 
        email: 'demo@example.com',
        phone: '+33 07 00 00 00 00',
        accountNumber: '20250000001',
        country: 'France',
        city: 'Paris',
        location: 'Paris, France',
        manager: 'Charles Fortunato',
        balance: 987000.00,
        isBlocked: true,
        unlockFee: 25000.00,
        blockReason: 'Frais de maintenance annuels',
        rib: {
          iban: 'FR76 3000 4000 0100 0123 4567 890',
          bankCode: '30004',
          branchCode: '00001',
          accountNumber: '00123456789',
          key: '90'
        },
        cards: [
          {
            id: 1,
            type: 'Visa Premier',
            cardNumber: '4532 0001 7892 1235',
            maskedNumber: '4532 **** **** 1235',
            cvv: '123',
            expiryDate: '12/27',
            status: 'active',
            dailyWithdrawalLimit: 500,
            weeklyPaymentLimit: 2000,
            internationalPaymentEnabled: true,
            issueDate: '12/2022',
            cardHolder: 'MARIE-FRANCOISE BOIGNON'
          }
        ],
        accounts: [
          {
            id: 1,
            type: 'Compte Courant',
            number: 'N°*******2284',
            balance: 987000.00,
            icon: 'wallet'
          },
          {
            id: 2,
            type: 'Livret A',
            number: 'N°*******5462',
            balance: 0.00,
            icon: 'piggybank'
          },
          {
            id: 3,
            type: 'Plan Épargne',
            number: 'N°*******8891',
            balance: 0.00,
            icon: 'trending'
          }
        ],
        transactions: [
          {
            id: 1,
            type: 'Virement entrant',
            date: '15 Déc 2024',
            reference: 'IE28 *** 513',
            amount: 40000.00,
            isCredit: true
          },
          {
            id: 2,
            type: 'Achat carte',
            date: '14 Déc 2024',
            reference: 'CARREFOUR PARIS',
            amount: 85.50,
            isCredit: false
          },
          {
            id: 3,
            type: 'Virement sortant',
            date: '13 Déc 2024',
            reference: 'FR76 *** 657',
            amount: 1200.00,
            isCredit: false
          },
          {
            id: 4,
            type: 'Virement entrant',
            date: '12 Déc 2024',
            reference: 'US45 *** 234',
            amount: 3000.00,
            isCredit: true
          },
          {
            id: 5,
            type: 'Achat carte',
            date: '11 Déc 2024',
            reference: 'UBER PARIS',
            amount: 45.20,
            isCredit: false
          },
          {
            id: 6,
            type: 'Retrait ATM',
            date: '10 Déc 2024',
            reference: 'ATM BNP PARIS 15',
            amount: 100.00,
            isCredit: false
          },
          {
            id: 7,
            type: 'Virement entrant',
            date: '08 Déc 2024',
            reference: 'FR45 *** 891',
            amount: 500.00,
            isCredit: true
          },
          {
            id: 8,
            type: 'Achat carte',
            date: '07 Déc 2024',
            reference: 'FNAC PARIS',
            amount: 156.80,
            isCredit: false
          },
          {
            id: 9,
            type: 'Retrait ATM',
            date: '05 Déc 2024',
            reference: 'ATM BNP GARE LYON',
            amount: 200.00,
            isCredit: false
          },
          {
            id: 10,
            type: 'Achat carte',
            date: '03 Déc 2024',
            reference: 'AMAZON FRANCE',
            amount: 67.99,
            isCredit: false
          }
        ],
        expenses: {
          month: 'Décembre 2024',
          categories: [
            { name: 'Logement', value: 45, color: '#3B82F6' },
            { name: 'Alimentation', value: 25, color: '#10B981' },
            { name: 'Transport', value: 10, color: '#F97316' },
            { name: 'Loisirs', value: 12, color: '#6366F1' },
            { name: 'Autres', value: 8, color: '#D1D5DB' }
          ]
        },
        chequier: 5,
        virementRapide: 10,
        virementProgramme: 3
      },
      { 
        id: 2, 
        username: '09876543210', 
        password: '654321', 
        name: 'Jean-Pierre Dupont', 
        email: 'client@example.com',
        phone: '+225 07 11 11 11 11',
        accountNumber: '20250000002',
        country: 'Côte d\'Ivoire',
        city: 'Abidjan',
        location: 'Abidjan, Côte d\'Ivoire',
        manager: 'Sophie Martin',
        balance: 456789.50,
        isBlocked: true,
        unlockFee: 15000.00,
        blockReason: 'Validation de documents en attente',
        rib: {
          iban: 'FR76 3000 4000 0200 0234 5678 901',
          bankCode: '30004',
          branchCode: '00002',
          accountNumber: '00234567890',
          key: '01'
        },
        cards: [
          {
            id: 1,
            type: 'Visa Premier',
            cardNumber: '4532 0002 3456 1236',
            maskedNumber: '4532 **** **** 1236',
            cvv: '456',
            expiryDate: '09/26',
            status: 'active',
            dailyWithdrawalLimit: 500,
            weeklyPaymentLimit: 2000,
            internationalPaymentEnabled: true,
            issueDate: '09/2021',
            cardHolder: 'JEAN-PIERRE DUPONT'
          }
        ],
        accounts: [
          {
            id: 1,
            type: 'Compte Courant',
            number: 'N°*******3345',
            balance: 456789.50,
            icon: 'wallet'
          },
          {
            id: 2,
            type: 'Livret A',
            number: 'N°*******7823',
            balance: 12500.00,
            icon: 'piggybank'
          },
          {
            id: 3,
            type: 'Plan Épargne',
            number: 'N°*******9012',
            balance: 35000.00,
            icon: 'trending'
          }
        ],
        transactions: [
          {
            id: 1,
            type: 'Virement entrant',
            date: '16 Déc 2024',
            reference: 'CI89 *** 234',
            amount: 25000.00,
            isCredit: true
          },
          {
            id: 2,
            type: 'Achat carte',
            date: '15 Déc 2024',
            reference: 'SOCOCE ABIDJAN',
            amount: 12500.00,
            isCredit: false
          },
          {
            id: 3,
            type: 'Retrait ATM',
            date: '14 Déc 2024',
            reference: 'ATM BNP PLATEAU',
            amount: 50000.00,
            isCredit: false
          },
          {
            id: 4,
            type: 'Virement entrant',
            date: '13 Déc 2024',
            reference: 'FR45 *** 891',
            amount: 5000.00,
            isCredit: true
          },
          {
            id: 5,
            type: 'Achat carte',
            date: '12 Déc 2024',
            reference: 'RESTAURANT COCODY',
            amount: 8500.00,
            isCredit: false
          },
          {
            id: 6,
            type: 'Virement sortant',
            date: '11 Déc 2024',
            reference: 'CI23 *** 456',
            amount: 30000.00,
            isCredit: false
          },
          {
            id: 7,
            type: 'Achat carte',
            date: '10 Déc 2024',
            reference: 'CARREFOUR MARCORY',
            amount: 15600.00,
            isCredit: false
          },
          {
            id: 8,
            type: 'Retrait ATM',
            date: '09 Déc 2024',
            reference: 'ATM BNP YOPOUGON',
            amount: 25000.00,
            isCredit: false
          },
          {
            id: 9,
            type: 'Virement entrant',
            date: '08 Déc 2024',
            reference: 'US78 *** 123',
            amount: 10000.00,
            isCredit: true
          },
          {
            id: 10,
            type: 'Achat carte',
            date: '07 Déc 2024',
            reference: 'JUMIA ABIDJAN',
            amount: 5500.00,
            isCredit: false
          }
        ],
        expenses: {
          month: 'Décembre 2024',
          categories: [
            { name: 'Logement', value: 35, color: '#3B82F6' },
            { name: 'Alimentation', value: 30, color: '#10B981' },
            { name: 'Transport', value: 15, color: '#F97316' },
            { name: 'Loisirs', value: 10, color: '#6366F1' },
            { name: 'Autres', value: 10, color: '#D1D5DB' }
          ]
        },
        chequier: 3,
        virementRapide: 8,
        virementProgramme: 2
      }
    ];

    this.managers = [
      'Charles Fortunato',
      'Sophie Martin',
      'Pierre Dubois',
      'Marie Lefebvre',
      'Thomas Bernard',
      'Claire Rousseau'
    ];
  }

  generateIBAN(userId) {
    const countryCode = 'FR';
    const checkDigits = String(Math.floor(Math.random() * 90) + 10);
    const bankCode = '30004';
    const branchCode = String(10000 + userId).padStart(5, '0');
    const accountNumber = String(Math.floor(Math.random() * 100000000000)).padStart(11, '0');
    const key = String(Math.floor(Math.random() * 90) + 10);
    
    const iban = `${countryCode}${checkDigits} ${bankCode} ${branchCode} ${accountNumber} ${key}`;
    
    if (DEV_MODE) console.log('📋 IBAN généré:', iban);
    
    return {
      iban: iban,
      bankCode: bankCode,
      branchCode: branchCode,
      accountNumber: accountNumber,
      key: key
    };
  }

  generateCardNumber(userId, cardId) {
    const randomPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const lastFour = String(1234 + userId + cardId).padStart(4, '0');
    const cardNumber = `4532 ${String(userId).padStart(4, '0')} ${randomPart} ${lastFour}`;
    
    if (DEV_MODE) console.log('💳 Carte générée:', cardNumber);
    
    return cardNumber;
  }

  assignRandomManager() {
    const manager = this.managers[Math.floor(Math.random() * this.managers.length)];
    if (DEV_MODE) console.log('👤 Gestionnaire assigné:', manager);
    return manager;
  }

  async authenticate(username, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('🔐 Tentative connexion:', username);
        
        if (!username || !password) {
          if (DEV_MODE) console.error('❌ Identifiant ou mot de passe manquant');
          reject(new Error('Identifiant et mot de passe requis'));
          return;
        }

        if (!/^\d{11}$/.test(username)) {
          if (DEV_MODE) console.error('❌ Format identifiant invalide');
          reject(new Error('L\'identifiant doit contenir exactement 11 chiffres'));
          return;
        }

        if (!/^\d+$/.test(password)) {
          if (DEV_MODE) console.error('❌ Format mot de passe invalide');
          reject(new Error('Le mot de passe doit contenir uniquement des chiffres'));
          return;
        }

        const user = this.users.find(
          u => u.username === username && u.password === password
        );

        if (user) {
          if (DEV_MODE) console.log('✅ Connexion réussie:', user.name);
          const { password, ...userWithoutPassword } = user;
          resolve(userWithoutPassword);
        } else {
          if (DEV_MODE) console.error('❌ Identifiants incorrects');
          reject(new Error('Identifiant ou mot de passe incorrect'));
        }
      }, 1000);
    });
  }

  async getUserById(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('👤 Récupération utilisateur ID:', userId);
        
        const user = this.users.find(u => u.id === userId);
        
        if (user) {
          if (DEV_MODE) console.log('✅ Utilisateur trouvé:', user.name);
          const { password, ...userWithoutPassword } = user;
          resolve(userWithoutPassword);
        } else {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
        }
      }, 500);
    });
  }

  async getUserCards(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('💳 Récupération cartes utilisateur ID:', userId);
        
        const user = this.users.find(u => u.id === userId);
        
        if (user) {
          if (DEV_MODE) console.log('✅ Cartes trouvées:', user.cards.length);
          resolve(user.cards || []);
        } else {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
        }
      }, 500);
    });
  }

  async toggleCardStatus(userId, cardId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('🔄 Toggle statut carte:', userId, cardId);
        
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
          return;
        }

        const card = user.cards.find(c => c.id === cardId);
        
        if (!card) {
          if (DEV_MODE) console.error('❌ Carte non trouvée');
          reject(new Error('Carte non trouvée'));
          return;
        }

        card.status = card.status === 'active' ? 'blocked' : 'active';
        if (DEV_MODE) console.log('✅ Nouveau statut:', card.status);
        resolve(card);
      }, 1000);
    });
  }

  async updateCardLimits(userId, cardId, limits) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('💰 Mise à jour plafonds:', userId, cardId, limits);
        
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
          return;
        }

        const card = user.cards.find(c => c.id === cardId);
        
        if (!card) {
          if (DEV_MODE) console.error('❌ Carte non trouvée');
          reject(new Error('Carte non trouvée'));
          return;
        }

        if (limits.dailyWithdrawalLimit !== undefined) {
          card.dailyWithdrawalLimit = limits.dailyWithdrawalLimit;
        }
        
        if (limits.weeklyPaymentLimit !== undefined) {
          card.weeklyPaymentLimit = limits.weeklyPaymentLimit;
        }

        if (DEV_MODE) console.log('✅ Plafonds mis à jour');
        resolve(card);
      }, 500);
    });
  }

  async toggleInternationalPayment(userId, cardId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('🌍 Toggle paiements internationaux:', userId, cardId);
        
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
          return;
        }

        const card = user.cards.find(c => c.id === cardId);
        
        if (!card) {
          if (DEV_MODE) console.error('❌ Carte non trouvée');
          reject(new Error('Carte non trouvée'));
          return;
        }

        card.internationalPaymentEnabled = !card.internationalPaymentEnabled;
        if (DEV_MODE) console.log('✅ Paiements internationaux:', card.internationalPaymentEnabled);
        resolve(card);
      }, 500);
    });
  }

  async orderNewCard(userId, cardType = 'Visa Premier') {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('🆕 Commande nouvelle carte:', userId, cardType);
        
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
          return;
        }

        const newCardId = user.cards.length + 1;
        const cardNumber = this.generateCardNumber(userId, newCardId);
        const lastFour = cardNumber.slice(-4);
        
        const newCard = {
          id: newCardId,
          type: cardType,
          cardNumber: cardNumber,
          maskedNumber: `4532 **** **** ${lastFour}`,
          cvv: Math.floor(100 + Math.random() * 900).toString(),
          expiryDate: '12/29',
          status: 'active',
          dailyWithdrawalLimit: 500,
          weeklyPaymentLimit: 2000,
          internationalPaymentEnabled: false,
          issueDate: new Date().toLocaleDateString('fr-FR', { month: '2-digit', year: 'numeric' }),
          cardHolder: user.name.toUpperCase()
        };

        user.cards.push(newCard);
        if (DEV_MODE) console.log('✅ Carte créée:', newCard);
        resolve(newCard);
      }, 2000);
    });
  }

  async unlockAccount(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('🔓 Déblocage compte:', userId);
        
        const userIndex = this.users.findIndex(u => u.id === userId);
        
        if (userIndex !== -1) {
          this.users[userIndex].isBlocked = false;
          this.users[userIndex].unlockFee = 0;
          this.users[userIndex].blockReason = null;
          
          if (DEV_MODE) console.log('✅ Compte débloqué');
          const { password, ...userWithoutPassword } = this.users[userIndex];
          resolve(userWithoutPassword);
        } else {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
        }
      }, 1000);
    });
  }

  async updateUser(userId, updates) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('📝 Mise à jour profil:', userId, updates);
        
        const userIndex = this.users.findIndex(u => u.id === userId);
        
        if (userIndex !== -1) {
          this.users[userIndex] = { ...this.users[userIndex], ...updates };
          if (DEV_MODE) console.log('✅ Profil mis à jour');
          const { password, ...userWithoutPassword } = this.users[userIndex];
          resolve(userWithoutPassword);
        } else {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
        }
      }, 500);
    });
  }

  async createUser(userData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('🆕 Création utilisateur:', userData.username);
        
        if (!/^\d{11}$/.test(userData.username)) {
          if (DEV_MODE) console.error('❌ Format identifiant invalide');
          reject(new Error('L\'identifiant doit contenir exactement 11 chiffres'));
          return;
        }

        if (!/^\d+$/.test(userData.password)) {
          if (DEV_MODE) console.error('❌ Format mot de passe invalide');
          reject(new Error('Le mot de passe doit contenir uniquement des chiffres'));
          return;
        }

        if (userData.password.length < 6) {
          if (DEV_MODE) console.error('❌ Mot de passe trop court');
          reject(new Error('Le mot de passe doit contenir au moins 6 chiffres'));
          return;
        }

        const existingUser = this.users.find(
          u => u.username === userData.username || u.email === userData.email
        );

        if (existingUser) {
          if (DEV_MODE) console.error('❌ Utilisateur déjà existant');
          reject(new Error('Un utilisateur avec cet identifiant ou email existe déjà'));
          return;
        }

        const newUserId = this.users.length + 1;
        const accountNumber = `2025${String(newUserId).padStart(7, '0')}`;
        const rib = this.generateIBAN(newUserId);
        const manager = this.assignRandomManager();
        
        const cardNumber = this.generateCardNumber(newUserId, 1);
        const lastFour = cardNumber.slice(-4);
        const initialCard = {
          id: 1,
          type: 'Visa Premier',
          cardNumber: cardNumber,
          maskedNumber: `4532 **** **** ${lastFour}`,
          cvv: Math.floor(100 + Math.random() * 900).toString(),
          expiryDate: '12/29',
          status: 'active',
          dailyWithdrawalLimit: 0,
          weeklyPaymentLimit: 0,
          internationalPaymentEnabled: false,
          issueDate: new Date().toLocaleDateString('fr-FR', { month: '2-digit', year: 'numeric' }),
          cardHolder: userData.name.toUpperCase()
        };

        const location = userData.city && userData.country 
          ? `${userData.city}, ${userData.country}`
          : userData.country || 'Non renseigné';

        const newUser = {
          id: newUserId,
          username: userData.username,
          password: userData.password,
          name: userData.name,
          email: userData.email,
          phone: userData.phone || '',
          country: userData.country || '',
          city: userData.city || '',
          location: location,
          accountNumber: accountNumber,
          manager: manager,
          balance: 0.00,
          isBlocked: false,
          unlockFee: 0,
          rib: rib,
          cards: [initialCard],
          accounts: [
            {
              id: 1,
              type: 'Compte Courant',
              number: `N°*******${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
              balance: 0.00,
              icon: 'wallet'
            },
            {
              id: 2,
              type: 'Livret A',
              number: `N°*******${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
              balance: 0.00,
              icon: 'piggybank'
            },
            {
              id: 3,
              type: 'Plan Épargne',
              number: `N°*******${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
              balance: 0.00,
              icon: 'trending'
            }
          ],
          transactions: [],
          expenses: {
            month: new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }),
            categories: [
              { name: 'Logement', value: 0, color: '#3B82F6' },
              { name: 'Alimentation', value: 0, color: '#10B981' },
              { name: 'Transport', value: 0, color: '#F97316' },
              { name: 'Loisirs', value: 0, color: '#6366F1' },
              { name: 'Autres', value: 0, color: '#D1D5DB' }
            ]
          },
          chequier: 0,
          virementRapide: 0,
          virementProgramme: 0
        };

        this.users.push(newUser);
        if (DEV_MODE) console.log('✅ Utilisateur créé:', newUser.name);
        const { password, ...userWithoutPassword } = newUser;
        resolve(userWithoutPassword);
      }, 1000);
    });
  }

  async changePassword(userId, oldPassword, newPassword) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (DEV_MODE) console.log('🔑 Changement mot de passe:', userId);
        
        const user = this.users.find(u => u.id === userId);
        
        if (!user) {
          if (DEV_MODE) console.error('❌ Utilisateur non trouvé');
          reject(new Error('Utilisateur non trouvé'));
          return;
        }

        if (user.password !== oldPassword) {
          if (DEV_MODE) console.error('❌ Ancien mot de passe incorrect');
          reject(new Error('Ancien mot de passe incorrect'));
          return;
        }

        if (!/^\d+$/.test(newPassword)) {
          if (DEV_MODE) console.error('❌ Format mot de passe invalide');
          reject(new Error('Le mot de passe doit contenir uniquement des chiffres'));
          return;
        }

        if (newPassword.length < 6) {
          if (DEV_MODE) console.error('❌ Mot de passe trop court');
          reject(new Error('Le mot de passe doit contenir au moins 6 chiffres'));
          return;
        }

        user.password = newPassword;
        if (DEV_MODE) console.log('✅ Mot de passe changé');
        resolve({ success: true, message: 'Mot de passe modifié avec succès' });
      }, 500);
    });
  }
}

export default new UserService();