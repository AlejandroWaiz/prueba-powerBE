import { useEffect, useState } from "react";

export function MoneyConverter(props){
    const [money, setMoney] = useState([]);

  const getApiData = async () => {
    await fetch("http://localhost:4000/convert",
        {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props)
      })
      .then((response) => response.json())
      .then((data) => {
        setMoney(data);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);
}