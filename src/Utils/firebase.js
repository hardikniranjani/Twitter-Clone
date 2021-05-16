import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCaACXPsFZxNS1TDAa5bOPHbxCUj0bjm34",
    authDomain: "twitterclone02.firebaseapp.com",
    projectId: "twitterclone02",
    storageBucket: "twitterclone02.appspot.com",
    messagingSenderId: "124715409233",
    appId: "1:124715409233:web:e4dd352ccc87b45a5a7d70",
    measurementId: "G-TG948QGYC5"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth , provider, storage };
export default db;