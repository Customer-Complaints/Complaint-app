// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAO3nW6AFqUE2eIvnB-F5P_voNs_ccECY",
  authDomain: "complaint-app-b5e9e.firebaseapp.com",
  projectId: "complaint-app-b5e9e",
  storageBucket: "complaint-app-b5e9e.appspot.com",
  messagingSenderId: "723236895604",
  appId: "1:723236895604:web:04c9b5a39d7659c49f4a21",
  measurementId: "G-QC9TQSEGPY"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore()

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { auth, firestore };