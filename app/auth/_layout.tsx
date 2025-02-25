import { Stack, useNavigation } from 'expo-router';
import { Button } from 'react-native';

export default function AuthLayout() {
  const navigation = useNavigation();

  return (
    <Stack>
      {/* Écran de connexion */}
      <Stack.Screen
        name="login"
        options={{
          title: 'Connexion', // Titre de l'écran
          headerLeft: () => (
            <Button
              title="Retour"
              onPress={() => navigation.goBack()} // Retour à l'écran précédent
            />
          ),
          headerStyle: {
            backgroundColor: '#6200ee', // Couleur de fond de l'en-tête
          },
          headerTintColor: '#fff', // Couleur du texte de l'en-tête
          headerTitleStyle: {
            fontWeight: 'bold', // Style du titre
          },
        }}
      />

      {/* Écran d'inscription */}
      <Stack.Screen
        name="register"
        options={{
          title: 'Inscription', // Titre de l'écran
          headerLeft: () => (
            <Button
              title="Retour"
              onPress={() => navigation.goBack()} // Retour à l'écran précédent
            />
          ),
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
  );
}