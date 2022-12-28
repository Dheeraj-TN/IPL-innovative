// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7u5p3U4doEOmYXLjxPixPOmK2U9KDPKk",
  authDomain: "innovative-b5bdd.firebaseapp.com",
  projectId: "innovative-b5bdd",
  storageBucket: "innovative-b5bdd.appspot.com",
  messagingSenderId: "41249015239",
  appId: "1:41249015239:web:7007a94f742eacb782c5e2",
  measurementId: "G-K91XFWWRR5",
};
const app = initializeApp(firebaseConfig);

export default getFirestore(app);
