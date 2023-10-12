import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDSLgXkAaL8TIL9pS1ZMbHI1yrbezAnulc",
  authDomain: "project-js-5655a.firebaseapp.com",
  projectId: "project-js-5655a",
  storageBucket: "project-js-5655a.appspot.com",
  messagingSenderId: "690190490060",
  appId: "1:690190490060:web:27dac19ddfb4031c5f2569",
  measurementId: "G-SSTGGGLDTZ"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);