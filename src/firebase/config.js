import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, query, where, serverTimestamp, orderBy, updateDoc, getDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile  } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDHaIPVQOa80jHCysbPpoZ9q5DC2teqNyc",
    authDomain: "vue3-firebase-projeler-1ea1e.firebaseapp.com",
    projectId: "vue3-firebase-projeler-1ea1e",
    storageBucket: "vue3-firebase-projeler-1ea1e.appspot.com",
    messagingSenderId: "205011852365",
    appId: "1:205011852365:web:9157a8736296b9288e1004"
  };

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot, query, where, serverTimestamp, orderBy, updateDoc, getDoc, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile  }