import React from "react";
import axios from "axios";
import { useEffect } from "react";
export default function Beauty() {
  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>this is beauty page</div>;
}
