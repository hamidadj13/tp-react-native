// app/profile.tsx
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import { useAuth } from '../contexts/AuthContext';

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    Alert.alert('Déconnexion', 'Vous avez été déconnecté avec succès.');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Profil</Text>
      {user ? (
        <>
          <Text>Email: {user.email}</Text>
          <Button title="Se déconnecter" onPress={handleLogout} />
        </>
      ) : (
        <Text>Vous n'êtes pas connecté.</Text>
      )}
    </View>
  );
}