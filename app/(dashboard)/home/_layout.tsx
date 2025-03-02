import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Accueil',
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          // Icône dans l'en-tête
          headerLeft: () => (
            <Ionicons name="home-outline" size={24} color="#fff" style={{ marginLeft: 15 }} />
          ),
          // Bouton Profil dans l'en-tête
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push('/profile')} style={{ marginRight: 15 }}>
              <Ionicons name="person-circle-outline" size={28} color="#fff" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}
