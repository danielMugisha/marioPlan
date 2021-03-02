import "firebase/firestore";
import "firebase/auth";
import firebase from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBYoMbguRQ_fDrSWtxH4hlnHisJE04yFqM",
  authDomain: "mario-plan-47977.firebaseapp.com",
  projectId: "mario-plan-47977",
  storageBucket: "mario-plan-47977.appspot.com",
  messagingSenderId: "452507473026",
  appId: "1:452507473026:web:7af63ea8dd213f4a02509b",
  measurementId: "G-N28L8HEE1N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
