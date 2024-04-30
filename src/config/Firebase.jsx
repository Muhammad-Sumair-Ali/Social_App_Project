import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  orderBy,
  updateDoc,

} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh1dvKjdeEKQGNYnlXYgLoMHrkjtXuaqY",
  authDomain: "socialnetwork-a184a.firebaseapp.com",
  projectId: "socialnetwork-a184a",
  storageBucket: "socialnetwork-a184a.appspot.com",
  messagingSenderId: "660861997487",
  appId: "1:660861997487:web:fad3508f05d43ce8519f5a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setDoc,
  doc,
  getDoc,
  collection,
  onSnapshot,
  addDoc,
  signOut,
  onAuthStateChanged,
};
