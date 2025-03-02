import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../../contexts/AuthContext';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accueil</Text>

      {user ? (
        <>
          <Text style={styles.welcomeText}>Bienvenue, {user.email} 👋</Text>

          {/* Bouton Profil */}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/profile')}>
            <Ionicons name="person-circle-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>Voir le profil</Text>
          </TouchableOpacity>

          {/* Bouton Déconnexion */}
          <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={logout}>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>Se déconnecter</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          {/* Bouton Connexion */}
          <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/login')}>
            <Ionicons name="log-in-outline" size={24} color="#fff" />
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 15,
    shadowColor: '#6200ee',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logoutButton: {
    backgroundColor: '#ff4444',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
