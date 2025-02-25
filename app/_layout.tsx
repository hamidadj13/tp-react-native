import { Stack, usePathname } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';

export default function RootLayout() {
  const pathname = usePathname();

  // Optionnel : Vous pouvez utiliser useEffect pour surveiller les changements de route
  useEffect(() => {
    console.log('Route actuelle :', pathname);
  }, [pathname]);

  return (
    <AuthProvider>
      <Stack>
        {/* Écrans du tableau de bord */}
        <Stack.Screen
          name="(dashboard)"
          options={{
            headerShown: false, // Masquer l'en-tête pour le tableau de bord
          }}
        />

        {/* Écrans d'authentification */}
        <Stack.Screen
          name="auth"
          options={{
            title: 'Connexion', // Titre de l'en-tête pour les écrans d'authentification
            headerStyle: {
              backgroundColor: '#6200ee', // Couleur de fond de l'en-tête
            },
            headerTintColor: '#fff', // Couleur du texte de l'en-tête
            headerTitleStyle: {
              fontWeight: 'bold', // Style du titre
            },
          }}
        />
      </Stack>
    </AuthProvider>
  );
}