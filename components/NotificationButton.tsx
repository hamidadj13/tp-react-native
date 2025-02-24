// components/NotificationButton.tsx
import React from 'react';
import { Button, Alert } from 'react-native';
import { getFCMToken, setupNotifications } from '../services/firebase';

export default function NotificationButton() {
  const handleNotification = async () => {
    try {
      await setupNotifications();
      const token = await getFCMToken();
      Alert.alert('Notification', `Token FCM : ${token}`);
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de configurer les notifications.');
    }
  };

  return (
    <Button title="Activer les notifications" onPress={handleNotification} />
  );
}