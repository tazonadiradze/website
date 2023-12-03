import React from "react";
import "./main.component.css";
import PHONEIMAGE from "../../assets/phone.jpg";
import GRILLIMAGE from "../../assets/GRILL.jpg";
import AD from "../../assets/ad.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import IMAGE from "../../assets/copy.png";
import IMG from "../../assets/IMG.jpg";
import "./main.component.css";

export default function Main() {
  return (
    <div className="mainDiv">
      <Link to="/Beauty" className="category beauty">
        <img className="category-img" src={IMAGE} alt="Beauty Products" />
      </Link>
      <Link to="/Toys" className="category toys">
        <img className="category-img" src={PHONEIMAGE} alt="Toys under $25" />
      </Link>
      <Link to="/Gifts" className="category gifts">
        <img className="category-img" src={GRILLIMAGE} alt="Gifts under $20" />
      </Link>
      <Link to="/Gifts" className="category gifts">
        <img className="category-img" src={IMG} alt="Gifts under $20" />
      </Link>
      <div className="ad">
        <img src={AD} />
      </div>
    </div>
  );
}
