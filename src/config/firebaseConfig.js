import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDU52_Rned4s3p4Rpt13mpmzZ1U5Mbt6OA",
    authDomain: "recipe-world-100.firebaseapp.com",
    databaseURL: "https://recipe-world-100.firebaseio.com",
    projectId: "recipe-world-100",
    storageBucket: "recipe-world-100.appspot.com",
    messagingSenderId: "772875458261"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;