// contexts/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface User {
  id: number;
  email: string;
  username: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  register: (user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (user: User) => {
    setUser(user); // Simule une connexion réussie
  };

  const register = (user: User) => {
    setUser(user); // Simule une inscription réussie
  };

  const logout = () => {
    setUser(null); // Déconnecte l'utilisateur
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans un AuthProvider');
  }
  return context;
};