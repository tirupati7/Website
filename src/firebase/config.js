import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC6ZIHMdAq3PDkhwAniZM9nINTUEZjzXqI",
    authDomain: "ourtpt-local-dev.firebaseapp.com",
    databaseURL: "https://ourtpt-local-dev-default-rtdb.firebaseio.com",
    projectId: "ourtpt-local-dev",
    storageBucket: "ourtpt-local-dev.appspot.com",
    messagingSenderId: "842076483697",
    appId: "1:842076483697:web:42966e0ca6f6216e2debd0",
    measurementId: "G-4V4286BVDP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export default firebase;