import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-mcCgNbKnP1x-DXDYylHnFgMznZ3Sdp0",
  authDomain: "reelclone-aaa97.firebaseapp.com",
  projectId: "reelclone-aaa97",
  storageBucket: "reelclone-aaa97.firebasestorage.app",
  messagingSenderId: "492900557716",
  appId: "1:492900557716:web:1e2ceb93fa7d0445ed2581"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()