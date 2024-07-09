import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLcbK061cGjKqF3KNN35aenSXs8OyTp5k",
  authDomain: "vrms-rentalease.firebaseapp.com",
  projectId: "vrms-rentalease",
  storageBucket: "vrms-rentalease.appspot.com",
  messagingSenderId: "802632171958",
  appId: "1:802632171958:web:4129b9cbdc0995ee024117"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore and get a reference to the service
const db = getFirestore(app);

// Initialize Firebase Storage and get a reference to the service
const storage = getStorage(app);

export { auth, db, storage };