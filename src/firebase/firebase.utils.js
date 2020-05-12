import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAfam3VYeSCBvXYDlXQsSTxGZFbhhJChtA",
    authDomain: "crown-db-4b297.firebaseapp.com",
    databaseURL: "https://crown-db-4b297.firebaseio.com",
    projectId: "crown-db-4b297",
    storageBucket: "crown-db-4b297.appspot.com",
    messagingSenderId: "1081146822909",
    appId: "1:1081146822909:web:bdedd1c842529f2271ee94",
    measurementId: "G-GBFMTSVP6X"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;