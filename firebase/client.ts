import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCG9vuRWCXh2GKbmU1bHAip4_WTA-sZi1g",
  authDomain: "intervuex-1f18c.firebaseapp.com",
  projectId: "intervuex-1f18c",
  storageBucket: "intervuex-1f18c.firebasestorage.app",
  messagingSenderId: "489045681555",
  appId: "1:489045681555:web:aa52acf7279a671dde7466",
  measurementId: "G-LW8BJ7T01S"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);