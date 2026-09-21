// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  getStorage
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

// Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyDl-q3tb-NHhkVXz8N8ahE1xB1UBlX7M5A",
  authDomain: "electric-products-catalog.firebaseapp.com",
  projectId: "electric-products-catalog",
  storageBucket: "electric-products-catalog.firebasestorage.app",
  messagingSenderId: "110173719557",
  appId: "1:110173719557:web:ac2f4aad33cfabc2a4606c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export services
export {
  app,
  auth,
  db,
  storage
};

export const isFirebaseConfigured = !Object.values(firebaseConfig).some(value => value.startsWith("REPLACE_WITH_"));