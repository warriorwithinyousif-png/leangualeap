
'use client';

import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig"; // Import the config from the server-only file

// Initialize Firebase
const app: FirebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Firestore without specific persistence settings for broader compatibility
const db = initializeFirestore(app, {});

export { app, auth, db };
