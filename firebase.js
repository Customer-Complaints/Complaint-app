// Import the functions you need from the SDKs you need

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkGQmBnaTWyCg5Ti1BM6veE2u80uSGPEk",
  authDomain: "epo-todo-app-e94a8.firebaseapp.com",
  databaseURL: "https://epo-todo-app-e94a8-default-rtdb.firebaseio.com",
  projectId: "epo-todo-app-e94a8",
  storageBucket: "epo-todo-app-e94a8.appspot.com",
  messagingSenderId: "27940059930",
  appId: "1:27940059930:web:1ef57749fa92eb78ef4aa3",
  measurementId: "G-WTQ15KKGSR"
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { auth };