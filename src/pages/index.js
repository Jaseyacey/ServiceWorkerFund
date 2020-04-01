import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase/app';
import 'firebase/<PACKAGE>';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const config = {
  apiKey: "AIzaSyAhOfLcl-Bz4c83joQS4VVrYlrK6RzH4Cg",
  authDomain: "serverfund-d332d.firebaseapp.com",
  databaseURL: "https://serverfund-d332d.firebaseio.com",
  projectId: "serverfund-d332d",
  storageBucket: "serverfund-d332d.appspot.com",
  messagingSenderId: "37303988423",
  appId: "1:37303988423:web:88fdd26b22ebba53bacee2",
  measurementId: "G-S5XQGK4WLD"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('submitForm').addEventListener('contactMeForm', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000); 

  // Clear form
  document.getElementById('contactMeForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}