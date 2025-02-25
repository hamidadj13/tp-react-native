import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Link } from 'expo-router';
import { useAuth } from '../../contexts/AuthContext';
import NotificationButton from '../../components/NotificationButton';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { HelloWave } from '@/components/HelloWave';
import { useRouter } from 'expo-router';

export default function DashboardScreen() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleProfileNavigation = () => router.push('/profile');
  const handleLoginNavigation = () => router.push('/auth/login');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome ESTIAM!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">1- Home Page</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">2- Products Page</ThemedText>
        <Link href="/products" asChild>
          <Button title="Voir les produits" />
        </Link>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">3- Profile Page</ThemedText>
        
        {user ? (
          <>
            <Text style={styles.userText}>Bienvenue, {user.email} 👋</Text>
            <Button title="Voir le profil" onPress={handleProfileNavigation} />
            <Button title="Se déconnecter" color="red" onPress={logout} />
          </>
        ) : (
          <Button title="Se connecter" onPress={handleLoginNavigation} />
        )}
      </ThemedView>

      <NotificationButton />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  userText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
