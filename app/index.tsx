import { Redirect } from 'expo-router';
import { useAuth } from '../contexts/AuthContext';

export default function Index() {
  const { isAuthenticated, loading } = useAuth(); // Use isAuthenticated instead of user

  // Show nothing while authentication state is loading
  if (loading) {
    return null;
  }

  // Redirect to dashboard if user is authenticated, otherwise to login
  return isAuthenticated ? 
    <Redirect href="/(dashboard)/home" /> : 
    <Redirect href="/auth/login" />;
}