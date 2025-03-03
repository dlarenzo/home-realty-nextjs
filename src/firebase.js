// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "next-realtor-3b80e.firebaseapp.com",
  projectId: "next-realtor-3b80e",
  storageBucket: "next-realtor-3b80e.firebasestorage.app",
  messagingSenderId: "1055601635448",
  appId: "1:1055601635448:web:c2d60721e486b1fdea3d8d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
