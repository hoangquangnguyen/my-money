import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA0gi8-11xMo2cVR1-UCJbw5Zq2Znj_g8",
  authDomain: "my-money-49b65.firebaseapp.com",
  projectId: "my-money-49b65",
  storageBucket: "my-money-49b65.appspot.com",
  messagingSenderId: "316526391290",
  appId: "1:316526391290:web:3f5ff46d9745d0f87e3e43",
  measurementId: "G-GX2FDHESE5",
};

const app = firebase.initializeApp(firebaseConfig);

//to get data from Collection
const projectFirestore = getFirestore(app);

//to get data from Auth
const projectAuth = firebase.auth();

const timeServer = serverTimestamp();

export { projectFirestore, projectAuth, timeServer };
