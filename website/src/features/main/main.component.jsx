import React from "react";
import "./main.component.css";
import IMG from "../../assets/beauty.jpg";
import TOYS from "../../assets/toys.jpg";
import GIFT from "../../assets/gift.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Main() {
  return (
    <div className="mainDiv">
      <div className="beauty">
        <h4>Beauty products</h4>
        <img className="beauty-img" src={IMG} />
        <Link to="/Beauty">
          <div className="button-div">shop now </div>
        </Link>
      </div>
      <div className="toys">
        <h4>Toys under $25</h4>
        <img className="toys-img" src={TOYS} />
        <Link to="/Toys">
          <div className="button-div">shop now </div>
        </Link>
      </div>
      <div className="gifts">
        <h4>Small gifts under $20</h4>
        <img className="gift-img" src={GIFT} />
        <Link to="/Gifts">
          <div className="button-div">shop now </div>
        </Link>
      </div>
    </div>
  );
}
