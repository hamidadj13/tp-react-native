// app/auth/login.tsx
import React, { useState } from 'react';
import {
  TouchableWithoutFeedback,
  TouchableOpacity, StyleSheet, Text, TextInput, View, Keyboard,
  KeyboardAvoidingView, Platform
} from 'react-native';
import { useAuth } from '@/contexts/AuthContext';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    setError('');

    try {
      // Appel à l'API pour récupérer tous les utilisateurs
      const response = await fetch('https://fakestoreapi.com/users');
      const users = await response.json();

      // Trouve l'utilisateur correspondant à l'email et au mot de passe
      const user = users.find(
        (u: any) => u.email === email && u.password === password
      );

      if (user) {
        // Simule une connexion réussie
        login(user);
        router.replace('/(dashboard)/home'); // Redirige vers l'écran d'accueil
      } else {
        setError('Email ou mot de passe incorrect.');
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setError('Échec de la connexion. Veuillez réessayer.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Connexion</Text>

          {/* Champ Email */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Entrez votre email"
              value={email}
              style={styles.input}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Champ Mot de passe */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Entrez votre mot de passe"
              value={password}
              style={styles.input}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          {/* Message d'erreur */}
          {error ? <Text style={styles.error}>{error}</Text> : null}

          {/* Bouton de connexion */}
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Se connecter</Text>
          </TouchableOpacity>

          {/* Lien vers l'inscription */}
          <Link href="/auth/register" asChild>
            <Text style={styles.link}>Pas de compte ? Inscrivez-vous</Text>
          </Link>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 35,
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#6200ee',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#6200ee',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 14,
  },
  link: {
    color: '#6200ee',
    fontSize: 16,
    fontWeight: 'bold',
  },
});