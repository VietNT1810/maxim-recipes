import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID

    apiKey: "AIzaSyCWuafeEY5J6XkYC8nb1eUKZcIP_h5L5as",
    authDomain: "maxim-recipes-3150f.firebaseapp.com",
    projectId: "maxim-recipes-3150f",
    storageBucket: "maxim-recipes-3150f.appspot.com",
    messagingSenderId: "835205262432",
    appId: "1:835205262432:web:86f2345ff579a74562e705"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);