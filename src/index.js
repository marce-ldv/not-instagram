import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';



firebase.initializeApp({
    apiKey: "AIzaSyAe6S_aCnbNMBXyUQao2MvXc3jI5L_dsjc",
    authDomain: "not-instagram-bf013.firebaseapp.com",
    databaseURL: "https://not-instagram-bf013.firebaseio.com",
    projectId: "not-instagram-bf013",
    storageBucket: "not-instagram-bf013.appspot.com",
    messagingSenderId: "825893006884"
});

ReactDOM.render(
    <App />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();



