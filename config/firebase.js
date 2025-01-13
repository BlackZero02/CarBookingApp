import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from "expo-constants";
// Firebase config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpXAgfwCiEJKdvIKD08xCK1GULm5Vgnx8",
  authDomain: "chatapp9990.firebaseapp.com",
  projectId: "chatapp9990",
  storageBucket: "chatapp9990.firebasestorage.app",
  messagingSenderId: "886304868085",
  appId: "1:886304868085:web:eb7687b1c0abebb3aae7bc",
  measurementId: "G-LZ3VY0M7ZZ"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);