// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDHXdmCTGvuCeiVjonuiuVse_hhBMzsL8",
  authDomain: "fire-study-214ca.firebaseapp.com",
  projectId: "fire-study-214ca",
  storageBucket: "fire-study-214ca.appspot.com",
  messagingSenderId: "353723379749",
  appId: "1:353723379749:web:62d51e5b4512d98c9d4fcc",
  measurementId: "G-ZY4W6FB7JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;