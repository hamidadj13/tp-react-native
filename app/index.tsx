import { Redirect } from 'expo-router';
import { useAuth } from '../contexts/AuthContext';

export default function Index() {
  const { user } = useAuth(); // Utilisez votre contexte d'authentification

  // Redirige vers le tableau de bord si l'utilisateur est connecté, sinon vers la connexion
  return user ? <Redirect href="/(dashboard)/home" /> : <Redirect href="/auth/login" />;
}