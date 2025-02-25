// app/_layout.tsx
import { Stack, usePathname } from 'expo-router';
import { useEffect } from 'react';
import { AuthProvider } from '../contexts/AuthContext';

  
export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
        <Stack.Screen name="auth" options={{ title: 'Connexion' }} />
      </Stack>
    </AuthProvider>
  );
}