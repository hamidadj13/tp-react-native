import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { Button } from 'react-native';

export default function AuthLayout() {
  const renderHeaderLeft = useCallback(() => {
    return (
      <Button
        title="Retour"
        onPress={() => {}} // Will be handled by the default back behavior
      />
    );
  }, []);

  return (
    <Stack>
      {/* Écran de connexion */}
      <Stack.Screen
        name="login"
        options={{
          title: 'Connexion',
          headerLeft: renderHeaderLeft,
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      {/* Écran d'inscription */}
      <Stack.Screen
        name="register"
        options={{
          title: 'Inscription',
          headerLeft: renderHeaderLeft,
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack>
  );
}