
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBO92PcifxTC-Z8GKFTqtcTFq21EfaZmDE",
  authDomain: "e-commerce-171e2.firebaseapp.com",
  projectId: "e-commerce-171e2",
  storageBucket: "e-commerce-171e2.appspot.com",
  messagingSenderId: "1043238922459",
  appId: "1:1043238922459:web:faaccbe2ed43feffe604fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)
export {fireDB,auth}