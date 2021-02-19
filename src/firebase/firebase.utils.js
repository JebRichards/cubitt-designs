import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDJX9LsRAn0JTzTYaWkwc_4px9gqdp6P1g",
  authDomain: "cubitt-designs.firebaseapp.com",
  projectId: "cubitt-designs",
  storageBucket: "cubitt-designs.appspot.com",
  messagingSenderId: "973143769774",
  appId: "1:973143769774:web:dd361750b0cef3e1e9a33f",
  measurementId: "G-ZCSEB83YHR",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
