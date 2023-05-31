import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDxuEnKz-aqD2VkGR6xxhxn7OODSXv6d-4",
  authDomain: "portfolio-6b444.firebaseapp.com",
  projectId: "portfolio-6b444",
  storageBucket: "portfolio-6b444.appspot.com",
  messagingSenderId: "107145669746",
  appId: "1:107145669746:web:9e324ef026fa779cd966eb",
  measurementId: "G-BRW9RQ9JEF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();