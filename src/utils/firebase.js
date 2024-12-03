// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjFEXSjJr1FProlC727_9CHHMRJ8fS__4",
    authDomain: "netflixgpt-fab2e.firebaseapp.com",
    projectId: "netflixgpt-fab2e",
    storageBucket: "netflixgpt-fab2e.firebasestorage.app",
    messagingSenderId: "735284051141",
    appId: "1:735284051141:web:586428078a2d01436244ac",
    measurementId: "G-MHTF8Z8L00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()