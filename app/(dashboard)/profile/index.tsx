import React from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../../../contexts/AuthContext';
import { useRouter } from 'expo-router';
import { Card, Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    Alert.alert('Déconnexion', 'Vous avez été déconnecté avec succès.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          {user ? (
            <>
              <Avatar.Text
                size={64}
                label={user.email.charAt(0).toUpperCase()}
                style={styles.avatar}
              />
              <Text style={styles.title}>Bonjour, {user.email}</Text>
              <TouchableOpacity style={styles.buttonLogout} onPress={handleLogout}>
                <Text style={styles.buttonText}>Se déconnecter</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.title}>Vous n'êtes pas connecté</Text>
              <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/login')}>
                <Text style={styles.buttonText}>Connexion</Text>
              </TouchableOpacity>
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
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonLogout: {
    backgroundColor: '#ff3b30',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
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

