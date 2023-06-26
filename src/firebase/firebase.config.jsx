// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeMQkiaK1v-2s6UkGIC5aKOiiqoIlMI5A",
  authDomain: "doctors-portal-6234d.firebaseapp.com",
  projectId: "doctors-portal-6234d",
  storageBucket: "doctors-portal-6234d.appspot.com",
  messagingSenderId: "164095556881",
  appId: "1:164095556881:web:0bdeb2971439704afba0b0"
};

// const firebaseConfig = {
//   apiKey: process.env.VITE_apiKey,
//   authDomain: process.env.VITE_authDomain,
//   projectId: process.env.VITE_projectId,
//   storageBucket: process.env.VITE_storageBucket,
//   messagingSenderId: process.env.VITE_messagingSenderId,
//   appId: process.env.VITE_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;