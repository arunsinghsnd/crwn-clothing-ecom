import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBUyZZqKdGchLVtw0qgyaHxKtCg5ZK4j0k",
  authDomain: "crwn-clothing-ecom-d6bfc.firebaseapp.com",
  projectId: "crwn-clothing-ecom-d6bfc",
  storageBucket: "crwn-clothing-ecom-d6bfc.appspot.com",
  messagingSenderId: "1003081912667",
  appId: "1:1003081912667:web:21938f46dc0b45759f4a7e",
  measurementId: "G-DQ0L39KSWF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
