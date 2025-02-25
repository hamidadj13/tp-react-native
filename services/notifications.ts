import * as Notifications from 'expo-notifications';

// Demander la permission pour les notifications
export const requestNotificationPermission = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission refusée ! Vous ne recevrez pas de notifications.');
  } else {
    console.log('Permission accordée !');
  }
};

// Récupérer le token Expo Push
export const getExpoPushToken = async () => {
  try {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', token);
    return token;
  } catch (error) {
    console.error('Erreur lors de la récupération du token :', error);
    return null;
  }
};

// Envoyer une notification
export const sendPushNotification = async (expoPushToken: string) => {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Titre de la notification',
    body: 'Ceci est le corps de la notification',
    data: { additionalData: 'Données supplémentaires' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
};