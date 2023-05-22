import React from "react";
import { useEffect, useState } from "react";


function UserView(props) {

  const [toConvert, setToConvert] = useState([]);

  const handleClick = async () => {
    

    console.log("fetching...")
    console.log(JSON.stringify(toConvert))

    let newDate = new Date()
    let currentDate = newDate.getDate()+"/"+ newDate.getMonth() +"/"+ newDate.getFullYear()

    const bodyToConvert = JSON.stringify({ toConvert: toConvert, date: currentDate, user: props.user.email })

    console.log(bodyToConvert)

    await fetch("http://localhost:4000/convert",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        },
        body: bodyToConvert
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      
  };


  return (
    <div>
      <input type="text" value={toConvert} onChange={e => setToConvert(e.target.value)} />
      <button onClick={handleClick}>Convert money</button>
    </div>
  );
}


export default UserView;