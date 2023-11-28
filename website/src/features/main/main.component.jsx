import React from "react";
import "./main.component.css";
import IMG from "../../assets/beauty.jpg";
import TOYS from "../../assets/toys.jpg";
import GIFT from "../../assets/gift.jpg";
import SALES from "../../assets/sales.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Main() {
  return (
    <div className="mainDiv">
      <div className="beauty">
        <Link to="/Beauty">
          <h4>Beauty products</h4>
          <img className="beauty-img" src={IMG} />
        </Link>
      </div>
      <div className="toys">
        <Link to="/Toys">
          <h4>Toys under $25</h4>
          <img className="toys-img" src={TOYS} />
        </Link>
      </div>
      <div className="gifts">
        <Link to="/Gifts">
          <h4> gifts under $20</h4>
          <img className="gift-img" src={GIFT} />
        </Link>
      </div>
    </div>
  );
}
