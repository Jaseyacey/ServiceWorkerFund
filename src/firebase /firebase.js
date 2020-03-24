import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhOfLcl-Bz4c83joQS4VVrYlrK6RzH4Cg",
    authDomain: "serverfund-d332d.firebaseapp.com",
    databaseURL: "https://serverfund-d332d.firebaseio.com",
    projectId: "serverfund-d332d",
    storageBucket: "serverfund-d332d.appspot.com",
    messagingSenderId: "37303988423",
    appId: "1:37303988423:web:88fdd26b22ebba53bacee2",
    measurementId: "G-S5XQGK4WLD"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;