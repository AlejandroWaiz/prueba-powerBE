import React, { useState } from "react";

import Home from "./screens/Home";
import Login from "./screens/Login";

import firebaseApp from "./firebase/credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  function setUserWithFirebaseAndRol(firebaseUser) {
    getRol(firebaseUser.uid).then((rol) => {
      const userData = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        rol: rol,
      };
      setUser(userData);
      console.log("user data:", userData);
    });
  }

  onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      

      if (!user) {
        setUserWithFirebaseAndRol(firebaseUser);
      }
    } else {
      setUser(null);
    }
  });

  return <>
  {user ? <Home user={user} /> : <Login />}
  </>;
}

export default App;