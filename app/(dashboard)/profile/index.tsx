// app/(dashboard)/profile/index.tsx
import React, { useEffect } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'expo-router';
import { Card, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { user, logout, refreshUser, loading } = useAuth(); // Ajout de `loading`
  const router = useRouter();

  useEffect(() => {
    refreshUser(); // Récupérer les infos utilisateur à jour
  }, []);

  const handleLogout = () => {
    Alert.alert('Déconnexion', 'Êtes-vous sûr de vouloir vous déconnecter ?', [
      { text: 'Annuler', style: 'cancel' },
      { text: 'Se déconnecter', onPress: () => logout() },
    ]);
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          {user ? (
            <>
              {/* Avatar avec la première lettre du prénom */}
              <Avatar.Text
                size={64}
                label={user.first_name.charAt(0).toUpperCase()}
                style={styles.avatar}
              />
              <Text style={styles.title}>Bonjour, {user.first_name} 👋</Text>
              <Text style={styles.subtitle}>{user.email}</Text>

              {/* Bouton de déconnexion */}
              <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
                <Text style={styles.buttonText}>Se déconnecter</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* Si l'utilisateur n'est pas connecté */}
              <Text style={styles.title}>Vous n'êtes pas connecté</Text>

              {/* Bouton de connexion */}
              <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/login')}>
                <Text style={styles.buttonText}>Connexion</Text>
              </TouchableOpacity>

              {/* Bouton d'inscription */}
              <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push('/auth/register')}>
                <Text style={styles.buttonTextSecondary}>Inscription</Text>
              </TouchableOpacity>
            </>
          )}
        </Card.Content>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  card: {
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  avatar: {
    alignSelf: 'center',
    marginBottom: 15,
    backgroundColor: '#007AFF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonLogout: {
    backgroundColor: '#ff3b30',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#ff3b30',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});