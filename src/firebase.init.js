// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTS4-bJu7I6P9QnjIwo3k2Q3lkJw1lBAs",
  authDomain: "kinbanaki-7ee18.firebaseapp.com",
  projectId: "kinbanaki-7ee18",
  storageBucket: "kinbanaki-7ee18.appspot.com",
  messagingSenderId: "529187757571",
  appId: "1:529187757571:web:7a3867221d941e29593836"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;