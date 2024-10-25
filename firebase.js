
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "truemix-6f825.firebaseapp.com",
  projectId: "truemix-6f825",
  storageBucket: "truemix-6f825.appspot.com",
  messagingSenderId: "670633847970",
  appId: "1:670633847970:web:ce9fde6bf1887df1507bfb"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore(app)