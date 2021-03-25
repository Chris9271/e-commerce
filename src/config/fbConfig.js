//Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'; 
import 'firebase/firestore'; //<- needed if using firestore
import 'firebase/auth';

var firebaseConfig = {
    //Firebase Config
    apiKey: "AIzaSyCQSDRnO2Nm7qsV5DsBgW88x2WvT0WZnbg",
    authDomain: "ecommerce-f4d40.firebaseapp.com",
    databaseURL: process.env.databaseURL,
    projectId: "ecommerce-f4d40",
    storageBucket: process.env.FIREBASE_storageBucket,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
    appId: process.env.FIREBASE_appId
}

//Initialize Firebase instance
firebase.initializeApp(firebaseConfig)

export default firebase;
