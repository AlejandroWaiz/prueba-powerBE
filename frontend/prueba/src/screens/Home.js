import React from "react";

import AdminView from "../components/AdminView";
import UserView from "../components/UserView";

import firebaseApp from "../firebase/credentials";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <div>
      Home Page
      <button onClick={() => signOut(auth)}> Close session</button>
      {user.rol === "admin" ? <AdminView user={user} /> : <UserView user={user} />}
    </div>
  );
}

export default Home;