// Firebase
import { initializeApp } from "firebase/app";

import { 
  getDatabase, 
  ref, 
  set, 
  push, 
  get, 
  child 
} from "firebase/database";

import * as firebaseStorage from "firebase/storage";

import { 
  GoogleAuthProvider, 
  getAuth, 
  signInWithPopup, 
  onAuthStateChanged  
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const firebase = initializeApp(firebaseConfig);

const database = getDatabase();

export {
  firebase,
  database,
  ref,
  set,
  push,
  get,
  child,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  firebaseStorage
};