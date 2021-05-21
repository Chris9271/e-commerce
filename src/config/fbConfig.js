//Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'; 
import 'firebase/firestore'; //<- needed if using firestore
import 'firebase/auth';

var firebaseConfig = {
    //Firebase Config
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_Auth_Domain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.REACT_APP_Project_Id,
    storageBucket: process.env.FIREBASE_storageBucket,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
    appId: process.env.FIREBASE_appId
}

//Initialize Firebase instance
firebase.initializeApp(firebaseConfig)
// Initialize Cloud Firestore through Firebase
// firebase.firestore();
export default firebase;
