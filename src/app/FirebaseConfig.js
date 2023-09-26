import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgwchMeU9ZSq9RXSPGqigY-B8itfBe_iA",
  authDomain: "nextjs-comick-social-login.firebaseapp.com",
  projectId: "nextjs-comick-social-login",
  storageBucket: "nextjs-comick-social-login.appspot.com",
  messagingSenderId: "115828382799",
  appId: "1:115828382799:web:e17a1fd5762062fbce1e3a",
  measurementId: "G-ZJDL3HGXN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new FacebookAuthProvider();

export {auth, provider}