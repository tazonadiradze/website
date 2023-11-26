import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Beauty() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {data.map((each) => {
        return each.name;
      })}
    </div>
  );
}
