// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDYM4M6talLi5r2q_qkjGr3_zWoPwEtoE0",
    authDomain: "auanhseng.firebaseapp.com",
    projectId: "auanhseng",
    storageBucket: "auanhseng.appspot.com",
    messagingSenderId: "149810453145",
    appId: "1:149810453145:web:53ec16edc3d4e9d9bdf608",
    measurementId: "G-XE78FW8WBM"
};
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
