// app/_layout.tsx
import { Stack } from 'expo-router';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        {/* Écrans publics (non protégés) */}
        <Stack.Screen
          name="auth/login"
          options={{ title: 'Connexion' }} // Écran de connexion
        />
        <Stack.Screen
          name="auth/register"
          options={{ title: 'Inscription' }} // Écran d'inscription
        />

        {/* Écrans protégés (tableau de bord) */}
        <Stack.Screen
          name="(dashboard)"
          options={{ headerShown: false }} // Cache l'en-tête pour les onglets du tableau de bord
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