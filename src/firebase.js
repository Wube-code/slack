// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWFbFt_9K10C65m6A0ijYfMclV4WuoxD8",
  authDomain: "slackclone-64d28.firebaseapp.com",
  projectId: "slackclone-64d28",
  storageBucket: "slackclone-64d28.appspot.com",
  messagingSenderId: "46528463891",
  appId: "1:46528463891:web:c90b416a45776170902be6",
  measurementId: "G-G9SBX3X41C"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
