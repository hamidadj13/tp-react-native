import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint, // Couleur active de l'onglet
        headerShown: false, // Masquer l'en-tête
        tabBarButton: HapticTab, // Utiliser un composant personnalisé pour les onglets
        tabBarBackground: TabBarBackground, // Arrière-plan personnalisé de la barre d'onglets
        tabBarStyle: Platform.select({
          ios: {
            // Utiliser un fond transparent sur iOS pour afficher l'effet de flou
            position: 'absolute',
            borderTopWidth: 0, // Supprimer la bordure supérieure
          },
          default: {},
        }),
      }}>
      {/* Onglet Dashboard */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard', // Titre de l'onglet
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, // Icône de l'onglet
        }}
      />

      {/* Onglet Products */}
      <Tabs.Screen
        name="products"
        options={{
          title: 'Products', // Titre de l'onglet
          href: "/products", // Lien vers l'écran des produits
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />, // Icône de l'onglet
        }}
      />

      {/* Onglet Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile', // Titre de l'onglet
          href: "/profile", // Lien vers l'écran du profil
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />, // Icône de l'onglet
        }}
      />
    </Tabs>
  );
}