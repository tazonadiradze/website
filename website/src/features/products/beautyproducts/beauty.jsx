import React from "react";
import axios from "axios";
import "./beauty.css";
import { useEffect, useState } from "react";

export default function Beauty() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3031/beautyProducts")
      .then((res) => setData(res.data))
      .catch((err) => console.log("error ", err));
  }, []);
  return (
    <div>
      {data.map((each, i) => {
        return (
          <div className="container" key={i}>
            {each.name}
            <div>{each.price}</div>
            <img className="img" src={each.image} />
            <button>add</button>
          </div>
        );
      })}
    </div>
  );
}
