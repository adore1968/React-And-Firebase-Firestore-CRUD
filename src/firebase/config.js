// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRPMIg6FSYNCJfCelZjo0ziPzwk_Wftpw",
  authDomain: "react-fb-crud-23fda.firebaseapp.com",
  projectId: "react-fb-crud-23fda",
  storageBucket: "react-fb-crud-23fda.appspot.com",
  messagingSenderId: "153111651210",
  appId: "1:153111651210:web:e79b447be3104c35a2de73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
