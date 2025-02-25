// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBdRyGlFUx_QM5lKe8ISJhI7vLNDJU93gQ",
    authDomain: "mon-tp-5d341.firebaseapp.com",
    projectId: "mon-tp-5d341",
    storageBucket: "mon-tp-5d341.firebasestorage.app",
    messagingSenderId: "251792216482",
    appId: "1:251792216482:web:9a7e76073490decf38a2fb",
    measurementId: "G-LXMCR0ZN5D"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);