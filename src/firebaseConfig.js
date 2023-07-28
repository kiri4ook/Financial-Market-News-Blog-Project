import firebase from "firebase/compat/app";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDZs1KQQKE7e0Orm6XO2k3LIRdfeYkGIG8",
    authDomain: "financial-market-news-bl-5d438.firebaseapp.com",
    projectId: "financial-market-news-bl-5d438",
    storageBucket: "financial-market-news-bl-5d438.appspot.com",
    messagingSenderId: "562786375321",
    appId: "1:562786375321:web:20f380d6cb0ec4f1c70a08"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;

