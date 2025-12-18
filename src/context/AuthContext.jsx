// context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import UserService from '../services/UserService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Vérifier si l'utilisateur est déjà connecté au chargement
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        
        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Erreur lors de la vérification de l\'authentification:', err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Connexion
  const login = async (username, password) => {
    try {
      setLoading(true);
      setError(null);

      // Appel au UserService pour authentifier
      const userData = await UserService.authenticate(username, password);
      
      // Génération d'un token simulé
      const token = btoa(JSON.stringify({ 
        userId: userData.id, 
        timestamp: Date.now() 
      }));

      // Sauvegarde dans le state et localStorage
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      localStorage.setItem('token', token);

      return { success: true, user: userData };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Déconnexion
  const logout = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  // Inscription
  const register = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const newUser = await UserService.createUser(userData);
      
      // Connexion automatique après inscription
      const token = btoa(JSON.stringify({ 
        userId: newUser.id, 
        timestamp: Date.now() 
      }));

      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('token', token);

      return { success: true, user: newUser };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Mise à jour du profil
  const updateProfile = async (updates) => {
    try {
      setLoading(true);
      setError(null);

      const updatedUser = await UserService.updateUser(user.id, updates);
      
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));

      return { success: true, user: updatedUser };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Changer le mot de passe
  const changePassword = async (oldPassword, newPassword) => {
    try {
      setLoading(true);
      setError(null);

      await UserService.changePassword(user.id, oldPassword, newPassword);

      return { success: true };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    register,
    updateProfile,
    changePassword,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};

export default AuthContext;