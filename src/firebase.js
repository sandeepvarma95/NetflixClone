import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv7pchkjR-lJ2OrhhGd5_e47JbaczjdiY",
  authDomain: "netflix-clone-94674.firebaseapp.com",
  projectId: "netflix-clone-94674",
  storageBucket: "netflix-clone-94674.appspot.com",
  messagingSenderId: "282445071836",
  appId: "1:282445071836:web:4583a399fac27f34cdbb19",
  measurementId: "G-FY0H7C753N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);         // initialize the application from firebase app
const db = firebaseApp.firestore()                                 //connect to realtime db from firebase
const auth = firebase.auth()                                       // this is for authenticaton

export { auth }
export default db;