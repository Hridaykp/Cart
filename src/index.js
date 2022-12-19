import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
  apiKey: "AIzaSyB_bn11obm0GQPEq3B0robygIUpvNRHJwE",
  authDomain: "cart-d8ea4.firebaseapp.com",
  projectId: "cart-d8ea4",
  storageBucket: "cart-d8ea4.appspot.com",
  messagingSenderId: "45277619909",
  appId: "1:45277619909:web:e75815b188045b0c2672ac",
  measurementId: "G-RRWZGH7396"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
