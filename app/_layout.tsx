// app/_layout.tsx
import { Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Écrans publics (non protégés) */}
        <Stack.Screen
          name="auth"
          options={{ headerShown: false }} // Les headers seront gérés par le layout des routes auth
        />
        {/* Écrans protégés (tableau de bord) */}
        <Stack.Screen
          name="(dashboard)"
          options={{ headerShown: false }} // Cache l'en-tête pour les onglets du tableau de bord
        />
        {/* Page d'index qui redirige selon l'état d'authentification */}
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        {/* Écran 404 */}
        <Stack.Screen
          name="+not-found"
          options={{ title: '404' }} // Écran 404
        />
      </Stack>
    </AuthProvider>
  );
}