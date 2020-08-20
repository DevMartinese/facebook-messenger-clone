import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyAWpTVKbJ2TkgOl4RgiezBir1RToHspYuo",
    authDomain: "facebook-messenger-clone-48200.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-48200.firebaseio.com",
    projectId: "facebook-messenger-clone-48200",
    storageBucket: "facebook-messenger-clone-48200.appspot.com",
    messagingSenderId: "83840859086",
    appId: "1:83840859086:web:71be37d12bf5f7a028499f",
    measurementId: "G-2SZG0H7VEX"
});

const db = firebaseApp.firestore();

export default db;