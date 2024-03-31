// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


//1st thing
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBAeVpgVYDo8xN1Uh2pZibcDXlFtwjEZxY",
  authDomain: "anike-salubata.firebaseapp.com",
  projectId: "anike-salubata",
  storageBucket: "anike-salubata.appspot.com",
  messagingSenderId: "203654372988",
  appId: "1:203654372988:web:14dcfdb5ddcb748fbe73f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//2nd thing
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//3rd thing
export default app;
