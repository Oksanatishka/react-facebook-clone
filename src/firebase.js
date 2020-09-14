import firebase from 'firebase';

const firebaseConfig = {
    apiKey: 'AIzaSyCwwyr1sFcljjvrXNwYASZKGXcVZjW4PzM',
    authDomain: 'fb-clone-project.firebaseapp.com',
    databaseURL: 'https://fb-clone-project.firebaseio.com',
    projectId: 'fb-clone-project',
    storageBucket: 'fb-clone-project.appspot.com',
    messagingSenderId: '883112882620',
    appId: '1:883112882620:web:14305cb5405f498b253bb9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth(); // this auth is going to allow us to do things like logging in, signing in and search etc
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
