import * as Notifications from 'expo-notifications';
import { Alert } from 'react-native';

// Demander la permission pour les notifications
export const requestNotificationPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permission refusée', 'Vous ne recevrez pas de notifications.');
    return false;
  }
  return true;
};
// Récupérer le token Expo Push
export const getExpoPushToken = async () => {
  try {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
    return token;
  } catch (error) {
    console.error('Erreur lors de la récupération du token:', error);
    return null;
  }
};

// Envoyer une notification
export const sendPushNotification = async (expoPushToken: string) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Notification de test',
      body: 'Ceci est une notification de test depuis Expo!',
      sound: 'default',
    },
    trigger: null, // Envoyer immédiatement
  });
};