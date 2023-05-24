
import { initializeApp } from "firebase/app";

// Here is where you put your credentials :P 
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};



const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;