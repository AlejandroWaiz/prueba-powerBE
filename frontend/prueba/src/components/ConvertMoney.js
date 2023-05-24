import { useEffect, useState } from "react";
import RenderConvertion from "./RenderConvertion";

export default function ConvertMoney({user}) {

  const [toConvert, setToConvert] = useState([]);

  let dataFromServer;

  const handleClick = async () => {

    console.log("fetching...")

    let newDate = new Date()
    let currentDate = newDate.getDate() + "/" + newDate.getMonth() + "/" + newDate.getFullYear()

    const bodyToConvert = JSON.stringify({ toConvert: toConvert, date: currentDate, user: user.email })

    try {

     const data = await fetch("http://localhost:8080/convert",
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: bodyToConvert
        })
        .then((response) => response.json())

        console.log("data displayed", data)
        RenderConvertion(data)
        

    } catch (e) {

      console.log(e)

    }
  };

  return (
    <div>
      <input type="text" value={toConvert} onChange={e => setToConvert(e.target.value)} />
      <button onClick={handleClick}>Convert money</button>

    </div>
  );
}
