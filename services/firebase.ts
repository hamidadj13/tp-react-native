import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyB6wj6n8Zztz_Vsr2WtWUY9YmHItl6cknY",
    authDomain: "estiam-react-native-project.firebaseapp.com",
    projectId: "estiam-react-native-project",
    storageBucket: "estiam-react-native-project.firebasestorage.app",
    messagingSenderId: "351864405181",
    appId: "1:351864405181:web:713ff1144c9c87ff828bd4",
    measurementId: "G-RBPPSQL6LQ"
  };

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

