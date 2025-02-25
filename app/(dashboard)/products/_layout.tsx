import { Stack } from 'expo-router';

export default function ProductsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Produits', // Titre de l'écran
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