
import { initializeApp } from "firebase/app";

// Here is where you put your credentials :P 
const firebaseConfig = {
  apiKey: "AIzaSyD8Ek2aHSaG0U_8_InsRZ1_1mwrah6mtko",
  authDomain: "prueba-powerbe.firebaseapp.com",
  projectId: "prueba-powerbe",
  storageBucket: "prueba-powerbe.appspot.com",
  messagingSenderId: "620264870687",
  appId: "1:620264870687:web:a58b50411442266b04d62a",
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;