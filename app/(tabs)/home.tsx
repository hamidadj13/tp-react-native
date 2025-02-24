// app/(tabs)/home.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';
import NotificationButton from '../../components/NotificationButton';

export default function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Accueil</Text>
      {user ? (
        <>
          <Text>Bienvenue, {user.email}</Text>
          <Link href="/profile" asChild>
            <Button title="Voir le profil" />
          </Link>
          <Button title="Se déconnecter" onPress={logout} />
        </>
      ) : (
        <Link href="/login" asChild>
          <Button title="Se connecter" />
        </Link>
      )}
      <NotificationButton />
    </View>
  );
}