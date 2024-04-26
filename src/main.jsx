import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDm7JkHOfHX72Kws3ZOsoIrY5NB2aWXWEs",
  authDomain: "mundo-visual-c9a2b.firebaseapp.com",
  projectId: "mundo-visual-c9a2b",
  storageBucket: "mundo-visual-c9a2b.appspot.com",
  messagingSenderId: "921069852828",
  appId: "1:921069852828:web:d2f551b979a153295f3559"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
