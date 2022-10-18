// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL6Jxyxm0VAnAUQWZmSC9GI-pztiSC6eM",
  authDomain: "aula01-43a61.firebaseapp.com",
  projectId: "aula01-43a61",
  storageBucket: "aula01-43a61.appspot.com",
  messagingSenderId: "668163222929",
  appId: "1:668163222929:web:dc1752cf27fa8783863e30",
  measurementId: "G-CZBFDJCVDG",
}

// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;