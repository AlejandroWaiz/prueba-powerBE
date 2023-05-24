import React from "react";
import ConvertMoney from "./ConvertMoney"


export default function UserView({user}) {

  return <>
    
    <h1>Hello {user.email}!</h1>

    <ConvertMoney user={user} />


  </>
  
}
