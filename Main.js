// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjvvqC6vTFlAkLdx6VVmnVYnMiP8n7e4Y",
  authDomain: "pilot1-123da.firebaseapp.com",
  projectId: "pilot1-123da",
  storageBucket: "pilot1-123da.appspot.com",
  messagingSenderId: "552714322577",
  appId: "1:552714322577:web:381e7e9713e7c2a85ff530",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e){
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var surname = getInputVal('surname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    //Save message
    saveMessage(name, surname, email, phone, message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    //Clear Form
    document.getElementById('contactForm').reset();
}

//Function to get form values
function getinputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, surname, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        surname: surname,
        email: email,
        phone: phone,
        message: message
    })
}