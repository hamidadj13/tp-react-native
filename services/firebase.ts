// services/firebase.ts
import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async (): Promise<void> => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
};

export const getFCMToken = async (): Promise<string> => {
  const token = await messaging().getToken();
  console.log('FCM Token:', token);
  return token;
};

export const setupNotifications = (): void => {
  messaging().onMessage(async remoteMessage => {
    console.log('Notification received:', remoteMessage);
  });

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Background notification:', remoteMessage);
  });
};