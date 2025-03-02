// contexts/AuthContext.tsx
import React, { createContext, useEffect, useState, useContext } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshUser: () => Promise<void>;
  isAuthenticated: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync('access_token');
      if (token) {
        await fetchUserProfile(token);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const fetchUserProfile = async (token: string) => {
    try {
      const response = await axios.get('https://reqres.in/api/users/1'); // Simule la récupération du profil utilisateur
      const userData = response.data.data;
      setUser(userData);
    } catch (error) {
      console.log('Error fetching user profile: ', error);
      logout();
    }
  };

  const refreshUser = async () => {
    const token = await SecureStore.getItemAsync('access_token');
    if (token) {
      await fetchUserProfile(token);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });
      const { token } = response.data;
      await SecureStore.setItemAsync('access_token', token);
      await fetchUserProfile(token);
      router.replace('/(dashboard)/home'); // Redirige vers l'écran d'accueil
    } catch (error) {
      console.log('Login failed: ', error);
      throw new Error('Échec de la connexion. Veuillez réessayer.');
    }
  };

  const register = async (email: string, password: string) => {
    try {
      const response = await axios.post('https://reqres.in/api/register', {
        email,
        password,
      });
      const { token } = response.data;
      await SecureStore.setItemAsync('access_token', token);
      await fetchUserProfile(token);
      router.replace('/auth/login'); // Redirige vers l'écran de connexion
    } catch (error) {
      console.log('Registration failed: ', error);
      throw new Error('Échec de l\'inscription. Veuillez réessayer.');
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('access_token');
    setUser(null);
    router.replace('/auth/login');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        refreshUser,
        isAuthenticated: !!user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
};