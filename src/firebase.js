import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyQgf0ToYvnpW1WcmHcx6m90K97lyp2pQ",
    authDomain: "snapchat-4c442.firebaseapp.com",
    projectId: "snapchat-4c442",
    storageBucket: "snapchat-4c442.appspot.com",
    messagingSenderId: "998577461434",
    appId: "1:998577461434:web:b5f8ada6dd4119d4718a83",
    measurementId: "G-J0SVD805PD"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();

const auth = new firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider, db, storage};