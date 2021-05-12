import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';

var firebaseConfig = {
  apiKey: "AIzaSyAH7ayWsC1dbiOeLLkgullTGoIYnExkS0A",
  authDomain: "movie-app-7527e.firebaseapp.com",
  projectId: "movie-app-7527e",
  storageBucket: "movie-app-7527e.appspot.com",
  messagingSenderId: "373292683819",
  appId: "1:373292683819:web:ed4703f3db15703898106e"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
