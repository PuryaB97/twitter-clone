import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAlJtq1VAM3ajl28XIa6A1y1jJXQbGObrw",
  authDomain: "clone-56204.firebaseapp.com",
  databaseURL: "https://clone-56204.firebaseio.com",
  projectId: "clone-56204",
  storageBucket: "clone-56204.appspot.com",
  messagingSenderId: "1009731127704",
  appId: "1:1009731127704:web:877012ab661a2bd8bb43ed",
  measurementId: "G-HW0QKZDCDG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
