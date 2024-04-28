// Import the functions you need from the SDKs you need

import {getAuth} from "firebase/app";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZTlHtK4CL6KiMkwqFrRTv92lS1BtUKvQ",
  authDomain: "assignment10-travel-tourist.firebaseapp.com",
  projectId: "assignment10-travel-tourist",
  storageBucket: "assignment10-travel-tourist.appspot.com",
  messagingSenderId: "12324150321",
  appId: "1:12324150321:web:528f453ac7f0833a34c910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)