// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDayjkMTNvHHY5UrwPPpzn3RDQtu5M1wDw",
  authDomain: "ratemyboss-4727b.firebaseapp.com",
  projectId: "ratemyboss-4727b",
  storageBucket: "ratemyboss-4727b.appspot.com",
  messagingSenderId: "1001361783054",
  appId: "1:1001361783054:web:6696b754fb733682597f5f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

