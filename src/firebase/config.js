import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCK_MkiJJUHqGzYu1n7hRUPF54ioGB92dA",
    authDomain: "crafty-a2f12.firebaseapp.com",
    projectId: "crafty-a2f12",
    storageBucket: "crafty-a2f12.appspot.com",
    messagingSenderId: "339774096303",
    appId: "1:339774096303:web:53678eed3e8d5660c4a55a",
    measurementId: "G-2E8ET67T96"
  };

  export default firebase.initializeApp(firebaseConfig)