import React from "react";
import "./header.component.css";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showDivHandler } from "../cart/cart-slice";

export default function Header() {
  const showDiv = useSelector((state) => state.cart.showDiv);
  const dispatch = useDispatch();
  const cartHandler = () => {
    dispatch(showDivHandler());
  };
  return (
    <header className="header">
      <Link to="/">
        <div className="homePage ">Amazon</div>
      </Link>
      <div onClick={cartHandler} className="cart">
        Cart
      </div>

      {showDiv && <div className="cart-inside">cart inside </div>}
    </header>
  );
}
