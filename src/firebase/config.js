import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDyAt52gLyagmvDbAaitHRtTAf1xLILtlw",
  authDomain: "ourtirupati-3c599.firebaseapp.com",
  databaseURL: "https://ourtirupati-3c599-default-rtdb.firebaseio.com",
  projectId: "ourtirupati-3c599",
  storageBucket: "ourtirupati-3c599.appspot.com",
  messagingSenderId: "193357116594",
  appId: "1:193357116594:web:7b14ef14148a2e3ac0c5ab",
  measurementId: "G-3V96CW1G07"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;