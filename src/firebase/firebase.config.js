// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_apiKey,
  authDomain: import.meta.env.VITE_APP_authDomain,
  projectId: import.meta.env.VITE_APP_projectId,
  storageBucket: import.meta.env.VITE_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_APP_messagingSenderId,
  appId: import.meta.env.VITE_APP_appId,

  // apiKey: 'AIzaSyDkfrlPauloGE_497HWvM_JCTnV3LHRYec',
  // authDomain: 'learn-hub-d6174.firebaseapp.com',
  // projectId: 'learn-hub-d6174',
  // storageBucket: 'learn-hub-d6174.appspot.com',
  // messagingSenderId: '1040658040430',
  // appId: '1:1040658040430:web:2b0636b2ffb23f714a487f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
