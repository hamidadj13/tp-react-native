// app/register.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Link, router } from 'expo-router';
import axios from 'axios';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('https://jsonplaceholder.typicode.com/users', { email, password });
      Alert.alert('Succès', 'Inscription réussie !');
      router.replace('/login'); // Redirige vers l'écran de connexion
    } catch (error) {
      Alert.alert('Erreur', 'Échec de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Inscription</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <TextInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ marginBottom: 10, padding: 10, borderWidth: 1, borderColor: '#ccc' }}
      />
      <Button title="S'inscrire" onPress={handleRegister} />
      <Link href="/login" asChild>
        <Text style={{ marginTop: 10, color: 'blue' }}>Déjà un compte ? Connectez-vous</Text>
      </Link>
    </View>
  );
}