
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ownui-47804.firebaseapp.com",
  projectId: "ownui-47804",
  storageBucket: "ownui-47804.firebasestorage.app",
  messagingSenderId: "715453710287",
  appId: "1:715453710287:web:7ccee7128153b2ec7d1cba"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}