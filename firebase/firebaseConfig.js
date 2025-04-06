//this file is generated when you intialise firebase via console and integrate it with cloud project
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "auth-domain",
  projectId: "project-id",
  storageBucket: "automatic-generated",
  messagingSenderId: "13-digit-number",
  appId: "app-id",
  measurementId: "measurement-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore for use in other parts of the app
export { db };